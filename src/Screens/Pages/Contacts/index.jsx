import React, {Fragment} from 'react';
import Contacts from './Component/Contacts';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import EndPoints from '../../utils/apiEndPoints';
import { apiCall } from '../../utils/httpClient';
import { GlobalSpinnerContext } from '../../../component/Context/GlobalSpinnerContext'

export default function Contact() {

  const { setIsLoading } = React.useContext(GlobalSpinnerContext)
      async function contactusapi(param)
     {
        setIsLoading(true)
      try {
        const { data } = await apiCall('post', EndPoints.CONTACTUS, param);
        if (data.status === 200) {
          setIsLoading(false)
        } else {
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
     }
     return (
      <Fragment> 
        <Header /> 
          <Contacts 
            contactusapi ={contactusapi}
           />
         <Footer />
     </Fragment>
   )
 }     