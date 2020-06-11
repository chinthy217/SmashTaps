import React from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { LiveCodingTest } from 'containers'

const SamplePage = (props) => {
  console.log('hello')
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <LiveCodingTest {...props} />
    </PageTemplate>
  )
}

export default SamplePage
