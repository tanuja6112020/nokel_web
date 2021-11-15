import React, { Fragment } from 'react';



export default function Signin(props) {
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
									{(props.toperror) ? <div className="sign__group toperrormessage">{props.errorMessage}</div> : ''}
									<div className="sign__group">
										<input
											type="text"
											className="sign__input"
											nam="Email"
											placeholder="Email"
											value={props.email}
											onChange={(event) => props.setEmail(event.target.value)} />

										<div className="errorTxt">
											{props.simpleValidator.current.message('Email', props.email, 'required')}
										</div>
									</div>
									<div className="sign__group">
										<input
											type="password"
											name="Password"
											className="sign__input"
											value={props.password}
											placeholder="Password"
											onChange={(event) => props.setPassword(event.target.value)} />
										<div className="errorTxt">
											{props.simpleValidator.current.message('Password', props.password, 'required')}
										</div>
									</div>
									<div className="sign__group sign__group--checkbox">
										<input id="remember" name="remember" type="checkbox" checked="checked" onChange={() => console.log()} />
										<label htmlFor="remember">Remember Me</label>
									</div>
									<button className="sign__btn" type="button"
										onClick={() => !props.isLoad && props.usersignin()}>
										{props.isLoad
											?
											<img className="profile_size" src='img/loader.gif' alt="loader" />
											: `Sign in`}
									</button>
									<span className="sign__text">Don't have an account? <a href="/signup">Sign up!</a></span>

									<span className="sign__text"><a href="/forgotpassword">Forgot password?</a></span>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)

}     