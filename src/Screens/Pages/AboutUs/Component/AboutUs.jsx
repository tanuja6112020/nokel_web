import React, { Fragment } from 'react';




export default function AboutUs (){
    return (
    <Fragment>
       
        <section class="section section--first section--bg" data-bg="img/section/section.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section__wrap">
                            <h2 class="section__title">About Us</h2>
                             <ul class="breadcrumb">
                                <li class="breadcrumb__item"><a href="/aboutus">Home</a></li>
                                <li class="breadcrumb__item breadcrumb__item--active">About Us</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section--grid">
		<div class="container">
			<div class="row">
				
				<div class="col-12">
					<h2 class="section__title"><b>NokelsTV</b> – Best Place for Movies</h2>
				</div>
				
                <div class="col-12">
					<p class="section__text">NOKELSTV is an online streaming platform that delivers African movies and Tv shows. The movies will be uploaded on a monthly basis and live reality tv shows will be available to stream once they are available. NOKELSTV acts as a reliable platform that connects the products being produced to the consumers in different variations, and in a timely manner. One of the special benefits for the consumers is being able to watch various content at anytime, anywhere in the world where internet connectivity is available. Nokelstv was built to have no limits as the founders of NOKELSTV thought long and hard to find possible future needs and put itself in the best possible position to fulfill those needs whenever they arise. </p>

					{/* <p class="section__text section__text--last-with-margin">'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> */}
				</div>
				
               <div class="col-12 col-md-6 col-lg-4">
					<div class="feature">
						<i class="icon ion-ios-tv feature__icon"></i>
						<h3 class="feature__title">Ultra HD</h3>
						<p class="feature__text">Watch at clear high-definition stunning quality.</p>
					</div>
				</div>
				
                <div class="col-12 col-md-6 col-lg-4">
					<div class="feature">
						<i class="icon ion-ios-film feature__icon"></i>
						<h3 class="feature__title">Film</h3>
						<p class="feature__text">Our catalogue is curated with care for the most avid movie lovers.</p>
					</div>
				</div>
				
                {/* <div class="col-12 col-md-6 col-lg-4">
					<div class="feature">
						<i class="icon ion-ios-trophy feature__icon"></i>
						<h3 class="feature__title">Awards</h3>
						<p class="feature__text">It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.</p>
					</div>
				</div> */}
				
                <div class="col-12 col-md-6 col-lg-4">
					<div class="feature">
						<i class="icon ion-ios-notifications feature__icon"></i>
						<h3 class="feature__title">Notifications</h3>
						<p class="feature__text">Get notified of new releases.</p>
					</div>
				</div>
				
                {/* <div class="col-12 col-md-6 col-lg-4">
					<div class="feature">
						<i class="icon ion-ios-rocket feature__icon"></i>
						<h3 class="feature__title">Rocket</h3>
						<p class="feature__text">It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
					</div>
				</div>
				 */}
               {/* <div class="col-12 col-md-6 col-lg-4">
					<div class="feature">
						<i class="icon ion-ios-globe feature__icon"></i>
						<h3 class="feature__title">Multi Language Subtitles </h3>
						<p class="feature__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
					</div>
				</div> */}
				
			</div>
		</div>
	</section>     

        <section class="section section--grid section--border">
		<div class="container">
			<div class="row">
				
				<div class="col-12">
					<h2 class="section__title section__title--no-margin">How it works?</h2>
				</div>
				

				
				<div class="col-12 col-md-6 col-lg-4">
					<div class="how">
						<span class="how__number">01</span>
						<h3 class="how__title">Create an account</h3>
						<p class="how__text">Sign up by inputting your chosen credentials at NokelsTV</p>
					</div>
				</div>
				

				
				<div class="col-12 col-md-6 col-lg-4">
					<div class="how">
						<span class="how__number">02</span>
						<h3 class="how__title">Choose your Plan</h3>
						<p class="how__text">Choose the subscription plan that you desire.</p>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-4">
					<div class="how">
						<span class="how__number">03</span>
						<h3 class="how__title">Enjoy MovieGo</h3>
						<p class="how__text">Enjoy NOKELSTV from your favourite devices anytime!</p>
					</div>
				</div>
			</div>
		</div>
	</section>
      
        {/* <section class="section section--grid section--border">
		<div class="container">
			<div class="row">
				
				<div class="col-12">
					<h2 class="section__title section__title--no-margin">Our Partners</h2>
				</div>
				

				
				<div class="col-12">
					<p class="section__text section__text--last-with-margin">It is a long <b>established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
				</div>
				

				
				<div class="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="/aboutus" class="partner">
						<img src="img/partners/themeforest-light-background.png" alt="" class="partner__img"/>
					</a>
				</div>
				

				
				<div class="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="/aboutus" class="partner">
						<img src="img/partners/audiojungle-light-background.png" alt="" class="partner__img"/>
					</a>
				</div>
				

				
				<div class="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="/aboutus" class="partner">
						<img src="img/partners/codecanyon-light-background.png" alt="" class="partner__img"/>
					</a>
				</div>
				

				
				<div class="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="/aboutus" class="partner">
						<img src="img/partners/photodune-light-background.png" alt="" class="partner__img"/>
					</a>
				</div>
				

				
				<div class="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="/aboutus" class="partner">
						<img src="img/partners/activeden-light-background.png" alt="" class="partner__img"/>
					</a>
				</div>
				

				
				<div class="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="/about" class="partner">
						<img src="img/partners/3docean-light-background.png" alt="" class="partner__img"/>
					</a>
				</div>
				
			</div>
		</div>
	</section> */}
      
    </Fragment >
  )
}     