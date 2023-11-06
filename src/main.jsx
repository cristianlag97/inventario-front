import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import Inventario from './Inventario'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Inventario/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
