import React, { Fragment, useState, useEffect } from 'react';
import EndPoints from '../../Screens/utils/apiEndPoints'
import { apiCall, setDefaultHeader } from '../../Screens/utils/httpClient'

import HomeView from './Component/HomeView';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import firebase from  '../../component/firebase';
import { GlobalSpinnerContext } from '../../component/Context/GlobalSpinnerContext'

export default function Home() {
        const { setIsLoading } = React.useContext(GlobalSpinnerContext)
        const [trendingdata, setTrendingdata] = useState([])
        const [categorydata, setCategorydata] = useState([])
        const [posterpath, setPosterpath] = useState([])
        const [banner, setBanner] = useState([])
        const [baseurl, setBaseurl] = useState([])
        const [continueWatch, setcontinueWatch] = useState([]);
        const [favourite, setfavourite] = useState([]);

        useEffect(() => {
               setIsLoading(true)
               getdashboarddata()
          
           
        }, [])

//         const optsend = ()=>
//         {
//                 // Turn off phone auth app verification.
// //firebase.auth().settings.appVerificationDisabledForTesting = true;

// var phoneNumber = "+918770398381";
// var testVerificationCode = "123456";

// // This will render a fake reCAPTCHA as appVerificationDisabledForTesting is true.
// // This will resolve after rendering without app verification.
// //var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
// // signInWithPhoneNumber will call appVerifier.verify() which will resolve with a fake
// // reCAPTCHA response.
// window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
//         'size': 'normal',
//         'callback': (response) => {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           // ...
//         },
//         'expired-callback': () => {
//           // Response expired. Ask user to solve reCAPTCHA again.
//           // ...
//         }
//       });
// const appVerifier = window.recaptchaVerifier;

// firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//     .then(function (confirmationResult) {
//         console.log("confirmationResult",confirmationResult)
//         let code = prompt("enter the otp",'');
//         console.log("code",code)
//         confirmationResult.confirm(code).then((result) => {
//                 // User signed in successfully.
//                 const user = result.user;
//                 console.log("done",user)
//                 // ...
//               }).catch((error) => {
//                 console.log("error",error)
//                 // User couldn't sign in (bad verification code?)
//                 // ...
//               });
     
//       // confirmationResult can resolve with the fictional testVerificationCode above.
//       return confirmationResult.confirm()
//     }).catch(function (error) {
//       // Error; SMS not sent
//       // ...
//       console.log("error",error)
//     });
//         }
        const handleSearchmovie = async (value) => {

                if (value.length > 0) {

                        var params = {
                                searchdata: value
                        }

                        try {
                                const { data } = await apiCall('post', EndPoints.DASHBOARDSEARCHIG, params)

                                if (data.status === 200) {
                                        setIsLoading(false)
                                        setBanner('')
                                        setTrendingdata(data.data.Trending);
                                        setCategorydata(data.data.category);
                                        setPosterpath(data.base_url.movie_poster_url);
                                        setBaseurl(data.base_url)
                                        setcontinueWatch('');
                                        setfavourite('');


                                } else {
                                        setIsLoading(false)
                                }


                        } catch (error) {
                                setIsLoading(false)
                        }

                } else {
                        getdashboarddata();
                }

        }

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
                        const { data } = await apiCall('post', EndPoints.DASHBOARDDATA, datas)
                       
                        if (data.status === 200) {
                                setIsLoading(false)
                                setTrendingdata(data.data.Trending);
                                setCategorydata(data.data.category);
                                setPosterpath(data.base_url.movie_poster_url);
                                setBanner(data.data.dashboard_web_banner);
                                setBaseurl(data.base_url);
                                setcontinueWatch(data.data.continue_watching);
                                setfavourite(data.data.favourite_list);
                        } else {
                                setIsLoading(false)
                        }


                } catch (error) {
                        setIsLoading(false)
                }
        }

        return (
                <Fragment>
                         <Header handleSearchmovie={handleSearchmovie} />
                        <HomeView
                                banner={banner}
                                baseurl={baseurl}
                                trendingdata={trendingdata}
                                categorydata={categorydata}
                                posterpath={posterpath}
                                continueWatch={continueWatch}
                                favourite={favourite}
                        />
                        <Footer />
                </Fragment>
        )
}     