import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import middleware
// import middleware from './middelware';

// import reducer from './reducers';

// const store = createStore(reducer, middleware);

ReactDom.render(<App />, document.querySelector('#root'));
