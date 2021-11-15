import React, { Fragment, useEffect, useState } from 'react';
import Player from './component/player';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import EndPoints from '../utils/apiEndPoints';
import { apiCall } from '../utils/httpClient';
import { useHistory } from 'react-router-dom';

export default function Index() {
    const history = useHistory();
    const [episodedetail, setEpisodedetaill] = useState(history.location.state.episodedetail)
    const [paths, setpaths] = useState(history.location.state.paths)
    const [continueWacting, setContinueWacting] = useState(history.location.state.continueWacting)
  
   
    function navToBack(item) {
        history.goBack()
    }

    async function continueWatchingserial(params){

       
		const { data } = await apiCall('post', EndPoints.CONTINUEWATCHINGSERIAL, params);
		if (data.status === 200) {
			console.log(" player data",data);
		} 

    }
    return (
        <Fragment>
            <Header />
            <Player
                episodedetail={episodedetail}
                navToBack={navToBack}
                paths={paths}
                continueWatchingserial={continueWatchingserial}
                continueWacting ={continueWacting}
            />
            <Footer />
        </Fragment>
    )
}     