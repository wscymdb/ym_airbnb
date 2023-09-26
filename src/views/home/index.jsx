import { request } from '@/services'
import React, { memo, useEffect } from 'react'

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
  return <div>Home</div>
})

export default Home
