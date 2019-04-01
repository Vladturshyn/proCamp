import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../redux/reducers';

export default function configureStore() {
  const middleware = [thunk];

  const store = createStore(
    rootReducers,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );

  return store;
}
