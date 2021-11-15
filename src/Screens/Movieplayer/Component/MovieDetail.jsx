import React, { Fragment,useState } from 'react';
import { useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import Montage_video from "../../../component/lottie/montage.mp4";




export default function MovieDetail(props) {
     const [Media, setMedia] = useState(true);
	// const stripHtml = require("string-strip-html");
	const commentdata = props.comments;
	const posterpath = props.paths.movie_poster_url;
	const ssss = props.moviedetail.about_movie
	var releaseDate = new Date(props.moviedetail.release_date).getFullYear() + '-' + ("0" + (new Date(props.moviedetail.release_date).getMonth() + 1)).slice(-2) + '-' + ("0" + new Date(props.moviedetail.release_date).getDate()).slice(-2)
	// console.log('props.moviedetail.release_date', props.moviedetail.release_date)
	
	//   useEffect(() => {
	// 	setTimeout(() => {
	// 		//alert(props.paths.movie_trailer_url + props.moviedetail.trailer);
	// 		console.log("Moviepath",props.paths.movie_trailer_url + props.moviedetail.trailer)
	// 		//setMedia(props.paths.movie_trailer_url + props.moviedetail.trailer);
	// 		//setMedia("https://nokels.tv/suadmin/upload/trailer/1610191381.mp4");
	// 		//alert(Media);
	// 	  }, 8000);
	//   },[]);

   function handleEnded(){

	 setMedia(false);
	  }

	return (
		<Fragment>
			<section className="section section--details section--bg" data-bg="img/section/details.jpg">
				<div className="container">
					<div className="row">
						<div className="row col-12">
							<div className="col-9">
								<h1 className="section__title">{props.moviedetail.movie_name}</h1>
							</div>
							<button className="detail__btn  col-3" type="button" onClick={() => props.navToPlayer()}>
								{`View Movie`}
							</button>
						</div>
						<div className="col-12 col-lg-6">
							<div className="card card--details">
								<div className="row">
									<div className="col-12 col-sm-5 col-lg-6 col-xl-5">
										<div className="card__cover">
											<img className="card__cover_img_deta" src={props.paths.movie_poster_url + '' + props.moviedetail.movie_poster} alt="" />
											<span className="card__rate card__rate--green">{props.moviedetail.movie_rating}</span>
										</div>
									</div>
					 				<div className="col-12 col-sm-7 col-lg-6 col-xl-7">
										<div className="card__content">
											<ul className="card__meta">
												<li><span>Director:</span>{props.moviedetail.director}</li>
												<li><span>Writer:</span>{props.moviedetail.writer}</li>
												<li><span>{props.moviedetail.starcast?`Cast :`:null}</span> {props.moviedetail.starcast}</li>
												<li><span>Genre:</span> {props.moviedetail.type_of_movi} {props.moviedetail.category} {props.moviedetail.language_name}</li>
												<li><span>Release year:</span> {releaseDate}</li>
												{/* <li><span>Running time:</span> 130 min</li> */}
												<li><span>Certified:</span> {props.moviedetail.certified}</li>
											</ul>
											{/* <div className="card__description">
												<div dangerouslySetInnerHTML={{ __html: ssss }} />
											</div> */}
										</div>
									</div>

								</div>
							</div>
						</div>

						<div className="col-12 col-lg-6">	
										{/* <p>{props.paths.movie_movies_url}</p>
										<p>{Media?"yes":"no"}</p> */}
							{ Media ?
								<video
									style={{ backgroundColor: "#000", }}
									className="col-12"
									controls
									controlsList="nodownload"
									// crossOrigin='true'
									playsInline
									onEnded={()=>handleEnded()}
									poster={props.paths.movie_poster_url + props.moviedetail.movie_poster}
									id="player"
								>

									{
										
											<source						
												src={Montage_video}
												autoPlay
											
												// src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
												type="video/mp4"
												size="720" />
											
									}
								    
									< a href="/moviedetail" download>Download</a>
								</video>
							   :
							   <div>
							   <video
							   style={{ backgroundColor: "#000", }}
							   className="col-12"
							   controls
							   autoPlay
							   controlsList="nodownload"
							   // crossOrigin='true'
							   playsInline
							   poster={props.paths.movie_poster_url + props.moviedetail.movie_poster}
							   id="player"
							  
						   >

							   
							   {
								   props.paths.movie_movies_url ?
									   <source						
									   src={props.paths.movie_trailer_url + props.moviedetail.trailer}
										   autoPlay
										  // onEnded={handleEnded}
										   // src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
										   type="video/mp4"
										   size="720" />
									   : null
							   }
							   
							   < a href="/moviedetail" download>Download</a>
						   </video>
						   </div>
							   	}
								

						</div>


						<div className="col-12">
							<div className="col-12  card__description">
								<div dangerouslySetInnerHTML={{ __html: ssss }} />
							</div>
						</div>
					</div>
				</div>

			</section>

			<section className="content">
				<div className="content__head">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h2 className="content__title">Discover</h2>
								<ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
									{/*
									 <li className="nav-item">
										<a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Comments</a>
									</li> 
									*/}
									<li className="nav-item">
										<a className="nav-link active" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Reviews</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Photos</a>
									</li>
								</ul>
								<div className="content__mobile-tabs" id="content__mobile-tabs">
									<div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										{/* <input type="button" value="Comments" /> */}
										<span></span>
									</div>
									<div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
										<ul className="nav nav-tabs" role="tablist">
											<li className="nav-item"><a className="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Comments</a></li>
											<li className="nav-item"><a className="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Reviews</a></li>
											<li className="nav-item"><a className="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Photos</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-8 col-xl-8">
							<div className="tab-content">
								<div className="tab-pane fade " id="tab-1" role="tabpanel" aria-labelledby="1-tab">
									<div className="row">

										<div className="col-12">
											<div className="comments">
												<ul className="comments__list">
													<li className="comments__item">
														<div className="comments__autor">
															<img className="comments__avatar" src="img/user.png" alt="" />
															<span className="comments__name">John Doe</span>
															<span className="comments__time">30.08.2018, 17:53</span>
														</div>
														<p className="comments__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
														<div className="comments__actions">
															<div className="comments__rate">
																<button type="button"><i className="icon ion-md-thumbs-up"></i>12</button>

																<button type="button">7<i className="icon ion-md-thumbs-down"></i></button>
															</div>

															<button type="button"><i className="icon ion-ios-share-alt"></i>Reply</button>
															<button type="button"><i className="icon ion-ios-quote"></i>Quote</button>
														</div>
													</li>

													<li className="comments__item comments__item--answer">
														<div className="comments__autor">
															<img className="comments__avatar" src="img/user.png" alt="" />
															<span className="comments__name">John Doe</span>
															<span className="comments__time">24.08.2018, 16:41</span>
														</div>
														<p className="comments__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
														<div className="comments__actions">
															<div className="comments__rate">
																<button type="button"><i className="icon ion-md-thumbs-up"></i>8</button>

																<button type="button">3<i className="icon ion-md-thumbs-down"></i></button>
															</div>

															<button type="button"><i className="icon ion-ios-share-alt"></i>Reply</button>
															<button type="button"><i className="icon ion-ios-quote"></i>Quote</button>
														</div>
													</li>

													<li className="comments__item comments__item--quote">
														<div className="comments__autor">
															<img className="comments__avatar" src="img/user.png" alt="" />
															<span className="comments__name">John Doe</span>
															<span className="comments__time">11.08.2018, 11:11</span>
														</div>
														<p className="comments__text"><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
														<div className="comments__actions">
															<div className="comments__rate">
																<button type="button"><i className="icon ion-md-thumbs-up"></i>11</button>

																<button type="button">1<i className="icon ion-md-thumbs-down"></i></button>
															</div>

															<button type="button"><i className="icon ion-ios-share-alt"></i>Reply</button>
															<button type="button"><i className="icon ion-ios-quote"></i>Quote</button>
														</div>
													</li>

													<li className="comments__item">
														<div className="comments__autor">
															<img className="comments__avatar" src="img/user.png" alt="" />
															<span className="comments__name">John Doe</span>
															<span className="comments__time">07.08.2018, 14:33</span>
														</div>
														<p className="comments__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
														<div className="comments__actions">
															<div className="comments__rate">
																<button type="button"><i className="icon ion-md-thumbs-up"></i>99</button>

																<button type="button">35<i className="icon ion-md-thumbs-down"></i></button>
															</div>

															<button type="button"><i className="icon ion-ios-share-alt"></i>Reply</button>
															<button type="button"><i className="icon ion-ios-quote"></i>Quote</button>
														</div>
													</li>

													<li className="comments__item">
														<div className="comments__autor">
															<img className="comments__avatar" src="img/user.png" alt="" />
															<span className="comments__name">John Doe</span>
															<span className="comments__time">02.08.2018, 15:24</span>
														</div>
														<p className="comments__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
														<div className="comments__actions">
															<div className="comments__rate">
																<button type="button"><i className="icon ion-md-thumbs-up"></i>74</button>

																<button type="button">13<i className="icon ion-md-thumbs-down"></i></button>
															</div>

															<button type="button"><i className="icon ion-ios-share-alt"></i>Reply</button>
															<button type="button"><i className="icon ion-ios-quote"></i>Quote</button>
														</div>
													</li>
												</ul>

												<form action="#" className="form">
													<textarea id="text" name="text" className="form__textarea" placeholder="Add comment"></textarea>
													<button type="button" className="form__btn">Send</button>
												</form>
											</div>
										</div>

									</div>
								</div>
								<div className="tab-pane fade show active" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
									<div className="row">
										<div className="col-12">
											<div className="reviews">
												<ul className="reviews__list">
													{
														(commentdata.length > 0) ?
															commentdata.map((comment, keycomments) => (
																<li className="reviews__item" key={keycomments} >
																	<div className="reviews__autor">
																		<img className="reviews__avatar" src={props.paths.user_profile_url + '' + comment.profile} alt="" />
																		<span className="reviews__name">{comment.first_name}</span>
																		<span className="reviews__time">21-12-2020</span>

																		<span className="reviews__rating reviews__rating--green">{comment.rating}</span>
																	</div>
																	<p className="reviews__text">{comment.review}</p>
																</li>
															)) : ''}
												</ul>
												{props.Auth !== null &&
													< form action="#" className="form">
														<textarea
															onChange={(e) => props.setReview(e)}
															value={props.review}
															className="form__textarea" placeholder="Review"></textarea>
														<div className="form__slider">
															<div className="form__slider-rating" id="slider__rating"></div>
															<div className="form__slider-value" id="form__slider-value"></div>
														</div>
														<ReactStars
															count={5}
															onChange={(r) => props.ratingChanged(r)}
															size={24}
															activeColor="#ffd700"
														/>
														<button
															onClick={() => props.saveRating()}
															type="button" className="form__btn">Send</button>
													</form>}
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">

									<div className="gallery" itemScope>
										<div className="row">
											{
												props.moviedetail.gallery_files?
													props.moviedetail.gallery_files.map((item, index) => {
													return (
														<figure 
															key={index}
															className="col-12 col-sm-6 col-xl-4" itemProp="associatedMedia" itemScope>
															<a href="/moviedetail" itemProp="contentUrl" data-size="1920x1280">
																<img  alt="" src={props.paths.movie_gallery_url + item} itemProp="thumbnail" alt="description" />
															</a>
															<figcaption itemProp="caption description">Some image caption 1</figcaption>
														</figure>
													)
												})
												:null
											}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-4 col-xl-4">
							<div className="row">

								<div className="col-12">
										<h2 className="section__title">You may also like..</h2>
								</div>
								{props.movierelated.map((movierelateds, keymovierelated) => (
									<div className="col-6 col-sm-4 col-lg-6" key={keymovierelated}>
										<div className="card">
											<div className="card__cover">
												<img className="card__cover_img_detail" src={posterpath + '' + movierelateds.movie_poster} alt="" />
												<a href={`/moviedetail/${movierelateds.id}`} className="card__play">
													<i className="icon ion-ios-play"></i>
												</a>
												<span className="card__rate card__rate--green">{movierelateds.movie_rating}</span>
											</div>
											<div className="card__content">
												<h3 className="card__title"><a href={`/moviedetail/${movierelateds.id}`}>{movierelateds.movie_name}</a></h3>
												{/* <span className="card__category">
													<a href="moviedetail">Action</a>
													<a href="moviedetail">Triler</a>
												</span> */}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

		</Fragment >
	)
}     