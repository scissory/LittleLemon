import './App.css';

import {  Route, Routes} from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/Layout';
import Home from './components/Home';
import Bookings from './components/Bookings';
import ConfirmedBooking from './components/ConfirmedBooking';
import EmptyPage from './components/EmptyPage';
import { useRef } from 'react';

function App() {
  return (
    
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
         
        </Routes> 
      </Layout>
    
  );
};

export default App;
