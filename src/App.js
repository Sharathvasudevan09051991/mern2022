import './App.css';
import Register from './components/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Fragment } from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
  <Provider store={store}>
  <Router>
    <Fragment>
      <Routes>
      <Route exact path='/' element={<Register />}  />
      </Routes>
    </Fragment>
  </Router>
  </Provider>
  );
}

export default App;
