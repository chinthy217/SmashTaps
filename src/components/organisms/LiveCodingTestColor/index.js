import React from 'react'
import { Field, Button, Heading } from 'components'
import { colorTypes } from 'services/shapes'

const LiveCodingTestColor = ({
  handleSubmit,
  search,
  getInputValue,
  ...props
}) => {
  const colorOptions = colorTypes.map((color) => {
    return (
      <Field
        type="radio"
        name={color.text}
        label={color.text}
        onChange={getInputValue}
        value={color.value}
        checked={color.value === search.favouriteColor}
      />
    )
  })
  return (
    <>
      <Heading level={3}>What is your favourite color?</Heading>
      {colorOptions}
      <Button onClick={() => handleSubmit('previous')}>Previous</Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  )
}

export default LiveCodingTestColor
