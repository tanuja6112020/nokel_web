// web
import React from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import HomeScreen from './Screens/Home';
import LivetvScreen from './Screens/Livetv';
import TVshowScreen from './Screens/TVshows';
import Epoisodelist from './Screens/Episodelist';

import Signin from './Screens/Auth/Signin';
import Signup from './Screens/Auth/Signup';
import Forgotpassword from './Screens/Auth/Forgotpassword';
import ChangePassword from './Screens/Auth/Changepassword';
import Plan from './Screens/Plan';
import Userotp from './Screens/Auth/Userotp';


import Aboutus from './Screens/Pages/AboutUs';
import Contacts from './Screens/Pages/Contacts';
import PrivacyPolicy from './Screens/Pages/PrivacyPolicy';
import PrivacypolicyMobile from './Screens/Pages/PrivacyPolicyMobile';
import TermsCondition from './Screens/Pages/TermsCondition';
import TermsConditionMobile from './Screens/Pages/TermsConditionmobile';
import Faq from './Screens/Pages/Faq';
import List from './Screens/List';
import Player from './Screens/Player';
import TvshowsList from './Screens/SerialList';
import Serialdetail from './Screens/SerialDetail';
import Episodedetail from './Screens/EpisodeDetail';
import Episodeplayer from './Screens/episodePlayer';

import MovieDetail from './Screens/MovieDetail';
import Myprofile from './Screens/Myprofile';
import Payment from './Screens/Payment';
import Search from './Screens/search';
import Success from './Screens/Pages/Success';

import EndPoints from './Screens/utils/apiEndPoints'
import { apiCall, setDefaultHeader } from './Screens/utils/httpClient';
// import { GlobalSpinnerContext } from './component/Context/GlobalSpinnerContext'
import { AuthContext } from './component/Context/context';

function Routes() {
  // const { setIsLoading } = React.useContext(GlobalSpinnerContext)
  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  const authContext = React.useMemo(() => ({
    signIn: async (Token) => {
      const userToken = Token;
      try {
        await localStorage.setItem('AuthToken', userToken);
        await setDefaultHeader('token', userToken)
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', token: userToken });
    },
    signOut: async (user_id) => {
      try {
        await localStorage.removeItem('AuthToken');
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
    }
  }), []);
  React.useEffect(() => {
    getToken()
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await localStorage.getItem('AuthToken');

      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);

  }, []);
  async function getToken() {
    try {
      const Auth = await localStorage.getItem('AuthToken');
      if (Auth != null) {
        await setDefaultHeader('token', Auth)
      } else {
        const { data } = await apiCall('post', EndPoints.JWTTOKEN)
        await setDefaultHeader('token', data.token)
        await localStorage.setItem('token', data.token);

      }
    } catch (error) {
      console.log(error)
    }
  }
  if (loginState.isLoading) {
    return (
    <center>
      <div className="mfp-content loaderimage overhiden">
        <img className="profile_size" src='img/loader.gif' alt=""/>
      </div>
    </center>)
  }
  return (
    <AuthContext.Provider value={authContext}>
      <div className={loginState.isLoading ? "overhiden" : ''}>
        <Router>
          <Switch>
            <Route path="/signin">
              <Signin />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/plan">
              <Plan />
            </Route>

            <Route path="/forgotpassword">
              <Forgotpassword />
            </Route>

            <Route path="/changepassword">
              <ChangePassword />
            </Route>

            <Route path="/myprofile">
              <Myprofile />
            </Route>
            <Route path="/Payment">
              <Payment />
            </Route>
            <Route path="/userotp">
              <Userotp />
            </Route>

            <Route path="/aboutus">
              <Aboutus />
            </Route>

            <Route path="/contacts">
              <Contacts />
            </Route>

            <Route path="/privacypolicy">
              <PrivacyPolicy />
            </Route>

            <Route path="/privacypolicyMobile">
              <PrivacypolicyMobile />
            </Route>

            <Route path="/TermsCondition">
              <TermsCondition />
              TermsConditionMobile
            </Route>

            <Route path="/Terms">
              <TermsConditionMobile />
            </Route>

            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/Success">
              <Success />
            </Route>
            
            <Route path="/Player">
              <Player />
            </Route>
            <Route path="/Episodeplayer">
              <Episodeplayer/>
            </Route>

            <Route path="/List/:catid">
              <List />
            </Route>
            <Route path="/moviedetail/:movieid">
              <MovieDetail />
            </Route>
            <Route path="/movieplayer/:mid">
               
            </Route>
            {/* <Route path="/livetv">
              <LivetvScreen />
            </Route> */}
            
            <Route path="/tvshows">
              <TVshowScreen />
            </Route>

            <Route path="/serialdetail/:sid">
              <Serialdetail/>
            </Route>
            <Route path="/search">
              <Search/>
            </Route>
            <Route path="/episodelist/:serialid/:seasonid">
              <Epoisodelist/>
            </Route>
            
            <Route path="/episodedetail/:eid/:sid">
              <Episodedetail/>
            </Route>

            <Route path="/tvshowslist/:catid">
              <TvshowsList/>
            </Route>

            <Route path="/">
              <HomeScreen />
            </Route>

          </Switch>

        </Router>
      </div>

    </AuthContext.Provider>
  );
}
export default Routes;