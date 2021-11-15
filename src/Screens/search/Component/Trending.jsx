import React, { Fragment } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { useState } from 'react';
const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Trending(props) {

    const [newvalue,setnewvalue]=useState(props.value);

    async function handleSearchmovie(e)
    {
        e.preventDefault();
        props.setValue(newvalue);

    }
    return (
        <Fragment>
            <section className="home">

                <div className="header__auth" style={{ marginTop: 25, marginRight: 10 }}>
                    <form action="#" className="header__search" onSubmit={handleSearchmovie}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="header__search-input"
                            value={newvalue}
                            onChange={(e) => setnewvalue(e.target.value)}
                        />
                        <button className="header__search-button" type="button" onClick={(e)=>handleSearchmovie(e)}>
                            <i className="icon ion-ios-search"></i>
                        </button>
                        <button className="header__search-close" type="button">
                            <i className="icon ion-md-close"></i>
                        </button>
                    </form>
                </div>
                {/* <div className="owl-carousel home__bg">
                    <div className="item home__cover" data-bg="img/home/home__bg.jpg"></div>
                    <div className="item home__cover" data-bg="img/home/home__bg2.jpg"></div>
                    <div className="item home__cover" data-bg="img/home/home__bg3.jpg"></div>
                    <div className="item home__cover" data-bg="img/home/home__bg4.jpg"></div>
                    <div className="item home__cover" data-bg="img/home/home__bg5.jpg"></div>
                </div> */}

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="home__title text-lowercase" style={{ marginTop: 20 }}>Search Result</h1>
                            {/* <button className="home__nav home__nav--prev" type="button">
                                <i className="icon ion-ios-arrow-round-back"></i>
                            </button>
                            <button className="home__nav home__nav--next" type="button">
                                <i className="icon ion-ios-arrow-round-forward"></i>
                            </button> */}
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
                                            <span className=" fa fa-star checked  card__rate card__rate--green">{Trendingdata.movie_rating}</span>
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