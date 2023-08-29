import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
// import Header from './Components/Common/Header';
// import TopHeader from './Components/TopHeader';
import Herosection from './pages/Herosection/Hero';
import About from './pages/About-section/About';
import Livesection from './pages/Livesection/Livesection';
import Choise from './pages/Choise/Choise';
import Services from './pages/Services/Services';
// import Pricingcard from './Components/Common/Pricingcard';
import Pricingsection from './pages/Pricing-section/Pricingsection';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <>
    {/* <TopHeader/> */}
    {/* <Header/> */}
    <Herosection/>
    <Livesection/> 
    <About/>
    <Choise/>
    <Services/>
    <Pricingsection/>
    <Contact/>
    <hr/>
    </>
  );
}

export default App;
