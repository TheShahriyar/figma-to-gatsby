import React from 'react'
import EmbededVideo from '../components/EmbededVideo'
import FeaturesWithTab from '../components/FeaturesWithTab'
import HeroBanner from '../components/HeroBanner'
import Layout from '../components/Layout'
import Testimonial from '../components/Testimonial'

const index = () => {
  return (
    <>
      <Layout>
        <HeroBanner />
        <FeaturesWithTab />
        <EmbededVideo />
        <Testimonial/>
      </Layout>
    </>
  )
}

export default index

