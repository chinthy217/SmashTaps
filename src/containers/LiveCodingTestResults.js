/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LiveCodingTestResults } from 'components'
import { connect } from 'react-redux'
import { fromAuth } from 'store/selectors'

// eslint-disable-next-line react/prefer-stateless-function
class LiveCodingTestResultsContainer extends Component {
  render() {
    const { user } = this.props
    console.log(user)
    return (
      <LiveCodingTestResults
        {...{
          user,
        }}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  user: fromAuth.getUser(state),
})

LiveCodingTestResultsContainer.propTypes = {
  getCountryList: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, null)(LiveCodingTestResultsContainer)
