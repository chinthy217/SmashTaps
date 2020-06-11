import React from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { LiveCodingTestResults } from 'containers'

const LiveCodingTestColorPage = (props) => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <LiveCodingTestResults {...props} />
    </PageTemplate>
  )
}

export default LiveCodingTestColorPage
