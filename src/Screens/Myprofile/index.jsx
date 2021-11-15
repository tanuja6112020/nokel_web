import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import EndPoints from '../utils/apiEndPoints'
import { apiCall } from '../utils/httpClient';
import { GlobalSpinnerContext } from '../../component/Context/GlobalSpinnerContext'
import Myprofile from './Component/Myprofile';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
const queryString = require('query-string');


export default function Index() {

  const { setIsLoading } = React.useContext(GlobalSpinnerContext)
  const simpleValidator = useRef(new SimpleReactValidator())
  const simpleValidatorpass = useRef(new SimpleReactValidator())
  const [, forceUpdate] = useState();
  const [errorMessage, setErrorMessage] = useState('')
  const [currency,setCurrency] =useState('');

  // const [auth, setauth] = useState(false)
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [profile, setProfile] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState(1);
  const [birthdate, setBirthDate] = useState('');
  const history = useHistory();
  const [toperror, setToperror] = useState(false);
  const [success, setSuccess] = useState(false);
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [planArray, setPlanArray] = useState([]);
  const [planUrl, setPlanUrl] = useState('');
  const [profileData, setProfileData] = useState({});
  const referece_code = queryString.parse(window.location.search);
  if(referece_code.reference!='' && referece_code.reference !=undefined)
  checksubscriptionpayment(referece_code.reference);

  useEffect(() => {
    const authval = localStorage.getItem('AuthToken')
    const AuthData = localStorage.getItem('AuthData')
    const userprofileimg = localStorage.getItem('userprofileimg')
    const access_code = localStorage.getItem('access_code');
    const referece_code = localStorage.getItem('reference');
    if (authval) {
      const userdata = JSON.parse(AuthData)
      setFirstName(userdata.first_name)
      setLastName(userdata.last_name)
      setEmail(userdata.email)
      setMobile(userdata.mobile)
      setBirthDate(userdata.birth_date)
      setGender(userdata.gender)
      setProfile(userprofileimg)
     
    } else {
      let path = 'signin'
      history.push(path);
    }
    if(referece_code)
    checksubscriptionpayment(referece_code);
    setIsLoading(true)
    getPlan()

  }, [])
  // GETUSERPROFILE
  async function getProfile() {
    try {
      const { data } = await apiCall('post', EndPoints.GETUSERPROFILE)
     
      if (data.status === 200) {
        const userdata = data.data
        await localStorage.setItem('userprofileimg', JSON.stringify(userdata))
        setFirstName(userdata.first_name)
        setLastName(userdata.last_name)
        setEmail(userdata.email)
        setMobile(userdata.mobile)
        setBirthDate(userdata.birth_date)
        setGender(userdata.gender)
        setProfile(userdata.profile)
        setProfileData(userdata)
        setIsLoading(false)
      } else {
        alert(JSON.stringify(data))
        setIsLoading(false)
      }

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  async function checksubscriptionpayment(reference_code)
  {
    var datas = {
      reference_code:reference_code,
    }
    const { data } = await apiCall('post', EndPoints.CREATETRANSACTION, datas)
    if(data.status==200)
    {
      await localStorage.removeItem("access_code");
      await localStorage.removeItem("reference");
    }                   
  }
  async function getPlan() {
    const datas = {
    }
    try {
      const { data } = await apiCall('post', EndPoints.GETPLAN, datas)
      if (data.status === 200) {
        setPlanArray(data.data)
        setPlanUrl(data.base_url)
        setCurrency(data.currency);
        setIsLoading(false)
        getProfile()
      } else {
        alert(JSON.stringify(data))
        setIsLoading(false)
      }

    } catch (error) {
      console.log(error)
      setIsLoading(false)
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

  function validateAllFieldpass() {
    if (simpleValidatorpass.current.allValid()) {
      return true;
    } else {
      simpleValidatorpass.current.showMessages(true);
      forceUpdate(1)
      return false;
    }
  }




  const updateprofile = async () => {
    setIsLoading(true)
    const isValid = validateAllField()
    if (isValid) {
      var dob = new Date(birthdate).getFullYear() + '-' + ("0" + (new Date(birthdate).getMonth() + 1)).slice(-2) + '-' + ("0" + new Date(birthdate).getDate()).slice(-2)
      const datas = {
        'first_name': firstname,
        'last_name': lastname,
        'gender': gender,
        'birth_date': dob,
      }
      try {
        const { data } = await apiCall('post', EndPoints.EDITPROFILE, datas)
        if (data.status === 200) {
          setIsLoading(false)
          await localStorage.setItem('AuthData', JSON.stringify(data.data));
          setErrorMessage(data.message)
          setToperror(true)
          setSuccess(true)
          getProfile()
          const timer = setTimeout(() => {
            setToperror(false)
          }, 3000);
          return () => clearTimeout(timer);
        } else if (data.status === 201) {
          setIsLoading(false)
          setErrorMessage(data.message)
          setToperror(true)
          setSuccess(true)
          const timer = setTimeout(() => {
            setToperror(false)
          }, 3000);
          return () => clearTimeout(timer);
          // alert(data.message)
        }
        else if (data.status === 401) {
          setIsLoading(false)
          setErrorMessage(data.message)
          setToperror(true)
          //  alert(data.message)
        }
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }

    }
  }

  const updatepassword = async () => {
    setIsLoading(true)
    const isValid = validateAllFieldpass()
    if (isValid) {
      const datas = {
        'old_password': oldpassword,
        'new_password': newpassword,
      }
      // alert(JSON.stringify(datas))

      try {
        const { data } = await apiCall('post', EndPoints.CHANGEPASSWORD, datas)
        if (data.status === 200) {
          setIsLoading(false)
          alert(data.message)
          onLogout()
        } else if (data.status === 201) {
          setIsLoading(false)
          setErrorMessage(data.message)
          setToperror(true)
          alert(data.message)
        }
        else if (data.status === 401) {
          setIsLoading(false)
          setErrorMessage(data.message)
          setToperror(true)
          // alert(data.message)
        }
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }


    }
  }




  const onLogout = () => {
    localStorage.clear();
    window.location.assign("/")
  }
  async function handleImg(event) {
    if (event.target.files.length > 0) {
      setIsLoading(true)
      try {
        const formData = new FormData();
        formData.append('profile', event.target.files[0]);
        const { data } = await apiCall('post', EndPoints.USERPROFILEIMG, formData,
          {
            'Content-Type': 'multipart/form-data'
          })
        if (data.status === 200) {
          getProfile()
          setIsLoading(false)
          setProfile(data.profile)
          await localStorage.setItem('userprofileimg', data.profile);

        } else if (data.status === 201) {
          setIsLoading(false)
        }
        else if (data.status === 401){
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
    }
  }

 async function cancelsubscription()
 {
  setIsLoading(true)
  try {
    const { data } = await apiCall('GET', EndPoints.CANCELSUBSCRIPTION)
    if (data.status === 200) {
      setIsLoading(false)
      window.location.reload()
     
    } else if (data.status === 201) {
      setIsLoading(false)
    }
    else if (data.status === 401) {
      setIsLoading(false)
      setErrorMessage(data.message)
      setToperror(true)
      // alert(data.message)
    }
  } catch (error) {
    setIsLoading(false)
   
  }
 }

  function navToPayment(item) {
    history.push('/Payment', { paymentData: item })
  }
  function navToPlayer(item) {
    history.push('/Player', { paymentData: item })
  }
  return (
    <Fragment>
      <Header />
      <Myprofile
        firstname={firstname}
        setFirstName={setFirstName}
        lastname={lastname}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        mobile={mobile}
        setMobile={setMobile}
        setGender={setGender}
        gender={gender}
        profile={profile}
        birthdate={birthdate}
        setBirthDate={setBirthDate}
        simpleValidator={simpleValidator}
        updateprofile={() => updateprofile()}
        toperror={toperror}
        errorMessage={errorMessage}
        success={success}

        oldpassword={oldpassword}
        setOldPassword={setOldPassword}
        newpassword={newpassword}
        setNewPassword={setNewPassword}
        updatepassword={() => updatepassword()}
        simpleValidatorpass={simpleValidatorpass}
        onLogout={() => onLogout()}
        planArray={planArray}
        planUrl={planUrl}
        currency={currency}
        handleImg={handleImg}
        navToPayment={navToPayment}
        profileData={profileData}
        setPlanArray={setPlanArray}
        cancelsubscription={cancelsubscription}
        
      />
      <Footer />
    </Fragment>
  )
}     