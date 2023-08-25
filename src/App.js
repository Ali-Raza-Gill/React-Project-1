import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Header from './Components/Common/Header';
// import TopHeader from './Components/TopHeader';
import Herosection from './pages/Herosection/Herosection';
import About from './pages/About-section/About';
import Livesection from './pages/Livesection/Livesection';
import Choisesection from './pages/Choise-section/Choisesection';
function App() {
  return (
    <>
    {/* <TopHeader/> */}
    <Header/>
    <Herosection/>
    <Livesection/> 
    <About/>
    <Choisesection/>
    <hr/>
    </>
  );
}

export default App;
