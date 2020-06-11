/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { LiveCodingTest } from 'components'
import isEmpty from 'lodash/isEmpty'
import { resourceListReadRequest } from 'store/actions'
import { fromResource } from 'store/selectors'
import queryString from 'query-string'
import { pending } from 'redux-saga-thunk'
import { getCountriesApi } from 'services/apihelpers'
import { toEmail } from 'services/routerhelpers'

class LiveCodingTestContainer extends Component {
  state = {
    search: {},
    error: {
      errorName: '',
      errorCountry: '',
    },
  }

  async componentDidMount() {
    const { location, getCountryList } = this.props
    console.log(toEmail)
    const search = location ? queryString.parse(location.search) : {}
    this.setState({ search })
    await getCountryList()
  }

  getInputValue = (event) => {
    const { target } = event
    const { name, value } = target
    this.setState((prevState) => ({
      search: {
        ...prevState.search,
        [name]: value,
      },
    }))
  }

  handleSubmit = () => {
    console.log('Hello from home')
    const { history } = this.props
    const { search } = this.state
    console.log(search.country === '' || isEmpty(search))
    if (isEmpty(search) || search.userName === '' || search.email === '') {
      this.setState((prevState) => ({
        error: {
          ...prevState.error,
          errorName:
            search.userName === '' || isEmpty(search)
              ? 'Name must contain at least your first name and last name!'
              : '',
          errorCountry:
            search.country === '' || isEmpty(search) ? 'Cannot be empty!' : '',
        },
      }))
    } else {
      history.push(toEmail(search))
    }
  }

  render() {
    const { search, error } = this.state
    console.log(search)
    const { loading, countryList } = this.props
    return (
      <LiveCodingTest
        {...{
          getInputValue: this.getInputValue,
          handleSubmit: this.handleSubmit,
          search,
          countryList,
          loading,
          error,
        }}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  countryList: fromResource.getList(state, getCountriesApi),
  loading: pending(state, `${getCountriesApi}ListRead`),
})

const mapDispatchToProps = (dispatch) => ({
  getCountryList: () => dispatch(resourceListReadRequest(getCountriesApi)),
})

LiveCodingTestContainer.propTypes = {
  getCountryList: PropTypes.func.isRequired,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiveCodingTestContainer)
