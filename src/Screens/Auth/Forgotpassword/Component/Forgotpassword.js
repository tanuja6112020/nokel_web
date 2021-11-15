import React, {  Fragment } from 'react';


export default function Forgotpassword(props) {
	return (
		<Fragment>

			<div className="sign section--bg" data-bg="img/section/section.jpg">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="sign__content">

								<form action="#" className="sign__form">
									<a  className="sign__logo">
										<img src="img/logo.svg" alt="" />
									</a>

									<div className="sign__group">
										<input type="text"
											className="sign__input"
											onChange={(event) => props.setEmail(event.target.value)} 
										  placeholder="Email" />
									</div>

									<div className="sign__group sign__group--checkbox">
										<input id="remember" name="remember" type="checkbox" checked="checked" onChange={() => { }} />
										<label htmlFor="remember">I agree to the <a >Privacy Policy</a></label>
									</div>

									<button onClick={() => props.sendOtp()} className="sign__btn" type="button"><a style={{ color: '#ffffffb3' }}>Send</a></button>

									<span className="sign__text">We will send a otp to your Email</span>
								</form>

							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}     