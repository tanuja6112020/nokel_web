import React, { useState, useEffect, Fragment } from 'react';
import EndPoints from '../utils/apiEndPoints';
import { apiCall } from '../utils/httpClient';
import { useHistory, useLocation } from 'react-router-dom';

export default function Header(props) {

    const history = useHistory();
    const location = useLocation();
    const [searchValue, setsearchValue] = useState('');
    const [auth, setauth] = useState(false)
    useEffect(() => {
        const authval = localStorage.getItem('AuthToken')
        if (authval) {
            setauth(true);
        }
    }, [])

    const mymobile = (e) => {
        e.preventDefault();
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }

    async function handleClick(e, link) {
        e.preventDefault();
        const movie_id = await localStorage.getItem('movie_id');
        const serial_id = await localStorage.getItem('serial_id');
        if (movie_id != null) {
            await localStorage.removeItem('movie_id');
            const vduration = parseInt(await localStorage.getItem('duration'));
            await localStorage.removeItem('duration');
            const vcurrenTime = parseInt(await localStorage.getItem('currenTime'));
            await localStorage.removeItem('currenTime');
            var params = {
                movie_id: movie_id,
                start_time: vcurrenTime,
                duration: vduration,
                device_type: 'web',
            }
            const response = await apiCall('post', EndPoints.CONTINUEWATCHING, params);
            window.location.href = link;

        } else if (serial_id != null) {
            await localStorage.removeItem('serial_id');
            const episode_id = await localStorage.getItem('episode_id');
            const vduration = parseInt(await localStorage.getItem('duration'));
            await localStorage.removeItem('episode_id');
            await localStorage.removeItem('duration');
            const vcurrenTime = parseInt(await localStorage.getItem('currenTime'));
            await localStorage.removeItem('currenTime');
            var params = {
                serial_id: serial_id,
                start_time: vcurrenTime,
                duration: vduration,
                episode_id: episode_id,
            }
            const response = await apiCall('post', EndPoints.CONTINUEWATCHINGSERIAL, params);
            window.location.href = link;
        } else {
            window.location.href = link;
        }
    }

    async function handleSearchmovie() {
        if (searchValue.length > 0) {
            history.push('/search', { value: searchValue })
        } else {
            history.push('/')
        }

    }
    return (
        <Fragment>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__content">

                                <a href="/" className="header__logo" onClick={(event) => handleClick(event, '/')}>
                                    <img src="img/logo.svg" alt="" />
                                </a>


                                <ul className="header__nav">

                                    <li className="header__nav-item">
                                        <a href="/" className="header__nav-link" onClick={(event) => handleClick(event, '/')}>Movies</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a href="/tvshows" className="header__nav-link" onClick={(event) => handleClick(event, '/tvshows')}>TV Shows</a>
                                    </li>
                                    {/* <li className="header__nav-item">
                                <a href="/livetv" className="header__nav-link">Live TV</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">Channels</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">People</a>
                            </li>
                            <li className="header__nav-item">
                                <a href="/" className="header__nav-link">News</a>
                            </li> */}

                                    {/* <li className="dropdown header__nav-item filters-navs">
                                <a className="dropdown-toggle header__nav-link header__nav-link--more" href="/" role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon ion-ios-menu"></i></a>
                                <ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">
                                    <li className="header__nav-item">
										<a className="dropdown-toggle header__nav-link text-lowercase" href="/" role="button" id="ByGenre" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">By Genre</a>
										<ul className="dropdown-menu header__dropdown-menu" aria-labelledby="ByGenre">
											<li><a href="/">Nokels TV</a></li>
											<li><a href="/">Teco Benson</a></li>
											<li><a href="/">Natasha Okpi</a></li>
											<li><a href="/">Uche Mooka</a></li>
										</ul>
									</li>
									<li className="header__nav-item">
										<a className="dropdown-toggle header__nav-link text-lowercase" href="/" role="button" id="ByProducer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">By Producer</a>
										<ul className="dropdown-menu header__dropdown-menu" aria-labelledby="ByProducer">
											<li><a href="/">Action</a></li>
											<li><a href="/">Comedy</a></li>
											<li><a href="/">Religious</a></li>
											<li><a href="/">Crime</a></li>
											<li><a href="/">Action</a></li>
											<li><a href="/">Etc</a></li>
										</ul>
									</li>
                                    
                                </ul>
                            </li> */}

                                </ul>


                                <div className="header__auth">
                                    {location.pathname != '/search' ?
                                        <form action="#" className="header__search" onSubmit={handleSearchmovie}>
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                className="header__search-input"
                                                value={searchValue}
                                                onChange={(e) => setsearchValue(e.target.value)}
                                            />
                                            <button className="header__search-button" type="button" onClick={() => handleSearchmovie()}>
                                                <i className="icon ion-ios-search"></i>
                                            </button>
                                            <button className="header__search-close" type="button">
                                                <i className="icon ion-md-close"></i>
                                            </button>
                                        </form>
                                        : null}
                                    <button className="header__search-btn" type="button">
                                        <i className="icon ion-ios-search"></i>
                                    </button>

                                    {/* <div className="dropdown header__lang">
                                <a className="dropdown-toggle header__nav-link" href="/" role="button" id="dropdownMenuLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</a>
                                <ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuLang">
                                    <li><a href="/">English</a></li>
                                    <li><a href="/">Spanish</a></li>
                                    <li><a href="/">Russian</a></li>
                                </ul>
                            </div> */}


                                    {
                                        (auth)
                                            ?
                                            /*  <span onClick={() => onLogout()} className="header__sign-in">
                                                 <i className="icon ion-ios-log-in"></i>
                                                 <span>sign out</span>
                                             </span> */
                                            <a href="/myprofile" className="header__sign-in">
                                                <i className="icon ion-ios-log-in"></i>
                                                <span>My Profile</span>
                                            </a>
                                            :
                                            <a href="/signin" className="header__sign-in">
                                                <i className="icon ion-ios-log-in"></i>
                                                <span>sign in</span>
                                            </a>
                                    }

                                </div>

                                <button className="header__btn" type="button" onClick={(e) => mymobile(e)}>

                                  <span></span>
                                  <span></span>
                                  <span></span>
                                        
                                    
                                </button>
                                
                            </div>
                           
                                           
                                    <div className="topnav">
                                        <div id="myLinks">
                                        <a href="/" className="header__nav-link" onClick={(event) => handleClick(event, '/')}>Movies</a>
                                        <a href="/tvshows" className="header__nav-link" onClick={(event) => handleClick(event, '/tvshows')}>TV Shows</a>
                                        </div>
                                    </div>          
                                      
                        </div>
                    </div>
                </div>
            </header>


        </Fragment>
    )

}