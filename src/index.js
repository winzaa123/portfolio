import React from 'react';
import ReactDOM from 'react-dom';

import './resources/StyleSheet/index.css'; 
import 'bulma/css/bulma.css';
import Container from './pages/Container.react';
 
 
const app = document.getElementById('root');

import createStore from './store/createStore'
import { Provider } from 'react-redux'

const store = createStore()


ReactDOM.render(
  <Provider store={store}>
<Container/>
 </Provider>
  ,app
);

