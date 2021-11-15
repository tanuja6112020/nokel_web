import React, { Fragment} from 'react';
import Faq from './Component/Faq';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

export default function Faqs() {
     return (
      <Fragment> 
        <Header /> 
          <Faq />
         <Footer />
     </Fragment>
   )
 }     