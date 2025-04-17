import React from 'react'
import AboutSection from './AboutSection';
import FaqSection from './FaqSection';
import Slider from '@/components/shared/Slider';

const page = () => {
  return (
    <div>
      <div className='md:pt-12 pt-6'>
        <AboutSection/>
      </div>
      <div className='md:pt-12 pt-6 md:pb-12 pb-6'>
        <Slider/>
      </div>
      <div className='md:pt-12 pt-6 md:pb-12 pb-6'>
        <FaqSection/>
      </div>
    </div>
  )
}

export default page;