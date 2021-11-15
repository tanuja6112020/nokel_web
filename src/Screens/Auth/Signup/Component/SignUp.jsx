import React, { useState, Fragment, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import EndPoints from '../../../utils/apiEndPoints'
import { apiCall, setDefaultHeader} from '../../../utils/httpClient';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { GlobalSpinnerContext } from '../../../../component/Context/GlobalSpinnerContext';
import countries from '../../../../component/countries'
import Flag from "react-world-flags";



export default function SignUp(props) {
	const simpleValidator = useRef(new SimpleReactValidator())
	const [, forceUpdate] = useState();
	const captchaRef = React.useRef(null);
	const { setIsLoading } = React.useContext(GlobalSpinnerContext)
	const [errorMessage, setErrorMessage] = useState('')
	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [mobile, setMobile] = useState('');
	const [toperror, setToperror] = useState(false);
	const [country,setCountry] =useState('');
	const history = useHistory();
	const [isLoad, setIsLoad] = useState(false);
	const [countrylist ,setCountrylist] =useState([]);
	const [showflagPicker, setShowflagPicker] = useState(false);
	const wrapperRef = useRef(null);
	const inputEl = useRef(null);
	const [searchPlaceh, setsearchPlaceh] = useState("Canada");
	const [countryCode, setCountryCode] = useState("+1");
	const [searchval, setsearchval] = useState("");
	const [countriesData, setcountriesData] = useState(countries);
	const [flag, setFlag] = useState("CA");
	
	useEffect(() => {
		//setIsLoading(true)
		getCountylist();
	}, [])

	useEffect(() => {
		function handleClickOutside(event) {
		  if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			setShowflagPicker(false);
		  }
		}
		
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		showflagPicker && inputEl.current.focus();
		return () => {
		  // Unbind the event listener on clean up
		  document.removeEventListener("mousedown", handleClickOutside);
		};
	  }, [showflagPicker, wrapperRef]);


  async function getCountylist()
   {
	try
	{
		const {data} = await apiCall('post', EndPoints.COUNTRYLIST);
		if(data.status==200)
		{
			setIsLoading(false);
			setCountrylist(data.data);
		} else if (data.status === 201) {
			setErrorMessage(data.message)
			setToperror(true)
			setIsLoading(false)
			const timer = setTimeout(() => {
				setToperror(false)
			}, 3000);
			return () => clearTimeout(timer);
		}else{
			setIsLoading(false)

		}

	}catch(error)
	{
	  console.log(error)
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
	const usersignup = async () => {
		const isValid = validateAllField()
		if (isValid) {
			setIsLoad(true)
			const datas = {
				'first_name': firstname,
				'last_name': lastname,
				'username': '',
				'email': email,
				'password': password,
				'mobile': mobile,
				'country_id':country,
				'country_code':countryCode,
			}
			try {
				const {data} = await apiCall('post', EndPoints.SIGNUP, datas)
				console.log("singup",data);
				console.log("singup",data.data.token);
				if (data.status === 200) {
					setIsLoad(false)
					 await setDefaultHeader('token', data.data.token)
					 await localStorage.setItem('token', data.token);
					 navOtp()
				} else if (data.status === 201) {
				
					setErrorMessage(data.message)
					setToperror(true)
					setIsLoad(false)
					const timer = setTimeout(() => {
						setToperror(false)
					}, 3000);
					return () => clearTimeout(timer);
				}else{
					setIsLoad(false)

				}
			} catch (error) {
				setIsLoad(false)
				console.log(error)
			}
		}
	}

	const navOtp = () => {
		let path = `Userotp`;
		//history.push(path, { email: email });
		history.push(path, { mobile: mobile,countryCode:countryCode });
	}

	const onCountryCodeSearch = async (searchText) => {
		
		setsearchval(searchText);
		let data = await countries;
		searchText = searchText.trim().toLowerCase();
		let dataArray2 = data.filter((l) => {
		  return l.name.toLowerCase().match(searchText);
		});
		setcountriesData(dataArray2);
	  };

	  const onPressFlagPicker = (country) => {
		setShowflagPicker(!showflagPicker);
		setCountryCode(country.dial_code);
		setFlag(country.code);
		setcountriesData(countries);
		setsearchPlaceh(country.name);
	  };
	  const onPressFlag = () => {
		setShowflagPicker(!showflagPicker);
	  };


	return (
		<Fragment>

			<div className="sign section--bg" data-bg="img/section/section.jpg">
				<div className="container">
					<div className="row">

						<div className="col-12">



							<div className="sign__content">

								<form action="#" className="sign__form">
									<a href="/" className="sign__logo">
										<img src="img/logo.svg" alt="" />
									</a>
									{(toperror) ? <div className="sign__group toperrormessage">{errorMessage}</div> : ''}


									<div className="sign__group">
										<input
											type="text"
											name="FirstName"
											className="sign__input"
											value={firstname}
											placeholder="First Name"
											onChange={(event) => setFirstName(event.target.value)} />

										<div className="errorTxt">
											{simpleValidator.current.message('FirstName', firstname, 'required')}
										</div>
									</div>

									<div className="sign__group">
										<input
											type="text"
											name="LastName"
											className="sign__input"
											value={lastname} placeholder="Last Name"
											onChange={(event) => setLastName(event.target.value)} />

										<div className="errorTxt">
											{simpleValidator.current.message('LastName', lastname, 'required')}
										</div>
									</div>



									<div className="sign__group">
										<input
											type="text"
											name="Email"
											className="sign__input"
											value={email}
											placeholder="Email"
											onChange={(event) => setEmail(event.target.value)} />

										<div className="errorTxt">
											{simpleValidator.current.message('Email', email, 'required|email')}
										</div>
									</div>


									{showflagPicker && (
                  <div
                    className="sign__group"
                    ref={wrapperRef}
                    style={{ position: "absolute", width: "100%" }}
                  >
                    <div
                      style={{
                        height: 260,
                        width: 260,
                        minHeight: 100,
                        backgroundColor: "#ffffff",
                        position: "absolute",
                        zIndex: 1,
						margin:30,
                      }}
                    >
                      <input
                        ref={inputEl}
                        style={{
                          width: "100%",
                          paddingLeft: 25,
                          paddingTop: 10,
                          paddingBottom: 10,
                        }}
                        type="text"
                        placeholder={searchPlaceh}
                        value={searchval}
                        className="countryinput"
                        onChange={(event) =>
                          onCountryCodeSearch(event.target.value)
                        }
                      />
                      <div
                        style={{
                          height: 260,
                          width: 260,
                          minHeight: 100,
                          overflowY: "scroll",
                          backgroundColor: "#ffffff",
                          zIndex: 1,
						 
                        }}
                      >
                        {countriesData.map((country, index) => {
                          return (
                            <div
                              key={index}
                              onClick={() => onPressFlagPicker(country)}
                              style={{
                                color: "#OOO",
                                width: "100%",
                                cursor: "pointer",
                                padding: 5,
                                textAlign: "left",
                                paddingTop: 15,
                                paddingBottom: 15,
                                paddingLeft: 20,
                              }}
                            >
                              <Flag
                                code={country.code}
                                height="16"
                                width="50"
                                fallback={<span>Unknown</span>}
                              />
                              &nbsp;&nbsp;&nbsp;&nbsp;{country.name}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
				{!showflagPicker && (
					<div className="sign__group">
                        <div
                          style={{
                            color:"white",
                            paddingTop: 10,
                            paddingBottom: 5,
							backgroundColor:"#1a191f",
							border:" 1px solid transparent",
                          }}
                        >
						
                          <div
                            className="divcenter"
                            onClick={onPressFlag}
							
                            style={{
                              width: "15%",
                              textAlign: "center",
                              fontSize: 23,
                              paddingLeft: 5,
							  display:"inline-block",
							  cursor:"pointer",
                            }}
                          >
                            <Flag
                              code={flag}
                              size={60}
                              fallback={
                                <Flag
                                  size={60}
                                  code={"Fr"}
                                  fallback={<span>Unknown</span>}
                                />
                              }
                            />
                          </div>
                          <div
                            className="divcenter"
                            style={{ width: "13%", paddingLeft: 10,display:"inline-block"}}
                          >
                            {countryCode}
                          </div>
                          <div
                            className="divcenter"
                            style={{ width: "65%", paddingLeft: 10,display:"inline-block"}}
                          >
                           <input
											type="number"
											name="Mobile"
											className="sign__input"
											value={mobile}
											placeholder="Mobile"
											onChange={(event) => setMobile(event.target.value)} />
                          </div>
                        </div>
										<div className="errorTxt">
											{simpleValidator.current.message('Mobile', mobile, 'required')}
										</div>
						</div>
                      )}
								

									<div className="sign__group">
										<input
											type="password"
											name="Password"
											className="sign__input"
											value={password}
											placeholder="Password"
											onChange={(event) => setPassword(event.target.value)} />
										<div className="errorTxt">
											{simpleValidator.current.message('Password', password, 'required')}
										</div>
									</div>

									<div className="sign__group">
										<select
										  className="selecttext"
										  value={country}
										  onChange={(e)=>setCountry(e.target.value)}
										  >
											  <option value=""  className="selecttext">Select your Country</option>
											   {											   
												   countrylist.map((data,key)=>{
												 return <option className="select_optionr" value={data.countries_id}>{data.countries_name}</option>
												   })
											   }
									</select>
									<div className="errorTxt">
											{simpleValidator.current.message('Country', country, 'required')}
										</div>
									</div>
									<div className="sign__group sign__group--checkbox"> 
										<input id="remember" name="remember" type="checkbox" checked="checked" onChange={()=>{}} />
										<label htmlFor="remember">I agree to the <a href="/privacypolicy">Privacy Policy</a></label>
									</div>

									<button className="sign__btn" type="button" onClick={() => !isLoad&&usersignup()}>
										{isLoad
											?
											<img className="profile_size" src='img/loader.gif' alt="loader" />
											: `Sign up`}
									</button>

									<span className="sign__text">Already have an account? <a href="/signin">Sign in!</a></span>
								</form>

							</div>
						</div>
					</div>
				</div>
			</div>

		</Fragment>
	)
}     