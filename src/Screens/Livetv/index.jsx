import React, { Fragment, useState, useEffect } from 'react';
import EndPoints from '../../Screens/utils/apiEndPoints'
import { apiCall, setDefaultHeader } from '../../Screens/utils/httpClient'

import LiveTvView from './Component/LiveView';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

import { GlobalSpinnerContext } from '../../component/Context/GlobalSpinnerContext'

export default function Livetv() {
        const { setIsLoading } = React.useContext(GlobalSpinnerContext)
        const [trendingdata, setTrendingdata] = useState([])
        const [bannerData, setBannerdata] = useState([])     
        const [bannerpath, setBannerpath] = useState() 
        const [livetvurl , setLivetvpath] =useState();   

        useEffect(() => {
                setIsLoading(true)
                getlivetvdata()
        }, [])

        async function getlivetvdata() {
                const datas = {
                    'type':4
                }
                try {
                        const Auth = await localStorage.getItem('AuthToken');
                        if (Auth == null) {
                                const { data } = await apiCall('post', EndPoints.JWTTOKEN)
                                await setDefaultHeader('token', data.token)
                                await localStorage.setItem('token', data.token);
                        }
                        const { data } = await apiCall('post', EndPoints.DASHBOARDMENULISTING, datas)
                        console.log('data', data)
                        if (data.status === 200) {
                                setIsLoading(false)
                                setTrendingdata(data.data.Trending);
                                setBannerdata(data.data.dashboard_banner);
                                setBannerpath(data.base_url.dashboard_banner_url);
                                setLivetvpath(data.base_url.livetv_image)
                        } else {
                                setIsLoading(false)
                                // alert(JSON.stringify(data))
                        }


                } catch (error) {
                        setIsLoading(false)
                        console.log(error)
                }
        }

        return(
        <Fragment>
                        <Header />
                        <LiveTvView
                         trendingdata={trendingdata}
                         bannerData={bannerData}
                         bannerpath={bannerpath}
                         livetvurl={livetvurl}
                        />
                       
                        <Footer />
                </Fragment>
        )
}     