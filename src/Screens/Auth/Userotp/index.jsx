import React, { useState, Fragment, useRef, useEffect } from 'react';
import Userotp from './Component/Userotp';
import SimpleReactValidator from 'simple-react-validator';
import EndPoints from '../../utils/apiEndPoints'
import { apiCall, setDefaultHeader } from '../../utils/httpClient';
import { useHistory } from 'react-router-dom';
import firebase from '../../../component/firebase';

import { AuthContext } from '../../../component/Context/context'


export default function Index() {

  const simpleValidator = useRef(new SimpleReactValidator())
  const [, forceUpdate] = useState();
  const [errorMessage, setErrorMessage] = useState('')
  const { signIn } = React.useContext(AuthContext);
  const captchaRef = React.useRef(null);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [mobile, setMobile] = useState('');
  const [countryCode, setcountryCode] = useState('');

  const [toperror, setToperror] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const history = useHistory();

  useEffect(() => {

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible"
      }
    );


    // setEmail(history.location.state.email)
    setMobile(history.location.state.mobile);
    setcountryCode(history.location.state.countryCode);
    // optsend()
    handleSendOTP();


  }, []);

  async function handleSendOTP() {
    // event.preventDefault();
    try {
      const phoneNumber = history.location.state.countryCode + history.location.state.mobile;
      console.log("phoneNumber", phoneNumber);
      const appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          window.confirmationResult = confirmationResult;
        })
        .catch(function (error) {
        });

    } catch (error) {

      console.log('error: ', error);
    }
  };


  const onVerifyCodeSubmit = () => {
    //event.preventDefault();/
    if (otp !== '') {
      console.log("otp", otp);
      console.log(" window.confirmationResult", window.confirmationResult);
      window.confirmationResult
        .confirm(otp)
        .then(function (result) { 
          verifyMobileotp();
        })
        .catch(function (error) {
          // User couldn't sign in (bad verification code?)
          console.error("Error while checking the verification code", error);

        });
    }
  }


    function validateAllField() {
      if (simpleValidator.current.allValid()) {
        return true;
      } else {
        simpleValidator.current.showMessages(true);
        forceUpdate(1)
        return false;
      }
    }


    const verifyMobileotp = async () => {
      const isValid = validateAllField()
      if (isValid) {
        setIsLoad(true)

        try {
          const { data } = await apiCall('get', EndPoints.MOBILEVERIFYOTP)
          console.log("data", data);
          if (data.status === 200) {
            setIsLoad(false)
            signIn(data.data.token)
            dashboardload(data.data)

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
          console.log(error)
          setIsLoad(false)

        }
      }
    }

    const confirmotp = async () => {
      const isValid = validateAllField()
      if (isValid) {
        setIsLoad(true)

        const datas = {
          'email': email,
          'otp': otp,
        }

        try {
          const { data } = await apiCall('post', EndPoints.CONFIRMOTP, datas)
          if (data.status === 200) {
            setIsLoad(false)
            signIn(data.data.token)
            dashboardload(data.data)
           

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
          console.log(error)
          setIsLoad(false)

        }
      }
    }

    const resendotp = async () => {

      const datas = {
        'email': email,
      }

      try {
        setIsLoad(true)
        const { data } = await apiCall('post', EndPoints.RESENDOTP, datas)
        if (data.status === 200) {
          setErrorMessage(data.message)
          setToperror(true)
          setSuccess(true)
          setIsLoad(false)

        } else if (data.status === 201) {
          setErrorMessage(data.message)
          setToperror(true)
          setSuccess(false)
          setIsLoad(false)



          const timer = setTimeout(() => {
            setToperror(false)
          }, 3000);
          return () => clearTimeout(timer);
          // alert(data.message)
        }
      } catch (error) {
        setIsLoad(false)

        console.log(error)
      }
    }


    /*  const navOtp = () => {
     let path = `Userotp`;
     history.push(path, { email: email});
     } */

    const dashboardload = async (data) => {
      var path = `/`;
      await localStorage.setItem('Auth', data);
      await localStorage.setItem('payment', data.plan_status);
      await localStorage.setItem('AuthData', JSON.stringify(data));
      await localStorage.setItem('userprofileimg', data.profile);

      if (data.plan_status === 0) {
        path = `plan`;
      } else {
        path = `myprofile`;
      }

      history.push(path);
    }




    return (
      <Fragment>

        <Userotp
          otp={otp}

          setOtp={setOtp}

          simpleValidator={simpleValidator}
          confirmotp={() => confirmotp()}
          resendotp={() => resendotp()}
          errorMessage={errorMessage}
          toperror={toperror}
          success={success}
          isLoad={isLoad}
          onVerifyCodeSubmit={onVerifyCodeSubmit}
          handleSendOTP={handleSendOTP}
          captchaRef={captchaRef}

        />

      </Fragment>
    )
  }