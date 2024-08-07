import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './ReduxStore/ReduxStore.jsx'

axios.defaults.baseURL = 'http://localhost:4000/api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)
