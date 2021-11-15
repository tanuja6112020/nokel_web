import React, { Fragment} from 'react';
import PrivacyPolicy from './Component/PrivacyPolicy';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

export default function PrivacyPolicys() {
     return (
      <Fragment> 
        <Header /> 
          <PrivacyPolicy />
         <Footer />
     </Fragment>
   )
 }     