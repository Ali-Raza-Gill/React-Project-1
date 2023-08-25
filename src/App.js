import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Header from './Components/Common/Header';
// import TopHeader from './Components/TopHeader';
import Herosection from './pages/Herosection/Herosection';
import About from './pages/About-section/About';
import Livesection from './pages/Livesection/Livesection';
function App() {
  return (
    <>
    {/* <TopHeader/> */}
    <Header/>
    <Herosection/>
    <Livesection/>
    <About/>
    </>
  );
}

export default App;
