import React, {Fragment,useState} from 'react';
import PaymentBtn from '../../../component/paymentBtn';
import PaypalBtn from '../../../component/paypalbtn';
import '../../../component/modal.css';



export default function Plan(props)
{
	const [subscription,setSubscription] = useState(0);
	const [checkkboxCheck,setcheckkboxCheck] = useState('');
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
						
						<h2 className="section__title">Pricing plan</h2>
						<ul className="breadcrumb">
							<li className="breadcrumb__item"><a href="/">Home</a></li>
							<li className="breadcrumb__item breadcrumb__item--active">Pricing plan</li>
						</ul>
						
					</div>
				</div>
			</div>
		</div>
	</section>	
	<div className="section">
		<div className="container">
			<div className="row">
				
					
				<div className="col-12">

					<ul className="row plan-features">
						<li className="col-12 col-md-6 col-lg-4">1 month unlimited access!</li>
						<li className="col-12 col-md-6 col-lg-4">Stream on your phone, laptop, tablet or TV.</li>
						<li className="col-12 col-md-6 col-lg-4">1 month unlimited access!</li>
						<li className="col-12 col-md-6 col-lg-4">Thousands of TV shows, movies & more.</li>
						<li className="col-12 col-md-6 col-lg-4">You can even Download & watch offline.</li>
						<li className="col-12 col-md-6 col-lg-4">Thousands of TV shows, movies & more.</li>
					</ul>
				</div>
						{props.planArray.map((item, index) => {
							return (
								<div key={index} className="col-12 col-md-6 col-lg-4">
									<div className="price price--profile">
										<img src={props.planUrl + item.plan_logo} alt="" style={{
											height: 80, width: 80
										}} className="partner__img" />
										<div className="price__item price__item--first"><span><span style={{ fontWeight: "bold" }}>{`NGN`}</span> {item.plan_price} </span></div>
										<div className="price__item"><span>{item.plan_title}</span></div>
										<div className="price__item"><span>{item.plan_days} days</span></div>
										<div className="price__item"><span>Full Access</span></div>
										
										{props.currency != 'NGN' ?

											 <PaypalBtn paymentData={item} selectedCurrency={props.currency}/>:<PaymentBtn paymentData={item} email={props.email} />
													}
									</div>
								</div>
							)
						})
						}
				{/* <div className="col-12 col-md-6 col-lg-4">
					<div className="price">
						<div className="price__item price__item--first"><span>Basic</span> <span>Free</span></div>
						<div className="price__item"><span>7 days</span></div>
						<div className="price__item"><span>720p Resolution</span></div>
						<div className="price__item"><span>Limited Availability</span></div>
						<div className="price__item"><span>Desktop Only</span></div>
						<div className="price__item"><span>Limited Support</span></div>
						<a href="/plan" className="price__btn">Choose Plan</a>
					</div>
				</div> */}
			</div>
		</div>
	</div>	

	<section className="section section--grid section--border">
		<div className="container">
			<div className="row">
				
				<div className="col-12">
					<h2 className="section__title section__title--no-margin">Our Features</h2>
				</div>
				
                <div className="col-12 col-md-6 col-lg-4">
					<div className="feature">
						<i className="icon ion-ios-tv feature__icon"></i>
						<h3 className="feature__title">Ultra HD</h3>
						<p className="feature__text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
					</div>
				</div>
				
				<div className="col-12 col-md-6 col-lg-4">
					<div className="feature">
						<i className="icon ion-ios-film feature__icon"></i>
						<h3 className="feature__title">Film</h3>
						<p className="feature__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first.</p>
					</div>
				</div>
				
               <div className="col-12 col-md-6 col-lg-4">
					<div className="feature">
						<i className="icon ion-ios-trophy feature__icon"></i>
						<h3 className="feature__title">Awards</h3>
						<p className="feature__text">It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.</p>
					</div>
				</div>
				

				
				<div className="col-12 col-md-6 col-lg-4">
					<div className="feature">
						<i className="icon ion-ios-notifications feature__icon"></i>
						<h3 className="feature__title">Notifications</h3>
						<p className="feature__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
					</div>
				</div>
				

				
				<div className="col-12 col-md-6 col-lg-4">
					<div className="feature">
						<i className="icon ion-ios-rocket feature__icon"></i>
						<h3 className="feature__title">Rocket</h3>
						<p className="feature__text">It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
					</div>
				</div>
				

				
				<div className="col-12 col-md-6 col-lg-4">
					<div className="feature">
						<i className="icon ion-ios-globe feature__icon"></i>
						<h3 className="feature__title">Multi Language Subtitles </h3>
						<p className="feature__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
					</div>
				</div>
				
			</div>
		</div>
	 </section>

	 
	
	</Fragment>
  )
}     