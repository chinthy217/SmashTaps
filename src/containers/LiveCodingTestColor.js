/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LiveCodingTestColor } from 'components'
import { connect } from 'react-redux'
import { fromAuth } from 'store/selectors'
import { submitUserDetails } from 'store/actions'
import { toEmail, toResults } from 'services/routerhelpers'
import queryString from 'query-string'

class LiveCodingTestColorContainer extends Component {
  state = {
    search: {},
  }

  componentDidMount() {
    const { location } = this.props
    const search = location ? queryString.parse(location.search) : {}
    this.setState({ search })
  }

  getInputValue = (event) => {
    const { target } = event
    const { name, value } = target
    this.setState((prevState) => ({
      search: {
        ...prevState.search,
        favouriteColor: value,
      },
    }))
  }

  handleSubmit = async (identifier) => {
    const { history, setUserDetails } = this.props
    const { search } = this.state
    if (identifier === 'previous') {
      history.push(toEmail(search))
    } else {
      await setUserDetails(search)
      history.push(toResults())
    }
  }

  render() {
    const { search } = this.state
    console.log(search)
    return (
      <LiveCodingTestColor
        {...{
          getInputValue: this.getInputValue,
          handleSubmit: this.handleSubmit,
          search,
        }}
      />
    )
  }
}

/* const mapStateToProps = (state) => ({
  user: fromAuth.getUser(state),
}) */

const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (query) => dispatch(submitUserDetails({ ...query })),
})

LiveCodingTestColorContainer.propTypes = {
  getCountryList: PropTypes.func.isRequired,
}
export default connect(null, mapDispatchToProps)(LiveCodingTestColorContainer)
