import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className=''>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-20 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54700 Varanasi , UP</p>
          <p className='text-gray-500'>Tel:(415) 555-0988  <br /> Email: shreyakeshari435@gmail.com </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
           <p className='text-gray-500'>Learn more about jon openings</p>
          <button className='border border-black px-8 py-4 text:sm hover:bg-black hover:text-white transistion-all duration-500 '>Explore jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact