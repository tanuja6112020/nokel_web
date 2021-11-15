import React, { Fragment } from 'react';
export default function TvshowsCategoryItem(props) {
    return (
        <Fragment>
            {console.log("props.categorydata",props.categorydata)}
            {props.categorydata.map((categorydataitem, key) => (
                // key === 0?
                
                <div className="content" key={key}>
                    <div className="content__head--title">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="home__title text-lowercase content__title custom__title_flex">
                                        <span>
                                            {categorydataitem.name}
                                        </span>
                                        <span><a href={`/tvshowslist/${categorydataitem.category_id}`}  className="section__view">See all</a></span>
                                    </h1>
                                    <button className="home__nav cc__nav--prev" type="button">
                                        <i className="icon ion-ios-arrow-round-back"></i>
                                    </button>
                                    <button className="home__nav cc__nav--next" type="button">
                                        <i className="icon ion-ios-arrow-round-forward"></i>
                                    </button>
                                </div>
                                <div className="col-12">
                                    <div className="owl-carousel cc__carousel home__carousel">
                                        {categorydataitem.data.map((categorydataitemlist, keycat) => (
                                            <div className="card card--big" key={keycat}>
                                                <div className="card__cover">
                                                    <img className="card__cover_img_home" src={props.posterpath+''+categorydataitemlist.post_poster} alt="" />
                                                    <a href={`/serialdetail/${categorydataitemlist.id}`}  className="card__play">
                                                        <i className="icon ion-ios-play"></i>
                                                    </a>
                                                    <span className=" fa fa-star checked  card__rate card__rate--green">{categorydataitemlist.like_movie==null?0:categorydataitemlist.like_movie}</span>
                                                </div>
                                                <div className="card__content">
                                                    <h3 className="card__title">
                                                        <a href={`/serialdetail/${categorydataitemlist.id}`} >{categorydataitemlist.title}</a></h3>
                                                    <span className="card__category">
                                                        <a href={`/serialdetail/${categorydataitemlist.id}`} >{categorydataitemlist.type_of_movi}</a>
                                                        <a href={`/serialdetail/${categorydataitemlist.id}`} >{categorydataitemlist.category}</a>
                                                        
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
               


            ))}
        </Fragment>
    );
}