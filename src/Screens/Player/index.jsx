import React, { Fragment, useEffect, useState } from 'react';
import Player from './component/player';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import EndPoints from '../utils/apiEndPoints';
import { apiCall } from '../utils/httpClient';
import { useHistory } from 'react-router-dom';

export default function Index() {
    const history = useHistory();
    const [moviedetail, setMoviedetail] = useState(history.location.state.moviedetail)
    const [paths, setpaths] = useState(history.location.state.paths)
    const [continueWacting, setContinueWacting] = useState(history.location.state.continueWacting)
    console.log('continueWacting: ', continueWacting);
    function navToPlayer(item) {
        history.push('/Player', { paymentData: item })
    }
    function navToBack(item) {
        history.goBack()
    }

    async function continueWatching(params)
    {
		const { data } = await apiCall('post', EndPoints.CONTINUEWATCHING, params);
		if (data.status === 200) {
			
		} 

    }
    return (
        <Fragment>
            <Header />
            <Player
                navToPlayer={navToPlayer}
                moviedetail={moviedetail}
                navToBack={navToBack}
                paths={paths}
                continueWatching={continueWatching}
                continueWacting={continueWacting}
            />
            <Footer />
        </Fragment>
    )
}     