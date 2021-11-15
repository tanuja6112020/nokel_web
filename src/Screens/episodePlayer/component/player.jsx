import React, { Fragment, useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player'
import Montage_video from "../../../component/lottie/montage.mp4";

export default function Plan(props) {
	const [Media, setMedia] = useState(true);

	useEffect(() => {
		return () => {
			watchingmovie();
		}
	}, [])

	function handleEnded() {
		setMedia(false);
	}
	
	const ref = player => {
		console.log('player',player);
		try{		// player.seek(player.currentTime + 20);
			console.log('player', props.continueWatching);
			player.seekTo(props.continueWatching)
		   }catch(error)
		   {
             
		   }
	}
	
	
	const handleDuration = async (duration) => {
	
		await localStorage.setItem('duration',duration);
		await localStorage.setItem('serial_id',props.episodedetail.serial_id);
		await localStorage.setItem('episode_id',props.episodedetail.id);
	}

	async function watchingmovie()
	 {
		const serial_id = await localStorage.getItem('serial_id');
		const episode_id = await localStorage.getItem('episode_id');
		await localStorage.removeItem('serial_id');
		await localStorage.removeItem('episode_id');
		const vduration = parseInt(await localStorage.getItem('duration'));
		await localStorage.removeItem('duration');
		const vcurrenTime =parseInt(await localStorage.getItem('currenTime'));
		await localStorage.removeItem('currenTime');
		var params = {
			serial_id: serial_id,
			start_time: vcurrenTime,
			duration: vduration,
			episode_id:episode_id,
		}
		props.continueWatchingserial(params);
		
	}
	
	const handleProgress = async (state) => {
		await localStorage.setItem('currenTime',  state.playedSeconds);
	}
	
	return (
		<Fragment>
			<div className="section">
				<div className="container">
					<div className="col-12" style={{
						display:"flex",
						flexDirection:"row",paddingTop:7
					}}>

						<div className="col-11" style={{
						}}>
							</div>
						<button className="detail__btn  col-1"
							type="button"
							style={{
								height:25,
								fontSize:9,
								marginBottom:5
							}}
							onClick={() => props.navToBack()}>
							{`Back`}
						</button>
					</div>
					<div className="col-12" style={{
						// paddingTop: 80,
					}}>


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
							url={props.paths.episode_url + props.episodedetail.serial_episode}
							config={{
								file: {
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
							onSeek ={ (seek) => {
								console.log("seek",seek);
								//Handler fors change in seekbar
								//videoPlayer.current.seek(seek);
							}}
							onSeeking={ (seek) => {
								console.log("seeking",seek);
								//Handler fors change in seekbar
								//videoPlayer.current.seek(seek);
							}}
							//   onEnded={this.handleEnded}
							onError={e => console.log('onError', e)}
							onProgress={handleProgress}
							onDuration={handleDuration}
						/>
						
						/* {<video
							style={{ backgroundColor: "#000", maxHeight: 470, minHeight: 470 }}
							className="col-12"
							controls
							playsInline
							poster={props.paths.poster_url + props.episodedetail.episode_poster}
							id="player"
						>
							{
								props.paths.episode_url ?
								
												<source
													key={1}
													src={props.paths.episode_url + props.episodedetail.serial_episode}
													type="video/mp4"
													size="720" />
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