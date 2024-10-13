import './App.css';

import {  Route, Routes} from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/Layout';
import Home from './components/Home';
import Bookings from './components/Bookings';
import ConfirmedBooking from './components/ConfirmedBooking';
import EmptyPage from './components/EmptyPage';


function App() {
  return (
    
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route 
            path={pages.get('about').path} 
            element={<EmptyPage />} 
          />
          <Route 
            path={pages.get('menu').path} 
            element={<EmptyPage />} 
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route 
            path={pages.get('confirmedBooking').path} 
            element={<ConfirmedBooking />} 
          />
          <Route 
            path={pages.get('orderOnline').path} 
            element={<EmptyPage />} 
          />
          <Route 
            path={pages.get('login').path} 
            element={<EmptyPage />} 
          />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </Layout>
    </>
    
  );
};

export default App;
