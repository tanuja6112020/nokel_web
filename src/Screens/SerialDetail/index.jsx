import React, { Fragment, useState, useEffect } from 'react';
import EndPoints from '../../Screens/utils/apiEndPoints';
import { apiCall } from '../../Screens/utils/httpClient';

import SerialDetail from './Component/Serialdetail';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { useParams, useHistory } from 'react-router-dom';
import { GlobalSpinnerContext } from '../../component/Context/GlobalSpinnerContext'

export default function Index({ }) {
  const { setIsLoading } = React.useContext(GlobalSpinnerContext)
  const history = useHistory();

  let { sid } = useParams()
  const [serialdetail, setSerialdetail] = useState({})
  const [serialrelated, setSerialelated] = useState([])
  const [season, setSeason] = useState([])
  const [paths, setpaths] = useState([])

  const [Auth, setAuth] = useState(null);
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    setIsLoading(true)
    getserialdetail()
  }, [])

  async function getserialdetail() {
    const AuthData = await localStorage.getItem('AuthData')
    const userdata = JSON.parse(AuthData)
    setUserdata(userdata)
    const datas = {
      'serial_id': sid,
    }
    try {
      const Auth = await localStorage.getItem('AuthToken');
      setAuth(Auth)
      const { data } = await apiCall('post', EndPoints.SERIALDETAIL, datas)
     
      if (data.status === 200) {
        setIsLoading(false)
        setSerialdetail(data.data);
        setSerialelated(data.data.movie_related);
        setSeason(data.seasons)
        setpaths(data.base_url);
      } else {
        setIsLoading(false)
      }

    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  return (
    <Fragment>
      <Header />
      <SerialDetail
        serialdetail={serialdetail}
        season={season}
        serialrelated={serialrelated}
        paths={paths}
        Auth={Auth}
      />
      <Footer />
    </Fragment>
  )
}     