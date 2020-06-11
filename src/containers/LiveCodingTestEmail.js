/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LiveCodingTestEmail } from 'components'
import { toHome, toColor } from 'services/routerhelpers'
import queryString from 'query-string'
import { email } from 'services/validation'
import isEmpty from 'lodash/isEmpty'

class LiveCodingTestEmailContainer extends Component {
  state = {
    search: {},
    errorEmail: '',
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
        [name]: value,
      },
    }))
  }

  handleSubmit = (identifier) => {
    const { history } = this.props
    const { search, errorEmail } = this.state
    const error = email(search.email)
    if (error) {
      this.setState({ errorEmail: error })
    }
    if (identifier === 'previous') {
      history.push(toHome(search))
    } else if (!error) {
      history.push(toColor(search))
    }
  }

  render() {
    const { search, errorEmail } = this.state
    console.log(search)
    return (
      <LiveCodingTestEmail
        {...{
          getInputValue: this.getInputValue,
          handleSubmit: this.handleSubmit,
          search,
          errorEmail,
        }}
      />
    )
  }
}

LiveCodingTestEmailContainer.propTypes = {
  getCountryList: PropTypes.func.isRequired,
}
export default LiveCodingTestEmailContainer
