import React, { Fragment, useEffect, useState} from 'react';
import Plan from './Component/Plan';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import EndPoints from '../utils/apiEndPoints';
import { apiCall } from '../utils/httpClient';
import { useHistory } from 'react-router-dom';

export default function Index() {
  const history = useHistory();
  const [planArray, setPlanArray] = useState([]);
  const [planUrl, setPlanUrl] = useState('');
  const [currency,setCurrency] =useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
    getProfile()
    getPlan()
  }, [])

  async function getProfile() {
    try {
      const { data } = await apiCall('post', EndPoints.GETUSERPROFILE)
      if (data.status === 200) {
        const userdata = data.data
        setEmail(userdata.email)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function getPlan() {
    const datas = {
    }
    try {
      const { data } = await apiCall('post', EndPoints.GETPLAN, datas)
      if (data.status === 200) {
        setPlanArray(data.data)
        setCurrency(data.currency)
        setPlanUrl(data.base_url)
       
      } else {
        alert(JSON.stringify(data))
      }

    } catch (error) {
      console.log(error)
    }
  }
  function navToPayment(item) {
    history.push('/Payment', { paymentData: item })
  }
  return (
    <Fragment>
      <Header />
      <Plan
        planArray={planArray}
        planUrl={planUrl}
        navToPayment={navToPayment}
        email={email}
        currency={currency}
      />
      <Footer />
    </Fragment>
  )
}     