import React, { Fragment } from 'react';

export default function MovieDetail(props) {
	return (
		<Fragment>
			<section className="section section--first section--bg" data-bg="img/section/section.jpg">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="section__wrap">
								<h2 className="section__title">Movies</h2>
								{/* <ul className="breadcrumb">
									<li className="breadcrumb__item"><a >Home</a></li>
									<li className="breadcrumb__item breadcrumb__item--active">Catalog</li>
								</ul> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="catalog">
				<div className="container">
					<div className="row">
						{
							props.dataArray.map((item,index) => {
								return (
									<div key={index} className="col-6 col-sm-4 col-md-3 col-xl-2">
										<div className="card">
											<div className="card__cover">
												<img className="card__cover_img_detail" src={props.moviePosterUrl + item.movie_poster} alt="" />
												<a href={`/moviedetail/${item.id}`} className="card__play">
													<i className="icon ion-ios-play" />
												</a>
					
												<span className=" fa fa-star checked  card__rate card__rate--green">{item.movie_rating}</span>
											</div>
											<div className="card__content">
												<h3 className="card__title"><a href={`/moviedetail/${item.id}`}>{item.movie_name}</a></h3>
												<span className="card__category">
													<a href={`/moviedetail/${item.id}`}>{item.type_of_movi}</a>
													<a href={`/moviedetail/${item.id}`}>{item.category}</a>
												</span>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
			

		</Fragment>
	)
}     