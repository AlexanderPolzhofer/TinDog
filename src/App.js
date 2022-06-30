import './App.css';
import FeaturesSection from './components/features-section/features-section.component';
import Navbar from './components/navbar/navbar.component';
import TitleSection from './components/title-section/title-section.component';

const App = () => {
  return (
    <div>
      <Navbar />
      <TitleSection
        headline='Meet new and interesting dogs nearby'
        button='Download'
        image={process.env.PUBLIC_URL + `images/iphone6.png`}
        imageName='iphone-mockup'
      />
      <FeaturesSection />
    </div>

  )
}

export default App;
