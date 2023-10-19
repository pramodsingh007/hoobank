import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Bussiness from './components/Bussiness';
import Billing from './components/Billing';
import Cards from './components/Cards';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Stats></Stats>
      <Bussiness></Bussiness>
      <Billing></Billing>
      <Cards></Cards>
      <Testimonials></Testimonials>
      <Clients></Clients>
      <CTA></CTA>
      <Footer></Footer>
    </>
  );
}

export default App;
