import React from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { LiveCodingTestEmail } from 'containers'

const LiveCodingTestEmailPage = (props) => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <LiveCodingTestEmail {...props} />
    </PageTemplate>
  )
}

export default LiveCodingTestEmailPage
