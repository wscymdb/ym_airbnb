import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import '@/assets/css/index.less'
import Loading from './views/Loding'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Suspense fallback={<Loading />}>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </Suspense>
  // </React.StrictMode>
)
