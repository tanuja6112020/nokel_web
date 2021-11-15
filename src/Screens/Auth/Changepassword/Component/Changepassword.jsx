import React, { Fragment} from 'react';


export default function Changepassword(props){
        return (
        <Fragment> 
          
			<div className="sign section--bg" data-bg="img/section/section.jpg">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="sign__content">
								
								<form action="#" className="sign__form">
									<a href="/" className="sign__logo">
										<img src="img/logo.svg" alt=""/>
									</a>
									{(props.toperror) ? <div className="sign__group toperrormessage">{props.errorMessage}</div> :  ''}

									<div className="sign__group">
										<input type="text"
										 className="sign__input"
										  placeholder="Enter OTP"
										  name="otp"
										  value ={props.otp}
										  onChange = {(event) => props.setOtp(event.target.value)} />

                                           <div className="errorTxt">
											{props.simpleValidator.current.message('otp', props.otp, 'required')}
											</div>
											
									</div>

									<div className="sign__group">
										<input type="text"
										 className="sign__input"
										  placeholder="Enter New Password"
										  name="newpassword"
										  value ={props.newpassword}
										  onChange = {(event) => props.setNewpassword(event.target.value)} />

                                           <div className="errorTxt">
											{props.simpleValidator.current.message('newpassword', props.newpassword, 'required')}
											</div>
											
									</div>

									<div className="sign__group sign__group--checkbox">
										<input id="remember" name="remember" type="checkbox" checked="checked" onChange={()=>{}}/>
										<label htmlFor="remember">I agree to the <a href="/privacypolicy">Privacy Policy</a></label>
									</div>
									
									<button className="sign__btn" type="button" onClick={() => props.changepassword()}>Update Password</button>

									
								</form>
								
							</div>
						</div>
					</div>
				</div>
			</div>
       </Fragment>
    )
 }     