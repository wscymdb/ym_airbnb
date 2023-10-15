import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { Alert } from 'antd'

import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { AppWrapper } from './views/style'

const App = memo(() => {
  return (
    <AppWrapper>
      <Alert
        type="success"
        message="本站内容仅用于学习，不作他用，如有侵权，请联系作者！"
        className="alert"
        closable
      />
      <div className="header">
        <AppHeader />
      </div>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer">
        <AppFooter />
      </div>
    </AppWrapper>
  )
})

export default App
