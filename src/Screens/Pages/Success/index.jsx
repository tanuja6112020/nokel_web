import React, { Fragment} from 'react';
import Success from './Component/Success';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { apiCall } from '../../utils/httpClient';
import EndPoints from '../../utils/apiEndPoints';
const queryString = require('query-string');

export default function Faqs() {
  const referece_code = queryString.parse(window.location.search);
  if(referece_code.reference!='' && referece_code.reference !=undefined)
  checksubscriptionpayment(referece_code.reference);

  async function checksubscriptionpayment(reference_code)
  {
    var datas = {
      reference_code:reference_code,
    }
    const { data } = await apiCall('post', EndPoints.CREATETRANSACTION, datas)
    if(data.status==200)
    {
      await localStorage.removeItem("access_code");
      await localStorage.removeItem("reference");
    }                   
  }
     return (
      <Fragment> 
      
          <Success />
        
     </Fragment>
   )
 }     