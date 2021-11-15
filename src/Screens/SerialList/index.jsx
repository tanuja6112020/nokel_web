import React, { Fragment, useState, useEffect } from 'react';
import EndPoints from '../../Screens/utils/apiEndPoints';
import { apiCall } from '../../Screens/utils/httpClient';

import List from './Component/SerialList';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { useParams } from 'react-router-dom';
import { GlobalSpinnerContext } from '../../component/Context/GlobalSpinnerContext'


export default function Index({ }) {

  const { setIsLoading } = React.useContext(GlobalSpinnerContext)

   let { catid } = useParams()
  const [dataArray, setDataArray] = useState([])
  const [moviePosterUrl, setMoviePosterUrl] = useState('')


  useEffect(() => {
    setIsLoading(true)
    getserialdetail()
  }, [])

  async function getserialdetail() {
    const datas = {
       'category_id':catid  //catid,
    }
    try {
      const { data } = await apiCall('post', EndPoints.SERIALALLLIST, datas);
      console.log("category",data)
      if (data.status === 200) {
        setDataArray(data.data)
        setMoviePosterUrl(data.base_url.poster_url)
        setIsLoading(false)
      } else {
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(true)
      console.log(error)
    }
  }
  return (
    <Fragment>
      <Header />
      <List
        dataArray={dataArray}
        moviePosterUrl={moviePosterUrl}
      />
      <Footer />
    </Fragment>
  )
}     