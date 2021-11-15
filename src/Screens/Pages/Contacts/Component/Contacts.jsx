import React, { Fragment, useState } from 'react';

export default function Contacts (props){
	const [ name,setName] = useState('');
	const [ email,setEmail] = useState('');
	const [subject,setSubject] = useState('');
	const [msg,setMsg] = useState("");
	const [check ,setCheck] = useState(false)

	const callapi = (e)=>
	{
		e.preventDefault();
		 const param = {
			name:name,
			email:email,
			subject:subject,
			message:msg,
		 }
		 props.contactusapi(param);
		 setCheck(true);
		 
	}
    return (
		
    <Fragment>


	<section className="section section--first section--bg" data-bg="img/section/section.jpg">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="section__wrap">
						
						<h2 className="section__title">Contacts</h2>
						
                       <ul className="breadcrumb">
							<li className="breadcrumb__item"><a href="/">Home</a></li>
							<li className="breadcrumb__item breadcrumb__item--active">Contacts</li>
						</ul>
						
					</div>
				</div>
			</div>
		</div>
	</section>
	

	
	<section className="section">
		<div className="container">
			<div className="row">
				<div className="col-12 col-md-7 col-xl-8">
					<div className="row">
						
						<div className="col-12">
							<h2 className="section__title">Contact Form</h2>
						</div>
						<h2 style={{color:"green"}}>{check?'Email send successfully':""}</h2>
						<div className="col-12">
							<form mathod="post" className="form form--contacts" onSubmit={(e)=>callapi(e)}>
								<input type="text" onChange={(e)=>setName(e.target.value)}  required="required"  className="form__input" placeholder="Your Name"/>
								<input type="text"  onChange={(e)=>setEmail(e.target.value)}  required="required"  className="form__input" placeholder="Email"/>
								<input type="text"   onChange={(e)=>setSubject(e.target.value)}  required="required"  className="form__input" placeholder="Subject"/>
								<textarea id="text"  onChange={(e)=>setMsg(e.target.value)}  required="required"   name="text" className="form__textarea" placeholder="Type your message..."></textarea>
								<button type="submit" className="form__btn">Send</button>
							</form>
						</div>
					</div>
				</div>
				
				<div className="col-12 col-md-5 col-xl-4">
					<div className="row">
						
						<div className="col-12">
							<h2 className="section__title">Info</h2>
						</div>
						<div className="col-12">
							<ul className="contacts__list">
								
								<li><a href="mailto:Nokels@nokelstv.com">Nokels@nokelstv.com</a></li>
							</ul>
							<ul className="contacts__social">
								<li className="facebook"><a href="https://www.facebook.com/Nokelstv/"><i className="icon ion-logo-facebook"></i></a></li>
								<li className="instagram"><a href="https://instagram.com/nokelstv?igshid=7ut5y3xpe73g"><i className="icon ion-logo-instagram"></i></a></li>
								<li className="twitter"><a href="https://twitter.com/nokelstv?s=21"><i className="icon ion-logo-twitter"></i></a></li>
								<li className="vk"><a href="/contacts"><i className="icon ion-logo-vk"></i></a></li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>
	
	</Fragment >
  )
}     