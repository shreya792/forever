import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className=''>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 '>
        <p>Forever is an innovative e-commerce platform offering a seamless shopping experience. Explore a diverse range of high-quality products across categories, tailored to meet your needs.</p>
        <p>Ultimate destination for effortless online shopping. Discover a wide selection of premium products designed to suit every lifestyle. With a focus on quality, convenience, and fast delivery, Forever ensures a hassle-free shopping experience. Elevate your style and shop confidently with Forever’s trusted e-commerce platform!</p>
        <b className='text-gray-800 '>Our Mission </b>
        <p>ultimate destination for effortless online shopping. Discover a wide selection of premium products designed to suit every lifestyle. With a focus on quality, convenience, and fast delivery, Forever ensures a hassle-free shopping experience. Elevate your style and shop confidently with Forever’s trusted e-commerce platform!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Quality assurance is a systematic process focused on ensuring that products or services meet defined standards of excellence. </p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Forever ensures ultimate convenience by offering a seamless shopping experience.  </p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exception Customer Service</b>
          <p className='text-gray-600'>Forever is committed to delivering exceptional customer service. </p>

        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About