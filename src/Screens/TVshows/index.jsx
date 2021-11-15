import React, { Fragment, useState, useEffect } from 'react';
import EndPoints from '../../Screens/utils/apiEndPoints'
import { apiCall, setDefaultHeader } from '../../Screens/utils/httpClient'

import TvshowsView from './Component/TvshowsView';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

import { GlobalSpinnerContext } from '../../component/Context/GlobalSpinnerContext'

export default function Tvshows() {
        const { setIsLoading } = React.useContext(GlobalSpinnerContext)
        const [trendingdata, setTrendingdata] = useState([])
        const [categorydata, setCategorydata] = useState([])
        const [posterpath, setPosterpath] = useState([])
        const [banner,setBanner] = useState([])
        const [baseurl,setBaseurl] =useState([])
        const [continueWatch,setcontinueWatch] = useState([]);


        useEffect(() => {
                setIsLoading(true)
                getdashboarddata()
        }, [])
        
        async function getdashboarddata() {
                const datas = {
                }
                try {
                        const Auth = await localStorage.getItem('AuthToken');
                        if (Auth == null) {
                                const { data } = await apiCall('post', EndPoints.JWTTOKEN)
                                await setDefaultHeader('token', data.token)
                                await localStorage.setItem('token', data.token);
                        }
                        const datas = {
                                'type':2
                            }
                        const { data } = await apiCall('post', EndPoints.DASHBOARDMENULISTING, datas)
                        if (data.status === 200) {
                                setIsLoading(false)
                                setTrendingdata(data.data.Trending);
                                setCategorydata(data.data.category);
                                setPosterpath(data.base_url.poster_url);
                                setBanner(data.data.dashboard_web_banner)
                                setBaseurl(data.base_url)
                                setcontinueWatch(data.data.continue_watching)
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
                        <Header/>
                        <TvshowsView
                                banner={banner}
                                baseurl={baseurl}
                                trendingdata={trendingdata}
                                categorydata={categorydata}
                                posterpath={posterpath}
                                continueWatch={continueWatch}

                                />
                        <Footer />
                </Fragment>
        )
}     