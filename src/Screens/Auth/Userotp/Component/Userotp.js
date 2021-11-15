import React, { Fragment} from 'react';


export default function Userotp(props){
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
									{(props.toperror) ? <div className={(props.success) ? 'sign__group topsuccessmessage' : 'sign__group toperrormessage'}>{props.errorMessage}</div> :  ''}
									<div className="sign__group">
										<input 
										type="text" 
										className="sign__input" 
										placeholder="Enter OTP"
										name='Otp'
										value={props.otp} 
										onChange={(event) => props.setOtp(event.target.value)} />

										<div className="errorTxt">
										 {props.simpleValidator.current.message('Otp', props.otp, 'required')}
										 </div>
									</div>
									<div id="recaptcha-container" ref={props.captchaRef}></div>

									<span className="sign__text" style={{cursor:"pointer"}} onClick={() => props.handleSendOTP()}>Resend OTP</span>
									
										<button className="sign__btn" type="button" onClick={() => !props.isLoad && props.onVerifyCodeSubmit()}>
											
											{props.isLoad
												?
												<img className="profile_size" src='img/loader.gif' alt="loader"/>
												: `Send`}
										</button>

									<span className="sign__text">We have sent OTP to your Mobile</span>
								</form>
								
							</div>
						</div>
					</div>
				</div>
			</div>
       </Fragment>
    )
 }     