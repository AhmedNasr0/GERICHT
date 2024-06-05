import './App.css'
import AboutUs from './Components/AboutUs/AboutUs';
import Awards from './Components/Awards/Awards';
import Chef from './Components/Chef/Chef';
import FindUs from './Components/FindUs/FindUs';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Menu from './Components/Menu/Menu';
import Video from './Components/Video/Video';
import Header from './Components/header/header';
import Navbar from './Components/navbar/navbar';

function App() {
    return (
    <>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Menu/>
      <Chef/>
      <Video/>
      <Awards/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </>
  )
}

export default App
