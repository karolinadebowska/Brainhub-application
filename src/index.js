import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleForm from './components/SimpleForm/SimpleForm';
import ShowEvents from './components/ShowEvents/ShowEvents';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="App">
        <div className='parent'>
          <div className='container m-5'>
            <div>
              <SimpleForm />
              <ShowEvents />
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();