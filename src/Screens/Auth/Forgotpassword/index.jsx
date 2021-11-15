import React, { Fragment, useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import EndPoints from '../../utils/apiEndPoints'
import { apiCall } from '../../utils/httpClient';
import Forgotpassword from './Component/Forgotpassword';
import { useHistory } from 'react-router-dom';

import { GlobalSpinnerContext } from '../../../component/Context/GlobalSpinnerContext'

export default function Index() {
  const { setIsLoading } = React.useContext(GlobalSpinnerContext)

  const simpleValidator = useRef(new SimpleReactValidator())
  const [, forceUpdate] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [toperror, setToperror] = useState(false);
  const history = useHistory();

  const [email, setEmail] = useState()

  function validateAllField() {
    if (simpleValidator.current.allValid()) {
      return true;
    } else {
      simpleValidator.current.showMessages(true);
      forceUpdate(1)
      return false;
    }
  }

  const sendOtp = async () => {
    const isValid = validateAllField()
    if (isValid) {
      setIsLoading(true)
      const val = {
        'email': email,
      }
      try {
        const { data } = await apiCall('post', EndPoints.SENDFORGOTOTP, val)
        if (data.status === 200) {
          setIsLoading(false)
          let path = `changepassword`;
          history.push(path, { email: email });
        } else if (data.status === 201) {
          setIsLoading(false)
          setErrorMessage(data.message)
          setToperror(true)

          const timer = setTimeout(() => {
            setToperror(false)
          }, 3000);
          return () => clearTimeout(timer);
          // alert(data.message)
        }

      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
  }



  return (
    <Fragment>

      <Forgotpassword
        email={email}
        setEmail={(e)=>setEmail(e)}
        errorMessage={errorMessage}
        toperror={toperror}


        sendOtp={() => sendOtp()}
        simpleValidator={simpleValidator}


      />

    </Fragment>
  )
}     