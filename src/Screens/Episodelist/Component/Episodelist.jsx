import React, { Fragment } from 'react';
export default function LiveTv(props) {
  return (
    <Fragment><section className="home">
      <div className="owl-carousel home__bg">
        {/* {props.bannerData.map((bannerData, index) => {
          return (
            <div key={index} className="item home__cover" data-bg={props.bannerpath+bannerData.banner_image}></div>
          )

        })} */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
                  <h1 className="home__title text-lowercase"></h1>
                  <button className="home__nav home__nav--prev" type="button">
                      <i className="icon ion-ios-arrow-round-back"></i>
                  </button>
                  <button className="home__nav home__nav--next" type="button">
                      <i className="icon ion-ios-arrow-round-forward"></i>
                  </button>
              </div>
          <div className="col-12">
                  <div className="owl-carousel home__carousel">
                      {props.episodedata.map((episodedata, key) => (
                          <div className="card card--big" key={key}>
                             
                              <div className="card__cover">
                                  <img className="card__cover_img_home" src={props.baseurl.poster_url + '' + episodedata.episode_poster} alt="" />
                                   <a href={`/episodedetail/${episodedata.id}/${episodedata.serial_id}`} className="card__play">
                                      <i className="icon ion-ios-play"></i>
                                  </a> 
                                {/* <span className="card__rate card__rate--green">Episode</span>  */}
                              </div>
                              <div className="card__content">
                                  <h3 className="card__title">
                                  <a href={`/episodedetail/${episodedata.id}/${episodedata.serial_id}`}>Episode-{episodedata.episode_no}</a></h3>
                                  <span className="card__category">
                                      {/* <a href={`/episodedetail/${episodedata.id}`}>{episodedata.type_of_movi}</a>
                                      <a href={`/episodedetail/${episodedata.id}`}>{episodedata.category}</a>  */}
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
  )
}     