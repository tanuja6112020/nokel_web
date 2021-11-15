import React, { Fragment, useState, useEffect } from 'react';
import EndPoints from '../../Screens/utils/apiEndPoints'
import { apiCall, setDefaultHeader } from '../../Screens/utils/httpClient'
import HomeView from './Component/HomeView';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

import { GlobalSpinnerContext } from '../../component/Context/GlobalSpinnerContext'
import { useHistory } from 'react-router-dom';

export default function Home() {
        const { setIsLoading } = React.useContext(GlobalSpinnerContext)
        const [trendingdata, setTrendingdata] = useState([])
        const [categorydata, setCategorydata] = useState([])
        const [posterpath, setPosterpath] = useState([])
        const [banner, setBanner] = useState([])
        const [baseurl, setBaseurl] = useState([])
        const [continueWatch, setcontinueWatch] = useState([]);
        const [favourite, setfavourite] = useState([]);
        const history = useHistory();
        const [value, setValue] = useState(history.location.state.value)

        useEffect(() => {
               // setIsLoading(true)
                handleSearchmovie(value)
              
        }, [value])
        
        const handleSearchmovie = async (value) => {

               if(value.length>0)
                {

                
                        var params = {
                                searchdata: value
                        }

                        try {
                                const { data } = await apiCall('post', EndPoints.DASHBOARDSEARCHIG, params)
                                console.log("data",data)
                                if (data.status === 200) {
                                        setIsLoading(false)
                                        setBanner('')
                                        setTrendingdata(data.data.Trending);
                                        setCategorydata(data.data.category);
                                        setPosterpath(data.base_url.movie_poster_url);
                                        setBaseurl(data.base_url)
                                        setcontinueWatch('');
                                        setfavourite('');
                                        setValue('');


                                } else {
                                        setIsLoading(false)
                                }


                        } catch (error) {
                                setIsLoading(false)
                        }

                }         

        }

        return (
                <Fragment>
                        <Header/>
                        <HomeView
                                banner={banner}
                                baseurl={baseurl}
                                trendingdata={trendingdata}
                                categorydata={categorydata}
                                posterpath={posterpath}
                                continueWatch={continueWatch}
                                favourite={favourite}
                                setValue={setValue}
                                value={value}
                        />
                        <Footer />
                </Fragment>
        )
}     