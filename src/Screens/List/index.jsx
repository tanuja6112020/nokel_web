import React, { Fragment, useState, useEffect } from 'react';
import EndPoints from '../../Screens/utils/apiEndPoints';
import { apiCall,setDefaultHeader } from '../../Screens/utils/httpClient';

import List from './Component/List';
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
    getmoviedetail()
  }, [])

  async function getmoviedetail() {
    const datas = {
    'category_id': catid  //catid,
    }
    try {
      const Auth = await localStorage.getItem('AuthToken');
        if (Auth == null) {
                const { data } = await apiCall('post', EndPoints.JWTTOKEN)
                await setDefaultHeader('token', data.token)
                await localStorage.setItem('token', data.token);
        }
      const { data } = await apiCall('post', EndPoints.SEEALLLIST, datas)
      if (data.status === 200) {
        setDataArray(data.data)
        setMoviePosterUrl(data.base_url.movie_poster_url)
        setIsLoading(false)
      } else {
        setIsLoading(true)
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