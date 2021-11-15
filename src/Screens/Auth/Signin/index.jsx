import React, { useState, Fragment, useRef, useEffect } from 'react';
import Signin from './Component/Signin';
import SimpleReactValidator from 'simple-react-validator';
import EndPoints from '../../utils/apiEndPoints'
import { apiCall, setDefaultHeader } from '../../utils/httpClient';
import { useHistory } from 'react-router-dom';

// import { GlobalSpinnerContext } from '../../../component/Context/GlobalSpinnerContext'
import { AuthContext } from '../../../component/Context/context'
export default function Index() {
  // const { setIsLoading } = React.useContext(GlobalSpinnerContext)
  const { signIn } = React.useContext(AuthContext);
  const simpleValidator = useRef(new SimpleReactValidator())
  const [, forceUpdate] = useState();
  const [errorMessage, setErrorMessage] = useState('')

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoad, setIsLoad] = useState(false);
  const [mobile, setMobile] = useState('');
  const [countryCode, setcountryCode] = useState('');
  const [toperror, setToperror] = useState(false);
  const history = useHistory();

  useEffect(() => {

    const authval = localStorage.getItem('AuthToken')
    if (authval) {
      window.location.assign("/")
    }
  }, [])



  function validateAllField() {
    if (simpleValidator.current.allValid()) {
      return true;
    } else {
      simpleValidator.current.showMessages(true);
      forceUpdate(1)
      return false;
    }
  }




  const usersignin = async () => {
    const isValid = validateAllField()
    if (isValid) {
      setIsLoad(true)
      const datas = {
        'email': email,
        'password': password,
      }

      try {
        const { data } = await apiCall('post', EndPoints.SIGNIN, datas)
        if (data.status === 200) {
          setIsLoad(false)
          if (data.data.verified === 0) {
            await setDefaultHeader('token', data.data.token)
            await localStorage.setItem('token', data.token);
            setMobile(data.data.mobile)
            setcountryCode(data.data.country_code)
            navOtp(data.data.mobile,data.data.country_code)
          } else {
            signIn(data.data.token)
         
            dashboardload(data.data)
          }
        } else if (data.status === 201) {
          setErrorMessage(data.message)
          setToperror(true)
          setIsLoad(false)
          const timer = setTimeout(() => {
            setToperror(false)
          }, 3000);
          return () => clearTimeout(timer);
        }
      } catch (error) {
        setIsLoad(false)
        console.log(error)
      }
    }
  }
  const navOtp = (mobile,countryCode) => {
 
    let path = `Userotp`;
    history.push(path, { mobile: mobile,countryCode:countryCode });
    //history.push(path, { email: email });
  }
  const dashboardload = async (data) => {
    var path = `/`;
    await localStorage.setItem('payment', data.plan_status);
    await localStorage.setItem('AuthData', JSON.stringify(data));
    await localStorage.setItem('userprofileimg', data.profile);
    if (data.plan_status === 0) {
      path = `plan`;
    } else {
      path = `/`;
    }

    history.push(path);
  }



  return (
    <Fragment>

      <Signin
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        simpleValidator={simpleValidator}
        usersignin={() => usersignin()}
        errorMessage={errorMessage}
        toperror={toperror}
        isLoad={isLoad}
      />

    </Fragment>
  )
}     