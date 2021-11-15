import React, { Fragment} from 'react';


export default function Faq(){
    return (
	<Fragment> 
        <section class="section section--first section--bg" data-bg="img/section/section.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section__wrap">
                            
                            <h2 class="section__title">FAQ</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb__item"><a href="/">Home</a></li>
                                <li class="breadcrumb__item breadcrumb__item--active">FAQ</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--faq">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="faq">
                            {/* <h3 class="faq__title">Why is a Video is not loading?</h3> */}
                            <h3 class="faq__title">How many movies can I stream?</h3>
                            {/* <p class="faq__text">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> */}
                            <p class="faq__text">You can stream unlimited movies without any limit at any time as often as you want.</p>
                        </div>

                        <div class="faq">
                            {/* <h3 class="faq__title">Why isn't there a HD version of this video?</h3> */}
                            <h3 class="faq__title">How can I watch movies on my television?</h3>
                            <p class="faq__text">Our platform has AirPlay and Cast available when using your Apple devices or Google Chromecast. You can also connect your computer to your TV via an HDMI cable. </p>
                            {/* <p class="faq__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p> */}
                        </div>

                        <div class="faq">
                            <h3 class="faq__title">What is the recommended internet connection speed for instant streaming?</h3>
                            {/* <h3 class="faq__title">Why is the sound distorted?</h3> */}
                            {/* <p class="faq__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> */}
                            <p class="faq__text">Instant streaming is available with all types of internet connection. We recommend a minimum speed of 500 kbps (please edit this if required)</p>
                        </div>
                        <div class="faq">
                            {/* <h3 class="faq__title">What Browsers are supported?</h3> */}
                            <h3 class="faq__title">How often is new content released on NOKELSTV?</h3>
                            <p class="faq__text">We release a minimum of 16 movies each month which are well curated for the most avid movie lovers!</p>
                            {/* <p class="faq__text">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                        </div>

                        <div class="faq">
                            {/* <h3 class="faq__title">How do you handle my privacy?</h3> */}
                            <h3 class="faq__title">How can I cancel my NOKELSTV subscription?</h3>
                            {/* <p class="faq__text">Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p> */}
                            <p class="faq__text">Simply unsubscribe from the ‘Manage profile’ portal.</p>
                        </div>
                    </div>

                    <div class="col-12 col-md-6">
                        <div class="faq">
                            {/* <h3 class="faq__title">Why isn't the video starting at the beginning?</h3> */}
                            <h3 class="faq__title">Can I watch instantly on any device?</h3>
                            {/* <p class="faq__text">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p> */}
                            <p class="faq__text">You can stream from up to one (1) device at a time, per account on an all applicable devices when connected to the internet. </p>
                        </div>

                        <div class="faq">
                            <h3 class="faq__title">How fast do videos start playing?</h3>
                            {/* <h3 class="faq__title">How do I make the Video go Fullscreen?</h3> */}
                            {/* <p class="faq__text">It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p> */}
                            <p class="faq__text">Videos load up instantly when streaming over average internet connection speeds. Speeds may vary depending on the quality of your internet provider. </p>
                        </div>

                        <div class="faq">
                            {/* <h3 class="faq__title">Why is the Video stuttering, buffering or randomly stopping?</h3> */}
                            <h3 class="faq__title">What browsers are supported by NOKELSTV?</h3>
                            <p class="faq__text">All web browsers are supported by our platform, including Internet Explorer, Google Chrome, Safari, Mozilla Firefox, Opera, etc.</p>
                            {/* <p class="faq__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> */}
                        </div>
                     
                        <div class="faq">
                            {/* <h3 class="faq__title">When I change the quality of a video, nothing happens.</h3> */}
                            <h3 class="faq__title">How may I contact NOKELSTV?</h3>
                            <p class="faq__text">We are available for all inquires 24/7. Please contact us via our social media handle @NOKELSTV on Facebook, Instagram, Twitter.</p>
                            {/* <p class="faq__text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p> */}
                        </div>

                     

                        {/* <div class="faq">
                            <h3 class="faq__title">How can I contact you?</h3>
                            <p class="faq__text">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
      </Fragment>
    )
  }     