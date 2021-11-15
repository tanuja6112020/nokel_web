import React, { Fragment, useState, useEffect } from 'react';
import EndPoints from '../../Screens/utils/apiEndPoints'
import { apiCall, setDefaultHeader } from '../../Screens/utils/httpClient'

import Episodelist from './Component/Episodelist';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import {useParams} from 'react-router-dom';

import { GlobalSpinnerContext } from '../../component/Context/GlobalSpinnerContext'

export default function EpisodeTv() {
        const { setIsLoading } = React.useContext(GlobalSpinnerContext)
        const [episodedata, setepisodedata] = useState([])
        const [baseurl, setbaseurl] = useState([])     
        useEffect(() => {
                setIsLoading(true)
                getepisodedata()
        }, [])

        let { serialid,seasonid } = useParams()

        async function getepisodedata() {
                const datas = {
                    'serial_id':serialid,
                    'season_id':seasonid,
                }
                try {
                        const Auth = await localStorage.getItem('AuthToken');
                        if (Auth == null) {
                                const { data } = await apiCall('post', EndPoints.JWTTOKEN)
                                await setDefaultHeader('token', data.token)
                                await localStorage.setItem('token', data.token);
                        }
                        const { data } = await apiCall('post', EndPoints.EPISODELIST, datas)
                        console.log('data', data)
                        if (data.status === 200) {
                                setIsLoading(false)
                                setepisodedata(data.data);
                                setbaseurl(data.base_url)
                        } else {
                                setIsLoading(false)
                        }

                } catch (error) {
                        setIsLoading(false)
                }
        }

        return(
        <Fragment>
                        <Header />
                        <Episodelist
                         episodedata={episodedata}
                         baseurl={baseurl}
                        />
                       
                        <Footer />
                </Fragment>
        )
}     