import React from 'react'
import { Field, Button } from 'components'

const LiveCodingTest = ({
  countryList,
  loading,
  search,
  getInputValue,
  handleSubmit,
  error,
  ...props
}) => {
  if (loading) {
    return <h3>Loading...</h3>
  }

  console.log(error)

  const optionText = '-- select an option --'
  const defaultOptions = (
    <option key="selectOptionDefault" selected value="">
      {optionText}
    </option>
  )

  // eslint-disable-next-line react/prop-types
  const countryOption = countryList.map((item) => {
    return (
      <option key={item.alpha2Code} value={`${item.alpha2Code}-${item.name}`}>
        {item.name}
      </option>
    )
  })

  return (
    <>
      <Field
        name="userName"
        label="What is your Name?"
        invalid={error.errorName !== ''}
        error={error.errorName !== '' ? error.errorName : ''}
        onChange={getInputValue}
        value={search.userName}
      />
      <Field
        name="country"
        type="select"
        label="What is your Country?"
        invalid={error.errorCountry !== ''}
        error={error.errorCountry !== '' ? error.errorCountry : ''}
        onChange={getInputValue}
        value={search.country}>
        {defaultOptions}
        {countryOption}
      </Field>
      <Button onClick={handleSubmit}>Next</Button>
    </>
  )
}

export default LiveCodingTest
