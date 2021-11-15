import React, {Fragment,useState,useRef,useEffect } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import EndPoints from '../../utils/apiEndPoints'
import { apiCall } from '../../utils/httpClient';
import Changepassword from './Component/Changepassword';
import { useHistory } from 'react-router-dom';



export default function Index() {

  const simpleValidator = useRef(new SimpleReactValidator())
  const [, forceUpdate] = useState();
  const [errorMessage, setErrorMessage] = useState(''); 
  const [toperror , setToperror] = useState(false);
  const history = useHistory();

  // const [email,setEmail]= useState('')
  const [newpassword,setNewpassword]= useState('')
  const [otp,setOtp]= useState('')

  useEffect(() => {
    // if(history.location.state.email){
    //   setEmail(history.location.state.email)
    // }
   }, []);

  function validateAllField() {
		if (simpleValidator.current.allValid()) {
		  return true;
		} else {
      simpleValidator.current.showMessages(true);
		  forceUpdate(1)
		  return false;
		}
    }

    const changepassword = async () => {
      const isValid = validateAllField()
      if (isValid) {
         const datas = {
           'otp': otp,
           'new_password': newpassword
        }
       
       try {
         const { data } = await apiCall('post', EndPoints.CHANGEPASSWORDNYOTP, datas)
          if (data.status === 200) {
            let path = `signin`;
            history.push(path);
             
           } else if (data.status === 201) {
           setErrorMessage(data.message)
           setToperror(true)
           const timer = setTimeout(() => {
            setToperror(false)
          }, 3000);
          return () => clearTimeout(timer);
           // alert(data.message)
         }
        
         } catch (error) {
         console.log(error)
         } 
        
       }
     }  



  return (
    <Fragment>
     
        <Changepassword 
        newpassword = {newpassword}
        otp = {otp}
        setOtp={(e) => setOtp(e)}
        setNewpassword={(e) => setNewpassword(e)}
        errorMessage={errorMessage}
        toperror={toperror}

        changepassword = {() => changepassword()}
        simpleValidator={simpleValidator}
        />
     
    </Fragment>
  )
}     