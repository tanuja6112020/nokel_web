import React, { Fragment} from 'react';
import AboutUs from './Component/AboutUs';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

export default function Aboutus() {
     return (
      <Fragment> 
        <Header /> 
          <AboutUs />
         <Footer />
     </Fragment>
   )
 }     