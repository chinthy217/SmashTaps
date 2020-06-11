import React from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { LiveCodingTestColor } from 'containers'

const LiveCodingTestColorPage = (props) => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <LiveCodingTestColor {...props} />
    </PageTemplate>
  )
}

export default LiveCodingTestColorPage
