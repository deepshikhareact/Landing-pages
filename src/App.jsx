import { lazy,Suspense} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Header1 = lazy(() => import('./Components/Header1/Header'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Home = lazy(() => import('./Pages/Home/Home'));
const CardsPage = lazy(() => import('./Pages/page'));
const About = lazy(() => import('./Pages/About/About'));
const BehindUs = lazy(() => import('./Pages/BehindUs/BehindUs'));
const AllPages = lazy(() => import('./Pages/Combined/AllPages'));
const ServicePage = lazy(() => import('./Pages/Service/Service'));
const DetailsPage = lazy(() => import('./Pages/Service/Details/Details'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Header1 />
        <Routes>
          <Route path="/" element={<AllPages />} />
          <Route path="/pre" element={<CardsPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/behindUs" element={<BehindUs />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service/details" element={<DetailsPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
