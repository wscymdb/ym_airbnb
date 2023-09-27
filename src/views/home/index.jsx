import { request } from '@/services'
import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'

const Home = memo(() => {
  useEffect(() => {
    request
      .request({
        url: '/api/home/highscore',
      })
      .then((res) => {
        console.log(res)
      })
  }, [])
  return (
    <HomeWrapper>
      <HomeBanner />
    </HomeWrapper>
  )
})

export default Home
