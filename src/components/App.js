import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {
  HomePage,
  SamplePage,
  NotFoundPage,
  LiveCodingTestEmailPage,
  LiveCodingTestColorPage,
  LiveCodingTestResultsPage,
} from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/sample-page" component={SamplePage} />
          <Route
            path="/sample-page-email"
            component={LiveCodingTestEmailPage}
          />
          <Route
            path="/sample-page-color"
            component={LiveCodingTestColorPage}
          />
          <Route
            path="/sample-page-results"
            component={LiveCodingTestResultsPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
