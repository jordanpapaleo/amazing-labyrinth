import {createStore, applyMiddleware, compose} from 'redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import rootReducer from 'ducks'
import {createLogger} from 'redux-logger'

const store = configureStore()
export default store

function configureStore (initialState = {}) {
  const middleware = [thunk, multi]

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger({
      collapsed: true,
      logger: console,
      level: {
        prevState: 'debug',
        action: 'debug',
        nextState: 'debug',
        error: 'error'
      }
    }))
  }

  const enhancers = [
    applyMiddleware(...middleware)
  ]

  const store = createStore(rootReducer, initialState, compose(...enhancers))

  // For hot reloading of react components
  // Also for debugging
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../ducks', () => {
      const nextReducer = require('../ducks').default
      store.replaceReducer(nextReducer)
    })

    // store.subscribe(() => {
    //   console.info('State Tree', store.getState())
    // })
  }

  return store
}
