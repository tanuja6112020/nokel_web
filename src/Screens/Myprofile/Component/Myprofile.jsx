import React, { Fragment, useRef } from 'react';
import PaymentBtn from '../../../component/paymentBtn';
import PaypalBtn from '../../../component/paypalbtn';

import '../../../component/modal.css';

import moment from 'moment';
import { useState } from 'react';
export default function Myprofile(props) {
	const [subscription,setSubscription] = useState(0);
    const [checkkboxCheck,setcheckkboxCheck] = useState('');
	const imgBtn = useRef();
	var dob = new Date(props.birthdate).getFullYear() + '-' + ("0" + (new Date(props.birthdate).getMonth() + 1)).slice(-2) + '-' + ("0" + new Date(props.birthdate).getDate()).slice(-2)
	var end_date = moment(props.profileData.plan_expire_date, 'YYYY-MM-DD').format('YYYY-MM-DD');
	var date1 = new Date();
	var date2 = new Date(end_date);
	// To calculate the time difference of two dates 
	var Difference_In_Time = date2.getTime() - date1.getTime();
	// To calculate the no. of days between two dates 
	var days = parseInt(Difference_In_Time / (1000 * 3600 * 24))+1;
	const handleSubscription = (index,item)=>{
		// var chkPassport = document.getElementById(item.id);
		// if(chkPassport.checked){

		// 	props.planArray[index].subscription_type =
		// 	props.setPlanArray(props.planArray)
		// }else{

		// 	props.planArray[index].subscription_type =0
		// 	props.setPlanArray(props.planArray)
		// }

		if(subscription)
		{
			setSubscription(0);
			setcheckkboxCheck('');
		}else{
			setSubscription(1);
			setcheckkboxCheck('checked');
		}
	  }

	

	return (
		<Fragment>
			<section className="section section--first section--bg" data-bg="img/section/section.jpg">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section__wrap">
								<h2 className="section__title">My NokelsTV</h2>
								<ul className="breadcrumb">
									<li className="breadcrumb__item"><a href="/Home">Home</a></li>
									<li className="breadcrumb__item breadcrumb__item--active">Profile</li>
								</ul>

							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="content">
				<div className="profile">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="profile__content">
									<div className="profile__user">
										<div
											onClick={() => {
												imgBtn && imgBtn.current.click()
											}}
											className="profile__avatar">
											<img src={props.profile} alt="" />
											<input type="file"
												ref={imgBtn}
												id="file-input" name="ImageStyle" style={{
													display: "none"
												}}
												onChange={(event) => props.handleImg(event)}
											// on
											// onClick={(event) => props.handleImg(event)}
											/>
										</div>
										<div className="profile__meta">
											<h3>{props.firstname}</h3>
											{/* <span>NokelsTV ID: 23562</span> */}
										</div>
									</div>


									<ul className="nav nav-tabs content__tabs content__tabs--profile" id="content__tabs" role="tablist">
										<li className="nav-item">
											<a className="nav-link active" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Subscription</a>
										</li>
										<li className="nav-item">
											<a className="nav-link " data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Profile</a>
										</li>

									</ul>



									<div className="content__mobile-tabs content__mobile-tabs--profile" id="content__mobile-tabs">
										<div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<input type="button" defaultValue="Profile" />
											<span></span>
										</div>

										<div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
											<ul className="nav nav-tabs" role="tablist">
												<li className="nav-item"><a className="nav-link active" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Subscription</a></li>
												<li className="nav-item"><a className="nav-link " id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Profile</a></li>

											</ul>
										</div>
									</div>


									<button onClick={() => props.onLogout()} className="profile__logout" type="button">
										<i className="icon ion-ios-log-out"></i>
										<span>Logout</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="container">

					<div className="tab-content">
						<div className="tab-pane fade show " id="tab-1" role="tabpanel" aria-labelledby="1-tab">
							<div className="row">

								<div className="col-12 col-lg-6">
									<form action="#" className="profile__form">
										<div className="row">

											{(props.toperror) ? <div className={(props.success) ? 'sign__group topsuccessmessage' : 'sign__group toperrormessage'}>{props.errorMessage}</div> : ''}
											<div className="col-12">
												<h4 className="profile__title">Profile details</h4>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="profile__group">
													<label className="profile__label" htmlFor="firstname">First Name</label>
													<input
														id="firstname"
														type="text"
														name="firstname"
														className="profile__input"
														value={props.firstname}
														onChange={(event) => props.setFirstName(event.target.value)} />

													<div className="errorTxt">
														{props.simpleValidator.current.message('firstname', props.firstname, 'required')}
													</div>
												</div>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="profile__group">
													<label className="profile__label" htmlFor="lastname">Last Name</label>
													<input
														id="lastname"
														type="text"
														name="lastname"
														className="profile__input"
														placeholder="lastname"
														value={props.lastname ? props.lastname : ''}
														onChange={(event) => props.setLastName(event.target.value)} />

													<div className="errorTxt">
														{props.simpleValidator.current.message('lastname', props.lastname, 'required')}
													</div>
												</div>
											</div>



											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="profile__group">
													<label className="profile__label" htmlFor="mobile">Mobile</label>
													<input id="mobile"
														type="number"
														name="mobile"
														disabled={true}
														className="profile__input"
														placeholder="Mobile"
														value={props.mobile}
														onChange={(event) => props.setMobile(event.target.value)} />

													<div className="errorTxt">
														{props.simpleValidator.current.message('mobile', props.mobile, 'required')}
													</div>
												</div>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="profile__group">
													<label className="profile__label" htmlFor="email">Email</label>
													<input
														id="email"
														type="text"
														disabled={true}
														name="email"
														className="profile__input"
														placeholder="email"
														value={props.email}
														onChange={(event) => props.setEmail(event.target.value)} />

													<div className="errorTxt">
														{props.simpleValidator.current.message('email', props.email, 'required|email')}
													</div>
												</div>
											</div>
											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="profile__group">
													<label className="profile__label" htmlFor="email">Date Of Birth</label>
													<input
														id="birthdate"
														type="date"
														name="birthdate"
														className="profile__input"
														placeholder="DOB"
														value={props.birthdate ? dob : ''}
														onChange={(event) => props.setBirthDate(event.target.value)} />

													<div className="errorTxt">
														{props.simpleValidator.current.message('birthdate', props.birthdate, 'required')}
													</div>
												</div>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="profile__group">
													<label className="profile__label" htmlFor="email">Gender</label>
													<select id="gender"
														name="gender"
														className="profile__input"
														defaultValue={props.gender}
														onChange={(event) => props.setGender(event.target.value)}
													>
														<option defaultValue=''>{`Select Gender`}</option>
														<option
															value={1}
														>Male</option>
														<option
															value={2}
														>Female</option>
													</select>
												</div>
											</div>
											<div className="col-12">
												<button className="profile__btn" type="button" onClick={() => props.updateprofile()}>Save</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-12 col-lg-6">
									<form action="#" className="profile__form">
										<div className="row">
											<div className="col-12">
												<h4 className="profile__title">Change password</h4>
											</div>
											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="profile__group">
													<label className="profile__label" htmlFor="oldpass">Old Password</label>
													<input id="oldpass"
														type="password"
														name="oldpass"
														className="profile__input"
														value={props.oldpassword}
														onChange={(event => props.setOldPassword(event.target.value))} />
													<div className="errorTxt">
														{props.simpleValidatorpass.current.message('oldpass', props.oldpassword, 'required')}
													</div>
												</div>
											</div>
											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="profile__group">
													<label className="profile__label" htmlFor="newpass">New Password</label>
													<input
														id="newpass"
														type="password"
														name="newpass"
														className="profile__input"
														value={props.newpassword}
														onChange={(event) => props.setNewPassword(event.target.value)}
													/>
													<div className="errorTxt">
														{props.simpleValidatorpass.current.message('newpass', props.newpassword, 'required')}
													</div>
												</div>
											</div>
											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="profile__group">
													<label className="profile__label" htmlFor="confirmpass">Confirm New Password</label>
													<input id="confirmpass" type="password" name="confirmpass" className="profile__input" />
												</div>
											</div>
											<div className="col-12">
												<button className="profile__btn" type="button" onClick={() => props.updatepassword()}>Change</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="tab-pane fade show active" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
							{props.profileData.plan_status === 1 && <div className="row">
								<div className="col-12 col-md-12 col-lg-12">
									<div className="price price--profile">
										{/* <img src={props.planUrl + item.plan_logo} alt="" style={{
											height: 80, width: 80
										}} className="partner__img" /> */}
										{/* <i className="icon ion-logo-usd" /> */}
										
										<div style={{ color: "#11BFBE" }} className="price__item price__item--first">
											<span>{props.profileData.plan_title}
											{props.profileData.subscription_type === 1?
											<a                  
														style={{cursor: "pointer" }}
														onClick={() => props.cancelsubscription()}
											className="subscriptn_btn">Subscription Cancel</a>:null}</span>
											<span>Active</span></div>
										<div className="price__item"><span> {props.profileData.plan_price} {props.currency}</span><span></span></div>
										<div className="price__item"><span>{days} days</span></div>
										<div className="price__item"><span>Full Access</span></div>
									</div>
								</div>
							</div>}
							<div className="row">
								{
									props.planArray.map((item, index) => {
										return (
											<div key={index} className="col-12 col-md-6 col-lg-4">
												<div className="price price--profile">
													<img src={props.planUrl + item.plan_logo} alt="" style={{
														height: 80, width: 80
													}} className="partner__img" />
													<div className="price__item price__item--first"><span><span style={{ fontWeight: "bold" }}>{props.currency}</span> {item.plan_price}</span></div>
													<div className="price__item"><span>{item.plan_title}</span></div>
													<div className="price__item"><span>{item.plan_days} days</span></div>
													<div className="price__item"><span>Full Access</span></div>
																									
													{/* {item.paystrack_plan_id !=null?
													<div className="sign__group sign__group--checkbox" style={{marginTop:10,marginBottom:-5}}> 
													<input
													 value={subscription}  id={item.id} name={item.plan_title} type="checkbox" onChange={()=>handleSubscription(index,item)} />
	
													<label htmlFor={item.id}>click here to take subscription</label>
													</div>:'' } */}
													{props.currency != 'NGN' ?

														<PaypalBtn paymentData={item} selectedCurrency={props.currency} /> : <PaymentBtn paymentData={item} email={props.email} subscription={subscription} />
													}

													{/* <Paypalpayment paymentData={item}/> */}
												</div>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>

				</div>
			</div>


			


		</Fragment>
	)
}