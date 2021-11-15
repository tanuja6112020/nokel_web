import React, { Fragment, useState, useEffect } from 'react';
import EndPoints from '../../Screens/utils/apiEndPoints';
import { apiCall } from '../../Screens/utils/httpClient';

import Episode from './Component/Episodedetail';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { useParams,useHistory } from 'react-router-dom';
import { GlobalSpinnerContext } from '../../component/Context/GlobalSpinnerContext'

export default function Index({ }) {
  const { setIsLoading } = React.useContext(GlobalSpinnerContext)
  let { eid,sid } = useParams();
  const history = useHistory();
  const [episodedetail, setEpisodedetail] = useState({})
  const [paths, setpaths] = useState([])
  const [continueWacting, setContinueWacting] = useState(0)
  const [Auth, setAuth] = useState(null);
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    setIsLoading(true)
    getepisoidedetail()
  }, [])

  async function getepisoidedetail() {
    const AuthData = await localStorage.getItem('AuthData')
    const userdata = JSON.parse(AuthData)
    setUserdata(userdata)
    const datas = {
      'serial_id': sid,
      'episode_id':eid,
      'type':'episode',
    }
    try {
      const Auth = await localStorage.getItem('AuthToken');
      setAuth(Auth)
      const { data } = await apiCall('post', EndPoints.EPISODEETAIL, datas)
      console.log("data",data);
      if (data.status === 200) {
        setIsLoading(false)
        setEpisodedetail(data.data);
        setContinueWacting(data.data.continue_watching.length>0?data.data.continue_watching[0].start_time:0);
        setpaths(data.base_url);
      } else {
        setIsLoading(false)
      }

    } catch (error) {
      setIsLoading(false)
    }
  }

  console.log("continueWacting",continueWacting)

  function navToPlayer(item) {
    userdata?
    userdata.plan_status === 1 ?
      history.push('/Episodeplayer', { episodedetail: episodedetail, paths: paths,continueWacting:continueWacting})
      :
      history.push('/Plan')
      :
      history.push('/Signin')
  }
  return (
    <Fragment>
      <Header />
      <Episode
        episodedetail={episodedetail}
        paths={paths}
        Auth={Auth}
        navToPlayer={navToPlayer}
        continueWacting={continueWacting}
      />
      <Footer />
    </Fragment>
  )
}     