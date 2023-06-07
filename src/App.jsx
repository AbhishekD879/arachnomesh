import './App.css';
import Header from './components/Header/Header';
import OurWork from './components/OurWork/OurWork';
import ProductPage from './components/ProductPage/ProductPage';
import Promo from './components/Promo/Promo';
import SmartSip from './components/SmartSip/SmartSip';
import Testimonials from './components/Testemonials/Testimonials';
import {Route} from 'wouter';

function LandingPage() {
  return (
    <>
      <Promo />
      <SmartSip />
      <OurWork />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <>
      <Route path='/' component={LandingPage} />
      <Route path='/product' component={ProductPage} />
    </>
  );
}

export default App;
