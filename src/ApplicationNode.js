import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {Router, Route} from 'react-router-dom'
import history from 'services/history'
import App from 'views/App'

const ApplicationNode = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route exact path='/' component={App} />
      </Router>
    </Provider>
  )
}

ApplicationNode.propTypes = {
  store: PropTypes.object.isRequired
}

export default ApplicationNode
