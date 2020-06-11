import React from 'react'
import { Field, Button, Heading } from 'components'
import { colorTypes } from 'services/shapes'

const LiveCodingTestResults = ({ user, ...props }) => {
  if (!user) {
    return <h3>Loading...</h3>
  }
  return (
    <>
      <Heading level={2}>You Answered:</Heading>
      <hr />
      <br />
      <Heading level={3}>What is your name?</Heading>
      <Heading level={4}>{user.userName}</Heading>
      <hr />
      <br />
      <Heading level={3}>What is your Country?</Heading>
      <Heading level={4}>{user.country.split('-')[1]}</Heading>
      <hr />
      <br />
      <Heading level={3}>What is your email?</Heading>
      <Heading level={4}>{user.email}</Heading>
      <hr />
      <br />
      <Heading level={3}>What is your favourite color?</Heading>
      <Heading level={4}>{user.favouriteColor}</Heading>
    </>
  )
}

export default LiveCodingTestResults
