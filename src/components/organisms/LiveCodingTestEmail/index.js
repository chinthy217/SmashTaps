import React from 'react'
import { Field, Button } from 'components'

const LiveCodingTestEmail = ({
  handleSubmit,
  search,
  getInputValue,
  errorEmail,
  ...props
}) => {
  return (
    <>
      <Field
        name="email"
        label="What is your Email?"
        invalid={errorEmail !== ''}
        error={errorEmail !== '' ? errorEmail : ''}
        onChange={getInputValue}
        value={search.email}
      />
      <Button onClick={() => handleSubmit('previous')}>Previous</Button>
      <Button onClick={handleSubmit}>Next</Button>
    </>
  )
}

export default LiveCodingTestEmail
