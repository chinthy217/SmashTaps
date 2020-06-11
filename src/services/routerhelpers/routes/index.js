import queryString from 'query-string'
import {
  LIVE_CODING_TEST_HOME_PATH,
  LIVE_CODING_TEST_EMAIL_PATH,
  LIVE_CODING_TEST_COLOR_PATH,
  LIVE_CODING_TEST_RESULTS_PATH,
} from '../constant'

export function toHome(query) {
  if (query) {
    return `${LIVE_CODING_TEST_HOME_PATH}?${queryString.stringify(query)}`
  }
  return LIVE_CODING_TEST_HOME_PATH
}

export function toEmail(query) {
  if (query) {
    return `${LIVE_CODING_TEST_EMAIL_PATH}?${queryString.stringify(query)}`
  }
  return LIVE_CODING_TEST_EMAIL_PATH
}

export function toColor(query) {
  if (query) {
    return `${LIVE_CODING_TEST_COLOR_PATH}?${queryString.stringify(query)}`
  }
  return LIVE_CODING_TEST_COLOR_PATH
}

export function toResults(query) {
  if (query) {
    return `${LIVE_CODING_TEST_RESULTS_PATH}?${queryString.stringify(query)}`
  }
  return LIVE_CODING_TEST_RESULTS_PATH
}
