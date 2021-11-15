import React, { Fragment } from 'react';
export default function NewItemList(props) {
    return (
        <Fragment>
            <section style={{display:'none'}} className="content">
                <div className="content__head">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                <h2 className="content__title">New items</h2>


                                <ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">MOVIES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">TV SERIES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">LIVE TV</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">PEOPLE</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-5" role="tab" aria-controls="tab-5" aria-selected="false">NEWS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tab-6" role="tab" aria-controls="tab-6" aria-selected="false">SKITS</a>
                                    </li>
                                </ul>


                                <div className="content__mobile-tabs" id="content__mobile-tabs">
                                    <div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <input type="button" value="New releases" />
                                        <span></span>
                                    </div>
                                    <div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item"><a className="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">MOVIES</a></li>
                                            <li className="nav-item"><a className="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">TV SERIES</a></li>
                                            <li className="nav-item"><a className="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">LIVE TV</a></li>
                                            <li className="nav-item"><a className="nav-link" id="4-tab" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">PEOPLE</a></li>
                                            <li className="nav-item"><a className="nav-link" id="5-tab" data-toggle="tab" href="#tab-5" role="tab" aria-controls="tab-5" aria-selected="false">NEWS</a></li>
                                            <li className="nav-item"><a className="nav-link" id="6-tab" data-toggle="tab" href="#tab-6" role="tab" aria-controls="tab-6" aria-selected="false">SKITS</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
                            <div className="row">

                                {props.categorydata.map((categorydataitem, keycat) => (
                                    categorydataitem.data.map((categorydataitemlist, keyitem) => (
                                        <div className="col-6 col-sm-4 col-md-3 col-xl-2" key={keyitem}>
                                            <div className="card">
                                                <div className="card__cover">
                                                    <img src={categorydataitemlist.bgImage} alt="" />
                                                    <a href={`/moviedetail/${categorydataitemlist.id}`}  className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                    <span className="card__rate card__rate--green">8.4</span>
                                                </div>
                                                <div className="card__content">
                                                    <h3 className="card__title"><a href={`/moviedetail/${categorydataitemlist.id}`} >{categorydataitemlist.title}</a></h3>
                                                    <span className="card__category">
                                                        <a href={`/moviedetail/${categorydataitemlist.id}`} >{categorydataitemlist.type}</a>
                                                        <a href={`/moviedetail/${categorydataitemlist.id}`} >Triler</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ))}

                            </div>
                        </div>

                        <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
                            <div className="row">

                                {props.categorydata.map((categorydataitem, keycat) => (

                                    categorydataitem.data.map((categorydataitemlist, keyitem) => (


                                        <div className="col-6 col-sm-4 col-md-3 col-xl-2" key={keyitem+1}>
                                            <div className="card">
                                                <div className="card__cover">
                                                    <img src={categorydataitemlist.bgImage} alt="" />
                                                    <a href="/moviedetail" className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                    <span className="card__rate card__rate--green">8.4</span>
                                                </div>
                                                <div className="card__content">
                                                    <h3 className="card__title"><a href="/moviedetail">{categorydataitemlist.title}</a></h3>
                                                    <span className="card__category">
                                                        <a href="/moviedetail">{categorydataitemlist.type}</a>
                                                        <a href="/moviedetail">Triler</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>


                                    ))
                                ))}

                            </div>
                        </div>

                        <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
                            <div className="row">

                                {props.categorydata.map((categorydataitem, keycat) => (

                                    categorydataitem.data.map((categorydataitemlist, keyitem) => (


                                        <div className="col-6 col-sm-4 col-md-3 col-xl-2" key={keyitem+2}>
                                            <div className="card">
                                                <div className="card__cover">
                                                    <img src={categorydataitemlist.bgImage} alt="" />
                                                    <a href="/moviedetail" className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                    <span className="card__rate card__rate--green">8.4</span>
                                                </div>
                                                <div className="card__content">
                                                    <h3 className="card__title"><a href="/moviedetail">{categorydataitemlist.title}</a></h3>
                                                    <span className="card__category">
                                                        <a href="/moviedetail">{categorydataitemlist.type}</a>
                                                        <a href="/moviedetail">Triler</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>


                                    ))
                                ))}

                            </div>
                        </div>

                        <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="4-tab">
                            <div className="row">

                                {props.categorydata.map((categorydataitem, keycat) => (

                                    categorydataitem.data.map((categorydataitemlist, keyitem) => (


                                        <div className="col-6 col-sm-4 col-md-3 col-xl-2" key={keyitem+3}>
                                            <div className="card">
                                                <div className="card__cover">
                                                    <img src={categorydataitemlist.bgImage} alt="" />
                                                    <a href="/moviedetail" className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                    <span className="card__rate card__rate--green">8.4</span>
                                                </div>
                                                <div className="card__content">
                                                    <h3 className="card__title"><a href="/moviedetail">{categorydataitemlist.title}</a></h3>
                                                    <span className="card__category">
                                                        <a href="/moviedetail">{categorydataitemlist.type}</a>
                                                        <a href="/moviedetail">Triler</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>


                                    ))
                                ))}

                            </div>
                        </div>

                        <div className="tab-pane fade" id="tab-5" role="tabpanel" aria-labelledby="5-tab">
                            <div className="row">

                                {props.categorydata.map((categorydataitem, keycat) => (

                                    categorydataitem.data.map((categorydataitemlist, keyitem) => (


                                        <div className="col-6 col-sm-4 col-md-3 col-xl-2" key={keyitem+4}>
                                            <div className="card">
                                                <div className="card__cover">
                                                    <img src={categorydataitemlist.bgImage} alt="" />
                                                    <a href="/moviedetail" className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                    <span className="card__rate card__rate--green">8.4</span>
                                                </div>
                                                <div className="card__content">
                                                    <h3 className="card__title"><a href="/moviedetail">{categorydataitemlist.title}</a></h3>
                                                    <span className="card__category">
                                                        <a href="/moviedetail">{categorydataitemlist.type}</a>
                                                        <a href="/moviedetail">Triler</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>


                                    ))
                                ))}

                            </div>
                        </div>

                        <div className="tab-pane fade" id="tab-6" role="tabpanel" aria-labelledby="6-tab">
                            <div className="row">

                                {props.categorydata.map((categorydataitem, keycat) => (

                                    categorydataitem.data.map((categorydataitemlist, keyitem) => (


                                        <div className="col-6 col-sm-4 col-md-3 col-xl-2" key={keyitem+5}>
                                            <div className="card">
                                                <div className="card__cover">
                                                    {
                                                        console.log('categorydataitemlist', categorydataitemlist)
                                                    }
                                                    <img className="card__cover_img_home" src={categorydataitemlist.bgImage} alt="" />
                                                    <a href="/moviedetail" className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                    <span className="card__rate card__rate--green">8.4</span>
                                                </div>
                                                <div className="card__content">
                                                    <h3 className="card__title"><a href="/moviedetail">{categorydataitemlist.title}</a></h3>
                                                    <span className="card__category">
                                                        <a href="/moviedetail">{categorydataitemlist.type}</a>
                                                        <a href="/moviedetail">Triler</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>


                                    ))
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </section>




            <section className="section section--bg" data-bg="img/section/section.jpg">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <div className="section__title-wrap">
                                <h2 className="section__title section__title--carousel">Expected premiere</h2>
                                <div className="section__nav-wrap">
                                    <a href="/List" className="section__view">View All</a>
                                    <button className="section__nav section__nav--prev" type="button" data-nav="#carousel1">
                                        <i className="icon ion-ios-arrow-back"></i>
                                    </button>
                                    <button className="section__nav section__nav--next" type="button" data-nav="#carousel1">
                                        <i className="icon ion-ios-arrow-forward"></i>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="col-12">
                            <div className="owl-carousel section__carousel" id="carousel1">

                                {props.trendingdata.map((Trendingdata, key) => (

                                    <div className="card card--big" key={key}>
                                        <div className="card__cover">
                                        <img src={props.posterpath+''+Trendingdata.movie_poster} alt="" />
                                            <a href="/moviedetail" className="card__play">
                                                <i className="icon ion-ios-play"></i>
                                            </a>
                                            <span className="card__rate card__rate--green">{Trendingdata.like_movie}</span>
                                        </div>
                                        <div className="card__content">
                                            <h3 className="card__title"><a href="/moviedetail">{Trendingdata.movie_name}</a></h3>
                                            <span className="card__category">
                                            <a href="/moviedetail">{Trendingdata.type_of_movi}</a>
                                                <a href="/moviedetail">{Trendingdata.category}</a>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section__title"><b>NokelsTV</b> – Best Place for Movies</h2>
                            <p className="section__text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of <b>using Lorem</b> Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                            <p className="section__text">Content here, content here, making it look like <a href="/moviedetail">readable</a> English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>

    );
}