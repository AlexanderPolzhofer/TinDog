import './App.css';
import Navbar from './components/navbar/navbar.component';
import CallToActionSection from './components/cta-section/cta-section.component';
import FeaturesSection from './components/features-section/features-section.component';
import Footer from './components/footer/footer.component';
import PressSection from './components/press-section/press-section.component';
import PricingSection from './components/pricing-section/pricing-section.component';
import TestimonialsSection from './components/testimonials-section/testimonials-section.component';
import TitleSection from './components/title-section/title-section.component';

const App = () => {
  return (
    <div>
      <Navbar />
      <TitleSection
        headline='Meet new and interesting dogs nearby'
        button='Download'
        imageSource={process.env.PUBLIC_URL + `images/iphone6.png`}
        imageName='iphone-mockup'
      />
      <FeaturesSection />
      <TestimonialsSection
        sectionName="I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof."
        imageSource={process.env.PUBLIC_URL + `images/dog-img.jpg`}
        imageName='dog-profile'
        description='Pebbles, New York'
      />
      <PressSection
        techCrunch={process.env.PUBLIC_URL + `images/TechCrunch.png`}
        tnw={process.env.PUBLIC_URL + `images/tnw.png`}
        bizInsider={process.env.PUBLIC_URL + `images/bizInsider.png`}
        mashable={process.env.PUBLIC_URL + `images/mashable.png`}
      />
      <PricingSection />
      <CallToActionSection />
      <Footer />
    </div>
  )
}

export default App;
