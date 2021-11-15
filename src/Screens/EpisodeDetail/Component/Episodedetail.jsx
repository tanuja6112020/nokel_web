import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import Montage_video from "../../../component/lottie/montage.mp4";




export default function Episode(props) {

	const [Media, setMedia] = useState(true);
	function handleEnded() {
		setMedia(false);
	}

	return (
		<Fragment>
			<section className="section section--details section--bg" data-bg="img/section/details.jpg">
				<div className="container">
					<div className="row">
						<div className="row col-12">
							<div className="col-9">
								<h1 className="section__title">{props.episodedetail.serial_name}</h1>
							</div>
							<button className="detail__btn  col-3" type="button" onClick={() => props.navToPlayer()}>
								{`View Episode`}
							</button>
						</div>
						<div className="col-12 col-lg-6">
							<div className="card card--details">
								<div className="row">
									<div className="col-12 col-sm-5 col-lg-6 col-xl-5">
										<div className="card__cover">
											<img className="card__cover_img_deta" src={props.paths.poster_url + '' + props.episodedetail.episode_poster} alt="" />
										</div>
									</div>
									<div className="col-12 col-sm-7 col-lg-6 col-xl-7">
										<div className="card__content">
											<ul className="card__meta">
												<li><span>Director:</span>{props.episodedetail.director}</li>
												<li><span>Writer:</span>{props.episodedetail.writer}</li>
												<li><span>{props.episodedetail.starcast ? `Cast :` : null}</span> {props.episodedetail.starcast}</li>
												<li><span>Quality:</span> {props.episodedetail.serial_quality}</li>
												</ul>
										</div>
									</div>

								</div>
							</div>
						</div>

						<div className="col-12 col-lg-6">
							{Media ?
								<video
									style={{ backgroundColor: "#000",height:"370" }}
									className="col-12"
									controls
									controlsList="nodownload"
									// crossOrigin='true'
									playsInline
									onEnded={() => handleEnded()}
									poster={props.paths.banner_url + props.episodedetail.episode_banner}
									id="player"
									autoPlay={true}
								>
									{

										<source
											src={Montage_video}
											autoPlay
											type="video/mp4"
											size="720" />

									}

								
								
								</video>
								:
								<div>
									<video
										style={{ backgroundColor: "#000", }}
										className="col-12"
										controls
										autoPlay
										controlsList="nodownload"
										playsInline
										poster={props.paths.trailer_url + props.episodedetail.trailer}
										id="player"
										autoPlay={true}
									>
										{
											props.paths.trailer_url ?
												<source
													src={props.paths.trailer_url + props.episodedetail.trailer}
													autoPlay
													type="video/mp4"
													size="720" />
												: null
										}
									
									
									</video>
								</div>
							}
						</div>
						<div className="col-12">
							<div className="col-12  card__descriptionn">
								<div dangerouslySetInnerHTML={{ __html: props.episodedetail.about_episode }} />
							</div>
						</div>
					</div>
				</div>

			</section>
		</Fragment >
	)
}     