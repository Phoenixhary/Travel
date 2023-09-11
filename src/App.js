import Hero from "./Components/Hero.jsx";
import Navbar from "./Components/Navbar.jsx";
import Offers from "./Components/Offers.jsx";
import Plan from "./Components/Plan.jsx";
import Rooms from "./Components/Rooms.jsx";
import Slider from "./Components/Slider.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
    return ( 
      <div>
         <Navbar />
        <Hero />
        <Offers />
        <Plan />
        <Rooms />
        <Slider />
        <Footer />
    </div>
     );
}
 
export default App;