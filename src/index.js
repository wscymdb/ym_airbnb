import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import { HashRouter } from 'react-router-dom'

import App from './App'
import '@/assets/css/index.less'
import Loading from './views/Loding'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <HashRouter>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </HashRouter>
  // </React.StrictMode>
)
