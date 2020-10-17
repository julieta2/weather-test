import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './Redux/store';
import Main from './components/main';
const store = configureStore();

const Index = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
