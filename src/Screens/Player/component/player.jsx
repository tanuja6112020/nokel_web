import React, { Fragment, useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import Montage_video from "../../../component/lottie/montage.mp4";
import { Slider, Direction,FormattedTime } from 'react-player-controls'
export default function Plan(props) {
	const [Media, setMedia] = useState(true);
	const [continueWactinggg, setContinueWacting] = useState(0)
	var [currenTime, setCurrentTime] = useState(0);
	var [intervalId, setintervalId] = useState(false);
	const [watchnow, setWatchnow] = useState([])
	const videoPlayer = useRef(null);
	const [url, seturl] = useState();
	const [playing, setplaying] = useState(true);
	const [controls, setcontrols] = useState(null);
	const [played, setplayed] = useState(0);
	const [loaded, setloaded] = useState(0);
	const [duration, setduration] = useState(0);

	var urlresult = [];
	var track = [];
	useEffect(() => {
		return () => {
			watchingmovie();
		}
	}, [])

	function handleEnded() {
		setMedia(false);
	}

	const ref = player => {
		try{		// player.seek(player.currentTime + 20);
		 console.log('player', props.continueWacting);
		 player.seekTo(props.continueWacting)
		}catch(error)
		{

		}
		//console.log('player',player.seekTo(5,'seconds'));
		//console.log('player',player.currentTime(5));
	}


	const handleDuration = async (duration) => {

		await localStorage.setItem('duration', duration);
		await localStorage.setItem('movie_id', props.moviedetail.movie_id);
		console.log('onDuration', duration)

	}


	async function watchingmovie() {

		const movie_id = await localStorage.getItem('movie_id');
		await localStorage.removeItem('movie_id');
		const vduration = parseInt(await localStorage.getItem('duration'));
		await localStorage.removeItem('duration');
		const vcurrenTime = parseInt(await localStorage.getItem('currenTime'));
		await localStorage.removeItem('currenTime');
		var params = {
			movie_id: movie_id,
			start_time: vcurrenTime,
			duration: vduration,
			device_type:'web',

		}
		props.continueWatching(params);
	}

	const handleProgress = async (state) => {
		
		await localStorage.setItem('currenTime', state.playedSeconds);
	}





	return (
		<Fragment>
			<div className="section">
				<div className="container">
					<div className="col-12" style={{
						display: "flex",
						flexDirection: "row", paddingTop: 7
					}}>

						<div className="col-11" style={{
						}}>
						</div>
						<button className="detail__btn  col-1"
							type="button"
							style={{
								height: 25,
								fontSize: 9,
								marginBottom: 5
							}}
							onClick={() => props.navToBack()}>
							{`Back`}
						</button>
					</div>
					<div className="col-12" style={{
						// paddingTop: 80,
					}}>

						{

							props.paths.movie_movies_url ?
								props.moviedetail.movie_file ?
									props.moviedetail.movie_file.map((item, index) => {
										var soruce = {
											'src': props.paths.movie_movies_url + item.movie_file,
											'type': "video/mp4"
										}

										urlresult.push(soruce);


									})
									: null
								: null
						}

						{props.moviedetail.movie_language ?
							props.moviedetail.movie_language.map((item, index) => {

								var soruce = {
									'kind': 'subtitles',
									'src': props.paths.language_file_url + item.language_file,
									'srcLang': 'en',
									default: true
								}

								track.push(soruce);
							})
							: null
						}

							{Media ?
								<video
									style={{ backgroundColor: "#000", }}
									className="col-12"
									controls
									controlsList="nodownload"
									// crossOrigin='true'
									playsInline
									onEnded={() => handleEnded()}
									id="player"
									autoPlay={true}
								>

									{

										<source
											src={Montage_video}
											autoPlay

											// src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
											type="video/mp4"
											size="720" />

									}

								
								</video>
								:
							
						<ReactPlayer
							ref={ref}
							className="col-12"
							style={{ backgroundColor: "#000", maxHeight: 470, minHeight: 470 }}
							width='100%'
							height='100%'
							url={urlresult}
							config={{
								file: {
									tracks:track,
									attributes: {
										controlsList: 'nodownload'  //<- this is the important bit
									}
								}
							}}
						
							playsinline
							playing={true}
							controls={true}
							onReady={() => console.log('onReady')}
							onStart={() => console.log('onStart')}
							// onPlay={this.handlePlay}
							//   onEnablePIP={this.handleEnablePIP}
							//   onDisablePIP={this.handleDisablePIP}
							//   onPause={this.handlePause}
							onBuffer={() => console.log('onBuffer')}
						
							onSeek={(seek) => {
								console.log("seek", seek);
								//Handler fors change in seekbar
								//videoPlayer.current.seek(seek);
							}}
							onSeeking={(seek) => {
								console.log("seeking", seek);
								//Handler fors change in seekbar
								//videoPlayer.current.seek(seek);
							}}
							//   onEnded={this.handleEnded}
							onError={e => console.log('onError', e)}
							onProgress={handleProgress}
							onDuration={handleDuration}	
							onLoad={(data)=>{
							
								console.log("data",data);
							}}
							
						  
							
						/>
						
						

						/* {<video
						style={{ backgroundColor: "#000", maxHeight: 470, minHeight: 470 }}
						className="col-12"
						controls
						ref={ref}
						//crossOrigin='true'
						// controlsList="nodownload"
						playsInline
						poster={props.paths.movie_poster_url + props.moviedetail.movie_poster}
						id="player"
						// onProgress={(e)=>{
						// 	console.log(e.nativeEvent)
						// 	console.log("e  dsdsf onprogress",e.target.currenttime)
						// 	// console.log("e  onprogress",e.currentTarget)
						// 	// console.log("e.type, e.loaded",e.type, e.loaded)
						// }}
						//onProgress={onProgress}
						// onLoad={onLoad}
						// onDuration={onDuration}
						// onDurationChange={onDurationChange}
						onPlay={onPlay}
						onPause={onPause}
						// paused = {this.state.paused}
						// onLoad = {this.handleLoad}
						onProgress={(e) => {
							
							//console.log("the",videoPlayer.current.getCurrentTime())
							console.log(e.nativeEvent)
							console.log(e.currentTime)
						}}
						onSeek ={ (seek) => {
							//Handler for change in seekbar
							videoPlayer.current.seek(seek);
						}}

						onLoadedMetadata= {async(e) => {
							console.log('e.target.duration: ', e.target.duration);
							await localStorage.setItem('duration',e.target.duration);
							await localStorage.setItem('movie_id',props.moviedetail.movie_id);
							
						}}

					>
						{
							props.paths.movie_movies_url ?
								props.moviedetail.movie_file ?
									props.moviedetail.movie_file.map((item, index) => {
										return (
											<source
												key={index}
												src={props.paths.movie_movies_url + item.movie_file}
												type="video/mp4"
												size="720" />
										)
									})
									: null
								: null
						}
						{props.moviedetail.movie_language ?
							props.moviedetail.movie_language.map((item, index) => {
								return (
									<track
										key={index}
										kind="captions"
										label={item.language}
										srcLang="en"
										src={props.paths.language_file_url + item.language_file}
										default />
								)
							})
							: null
						}
						< a href="/moviedetail" download>Download</a>
					</video>} */}



					</div>
				</div>
			</div>
		</Fragment>
	)
}     