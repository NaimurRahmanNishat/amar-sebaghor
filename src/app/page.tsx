import HeroSection from '@/components/shared/HeroSection';
import Slider from '@/components/shared/Slider';
import AboutSection from './about/AboutSection';
import Features from '@/components/shared/Features';
import Testimonial from '@/components/shared/Testimonial';

const page = () => {
  return (
    <main>
      <div className='pt-12'>
        <HeroSection/>
      </div>
      <div className='pt-12'>
        <Slider/>
      </div>
      <div className='pt-12 pb-16'>
        <AboutSection/>
      </div>
      <div>
        <Features/>
      </div>
      <div>
        <Testimonial/>
      </div>
    </main>
  )
}

export default page;