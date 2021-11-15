import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import Montage_video from "../../../component/lottie/montage.mp4";

export default function Serial(props) {

	const [Media, setMedia] = useState(true);
	 var len = props.season.length;
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
								<h1 className="section__title">{props.serialdetail.serial_name}</h1>
							</div>
						</div>
						<div className="col-12 col-lg-6">
							<div className="card card--details">
								<div className="row">
									<div className="col-12 col-sm-5 col-lg-6 col-xl-5">
										<div className="card__cover">
											<img className="card__cover_img_deta" src={props.paths.poster_url + '' + props.serialdetail.serial_poster} alt="" />
											<span className="card__rate card__rate--green">{props.serialdetail.serial_rating}</span>
										</div>
									</div>
									<div className="col-12 col-sm-7 col-lg-6 col-xl-7">
										<div className="card__content">
											<ul className="card__meta">
												<li><span>Director:</span>{props.serialdetail.director}</li>
												<li><span>Writer:</span>{props.serialdetail.writer}</li>
												<li><span>{props.serialdetail.starcast ? `Cast :` : null}</span> {props.serialdetail.starcast}</li>
												<li><span>language:</span>{props.serialdetail.language_name}</li>
												<li><span>Quality:</span> {props.serialdetail.serial_quality}</li>
												<li><span>Category:</span> {props.serialdetail.category}</li>
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
									poster={props.paths.banner_url + props.serialdetail.serial_banner}
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
										poster={props.paths.trailer_url + props.serialdetail.trailer}
										id="player"
										autoPlay={true}
									>
										{
											props.paths.trailer_url ?
												<source
													src={props.paths.trailer_url + props.serialdetail.trailer}
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
								<div dangerouslySetInnerHTML={{ __html: props.serialdetail.about_serial }} />
							</div>
						</div>
					</div>
				</div>

			</section>

			<section className="content">
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-4 col-xl-12">
							<div className="row">
								<div className="col-12">
									<h3 className="section__title">Seasons</h3>
								</div>
								{props.season.map((movierelateds, keymovierelated) => (
									<div className="col-6 col-sm-4 col-lg-2" key={keymovierelated}>
										<div className="card">
											<div className="card__cover">
												<img className="card__cover_img_detail" src={props.paths.session_poster_url + '' + movierelateds.season_poster} alt="" />
												<a href={`/episodelist/${props.serialdetail.id}/${movierelateds.id}`} className="card__play">
													<i className="icon ion-ios-play"></i>
												</a>
												<span className="card__rate card__rate--green"></span>
											</div>
											<div className="card__content">
												<h2 className="card__title"><a href={`/serialdetail/${movierelateds.id}`}>Season - {len--}</a></h2>
												<h3 className="card__title"><a href={`/serialdetail/${movierelateds.id}`}>{movierelateds.title_season}</a></h3>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="row">

								<div className="col-12">
									<h3 className="section__title">Related Tv Shows</h3>
								</div>
								{props.serialrelated.map((movierelateds, keymovierelated) => (
									<div className="col-6 col-sm-4 col-lg-2" key={keymovierelated}>
										<div className="card">
											<div className="card__cover">
												<img className="card__cover_img_detail" src={props.paths.poster_url + '' + movierelateds.serial_poster} alt="" />
												<a href={`/serialdetail/${movierelateds.id}`} className="card__play">
													<i className="icon ion-ios-play"></i>
												</a>
												<span className="card__rate card__rate--green">{movierelateds.serial_rating}</span>
											</div>
											<div className="card__content">
												<h2 className="card__title"><a href={`/serialdetail/${movierelateds.id}`}>{movierelateds.serial_name}</a></h2>
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