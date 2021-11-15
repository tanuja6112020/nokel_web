import React, { Fragment } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);
export default function Trending(props) {
    return (
        <Fragment>
            <section className="home">
                {/* <div className="owl-carousel home__bg">
                    <div className="item home__cover" data-bg="img/home/home__bg.jpg"></div>
                    <div className="item home__cover" data-bg="img/home/home__bg2.jpg"></div>
                    <div className="item home__cover" data-bg="img/home/home__bg3.jpg"></div>
                    <div className="item home__cover" data-bg="img/home/home__bg4.jpg"></div>
                    <div className="item home__cover" data-bg="img/home/home__bg5.jpg"></div>
                </div> */}
                 <AutoplaySlider // play={true}
                       // cancelOnInteraction={false} // should stop playing on user interaction
                        play={true}
                        cancelOnInteraction={false} 
                        interval={5000}
                        bullets={false}
                        infinite={true}
                        organicArrows={false}
                        >
                            
                {props.banner.map((banner, key) => (
                    <div data-src={props.baseurl.dashboard_banner_url+banner.banner_image} />
                    ))} 
            </AutoplaySlider>
                <div className="container">
                    <div className="row">
                    {
                        
                        props.continueWatch.length>0?                      
                        <div className="col-12">
                       <div className="col-12">
                            <h1 className="home__title text-lowercase"  style={{marginTop: 20}}>Continue Watching</h1>
                            <button className="home__nav home__nav--prev" type="button">
                                <i className="icon ion-ios-arrow-round-back"></i>
                            </button>
                            <button className="home__nav home__nav--next" type="button">
                                <i className="icon ion-ios-arrow-round-forward"></i>
                            </button>
                        </div>
                         <div className="col-12">
                         <div className="owl-carousel home__carousel">
                             {props.continueWatch.map((Trendingdata, key) => (
                               
                                 <div className="card card--big" key={key}>
                                     <div className="card__cover">
                                         <img className="card__cover_img_home" src={props.baseurl.episode_url + '' + Trendingdata.episode_poster} alt="" />
                                         <a href={`/episodedetail/${Trendingdata.episode_id}/${Trendingdata.id}`} className="card__play">
                                             <i className="icon ion-ios-play"></i>
                                         </a>
                                         <span className=" fa fa-star checked  card__rate card__rate--green">{Trendingdata.like_movie}</span>
                                     </div>
                                     <div className="card__content">
                                         <h3 className="card__title">
                                             <a href={`/episodedetail/${Trendingdata.episode_id}/${Trendingdata.id}`}>{Trendingdata.serial_name}</a></h3>
                            
                                         <span className="card__category">
                                             <a href={`/episodedetail/${Trendingdata.episode_id}/${Trendingdata.id}`}>{Trendingdata.type_of_movi}</a>
                                             <a href={`/episodedetail/${Trendingdata.episode_id}/${Trendingdata.id}`}>{Trendingdata.category}</a>
                                             <a href={`/episodedetail/${Trendingdata.episode_id}/${Trendingdata.id}`}>Episode -{Trendingdata.episode_no}</a>
                                         </span>
                                     </div>
                                     <div className="w3-light-grey" style={{backgroundColor:"grey",borderRadius:10,marginTop:5}}>
                                     <div className="w3-grey" style={{height:"1%",width:parseInt(Trendingdata.start_time*100/Trendingdata.duration)+"%",backgroundColor:"11bfbe"}}></div>
                                    </div>
                                 </div>
                             ))}
                         </div>
                     </div>
                     </div>
                        :null
                    }
                        <div className="col-12">
                            <h1 className="home__title text-lowercase" style={{marginTop: 20}}>Trending</h1>
                            <button className="home__nav home__nav--prev" type="button">
                                <i className="icon ion-ios-arrow-round-back"></i>
                            </button>
                            <button className="home__nav home__nav--next" type="button">
                                <i className="icon ion-ios-arrow-round-forward"></i>
                            </button>
                        </div>
                        <div className="col-12">
                            <div className="owl-carousel home__carousel">
                                {console.log("props.trendingdata",props.trendingdata)}
                                {props.trendingdata.map((Trendingdata, key) => (
                                    <div className="card card--big" key={key}>
                                        <div className="card__cover">
                                            <img className="card__cover_img_home" src={props.posterpath + '' + Trendingdata.post_poster} alt="" />
                                            <a href={`/serialdetail/${Trendingdata.id}`} className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                            <span className=" fa fa-star checked  card__rate card__rate--green">{Trendingdata.like_movie==null?0:Trendingdata.like_movie}</span>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title">
                                                <a href={`/serialdetail/${Trendingdata.id}`}>{Trendingdata.title}</a></h3>
                                            <span className="card__category">
                                                <a href={`/serialdetail/${Trendingdata.id}`}>{Trendingdata.type_of_movi}</a>
                                                <a href={`/serialdetail/${Trendingdata.id}`}>{Trendingdata.category}</a>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Fragment>

    );
}