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
                {props.banner.length > 0 ?
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
                            <div data-src={props.baseurl.dashboard_banner_url + banner.banner_image} />
                        ))}
                    </AutoplaySlider>
                    : null
                }

                <div className="container">
                    <div className="row">
                        {

                            props.favourite.length > 0 ?
                                <div className="col-12">
                                    <div className="col-12">
                                        <h1 className="home__title text-lowercase" style={{ marginTop: 20 }}>Favourite List</h1>
                                        <button className="home__nav home__nav--prev" type="button">
                                            <i className="icon ion-ios-arrow-round-back"></i>
                                        </button>
                                        <button className="home__nav home__nav--next" type="button">
                                            <i className="icon ion-ios-arrow-round-forward"></i>
                                        </button>
                                    </div>
                                    <div className="col-12">
                                        <div className="owl-carousel home__carousel">
                                            {props.favourite.map((favourite, key) => (
                                                <div className="card card--big" key={key}>
                                                    <div className="card__cover">
                                                        <img className="card__cover_img_home" src={props.posterpath + '' + favourite.movie_poster} alt="" />
                                                        <a href={`/moviedetail/${favourite.movie_id}`} className="card__play">
                                                            <i className="icon ion-ios-play"></i>
                                                        </a>
                                                        <span className="fa fa-star checked card__rate card__rate--green ">{favourite.like_movie}</span>
                                                    </div>
                                                    <div className="card__content">
                                                        <h3 className="card__title">
                                                            <a href={`/moviedetail/${favourite.movie_id}`}>{favourite.movie_name}</a></h3>
                                                        <span className="card__category">
                                                            <a href={`/moviedetail/${favourite.movie_id}`}>{favourite.type_of_movi}</a>
                                                            <a href={`/moviedetail/${favourite.movie_id}`}>{favourite.category}</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                : null
                        }

                        {

                            props.continueWatch.length > 0 ?
                                <div className="col-12">
                                    <div className="col-12">
                                        <h1 className="home__title text-lowercase" style={{ marginTop: 20 }}>Continue Watching</h1>
                                        <button className="home__nav home__nav--prev" type="button">
                                            <i className="icon ion-ios-arrow-round-back"></i>
                                        </button>
                                        <button className="home__nav home__nav--next" type="button">
                                            <i className="icon ion-ios-arrow-round-forward"></i>
                                        </button>
                                    </div>
                                    <div className="col-12">
                                        <div className="owl-carousel home__carousel">
                                            {props.continueWatch.map((continueWatch, key) => (
                                                <div className="card card--big" key={key}>
                                                    <div className="card__cover">
                                                        <img className="card__cover_img_home" src={props.posterpath + '' + continueWatch.movie_poster} alt="" />
                                                        <a href={`/moviedetail/${continueWatch.movie_id}`} className="card__play">
                                                            <i className="icon ion-ios-play"></i>
                                                        </a>
                                                        <span className=" fa fa-star checked  card__rate card__rate--green">{continueWatch.movie_rating}</span>
                                                    </div>
                                                    <div className="card__content">
                                                        <h3 className="card__title">
                                                            <a href={`/moviedetail/${continueWatch.movie_id}`}>{continueWatch.movie_name}</a></h3>
                                                        <span className="card__category">
                                                            <a href={`/moviedetail/${continueWatch.movie_id}`}>{continueWatch.type_of_movi}</a>
                                                            <a href={`/moviedetail/${continueWatch.movie_id}`}>{continueWatch.category}</a>
                                                        </span>
                                                    </div>
                                                    <div className="w3-light-grey" style={{ backgroundColor: "grey", borderRadius: 10, marginTop: 5 }}>
                                                        <div className="w3-grey" style={{ height: "1%", marginBottom: 10, width: parseInt(continueWatch.start_time * 100 / continueWatch.duration) + "%", backgroundColor: "11bfbe" }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                : null
                        }
                        <div className="col-12">
                            <h1 className="home__title text-lowercase" style={{ marginTop: 20 }}>Trending</h1>
                            <button className="home__nav home__nav--prev" type="button">
                                <i className="icon ion-ios-arrow-round-back"></i>
                            </button>
                            <button className="home__nav home__nav--next" type="button">
                                <i className="icon ion-ios-arrow-round-forward"></i>
                            </button>
                        </div>
                        <div className="col-12">
                            <div className="owl-carousel home__carousel">
                                {props.trendingdata.map((Trendingdata, key) => (
                                    <div className="card card--big" key={key}>
                                        <div className="card__cover">
                                            <img className="card__cover_img_home" src={props.posterpath + '' + Trendingdata.movie_poster} alt="" />
                                            <a href={`/moviedetail/${Trendingdata.id}`} className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                            <span className="fa fa-star checked  card__rate card__rate--green">{Trendingdata.movie_rating}</span>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title">
                                                <a href={`/moviedetail/${Trendingdata.id}`}>{Trendingdata.movie_name}</a></h3>
                                            <span className="card__category">
                                                <a href={`/moviedetail/${Trendingdata.id}`}>{Trendingdata.type_of_movi}</a>
                                                <a href={`/moviedetail/${Trendingdata.id}`}>{Trendingdata.category}</a>
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