import HeroSection from '@/components/shared/HeroSection';
import Slider from '@/components/shared/Slider';
import AboutSection from './about/AboutSection';

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
    </main>
  )
}

export default page;