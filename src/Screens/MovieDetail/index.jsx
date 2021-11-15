import React, { Fragment, useState, useEffect } from 'react';
import EndPoints from '../../Screens/utils/apiEndPoints';
import { apiCall } from '../../Screens/utils/httpClient';

import MovieDetail from './Component/MovieDetail';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { useParams, useHistory } from 'react-router-dom';
import { GlobalSpinnerContext } from '../../component/Context/GlobalSpinnerContext'

export default function Index({ }) {
  const { setIsLoading } = React.useContext(GlobalSpinnerContext)
  const history = useHistory();

  let { movieid } = useParams()
  const [moviedetail, setMoviedetail] = useState({})
  const [movierelated, setMovierelated] = useState([])
  const [comments, setComments] = useState([])
  const [paths, setpaths] = useState([])
  const [favourite, setfavourite] = useState('');

  const [review, setReview] = useState('');
  const [title, setReviewTitle] = useState('');
  const [rating, setRating] = useState(1);
  const [Auth, setAuth] = useState(null);
  const [userdata, setUserdata] = useState({});
  const [continueWacting, setContinueWacting] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    getmoviedetail()
  }, [])

  async function getmoviedetail() {
    const AuthData = await localStorage.getItem('AuthData')
    const userdata = JSON.parse(AuthData)
    setUserdata(userdata)
    const datas = {
      'movie_id': movieid,
    }
    try {
      const Auth = await localStorage.getItem('AuthToken');
      setAuth(Auth)
      const { data } = await apiCall('post', EndPoints.MOVIEDETAIL, datas);
      console.log("data",data);
      if (data.status === 200) {
        setIsLoading(false)
        setMoviedetail(data.data);
        setfavourite(data.data.like_movie)
        setMovierelated(data.data.movie_related);
        setComments(data.data.comments);
        setpaths(data.base_url);
        setContinueWacting(data.data.continue_watching.length>0?data.data.continue_watching[0].start_time:0);
      } else {
        setIsLoading(false)
        //alert(JSON.stringify(data))
      }

    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  async function saveRating() {
    setIsLoading(true)
    const datas = {
      'movie_id': movieid,
      'rating': rating,
      'review': review,
    }
    try {
      const { data } = await apiCall('post', EndPoints.SAVERATING, datas)
      if (data.status === 200) {
        setReviewTitle('')
        setReview('')
        getmoviedetail()
      } else {
        setIsLoading(false)
        alert(JSON.stringify('Review done Already'))
      }

    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  const ratingChanged = (rating) => {
    setRating(rating)
  }

  async function movielike(){
    var params = {
      movie_id: movieid,
      type_id: 1,
      video_pause_time: '',
    }

    try {
      const { data } = await apiCall('post', EndPoints.MOVIELIKES, params)
      if (data.status === 200) {}
    } catch (error) {
     // setIsLoading(false)
      console.log(error)
    }
  }

  function navToPlayer(item) {
    userdata?
    userdata.plan_status === 1 ?
      history.push('/Player', { moviedetail: moviedetail, paths: paths,continueWacting:continueWacting})
      :
      history.push('/Plan')
      :
      history.push('/Signin')
  }
  return (
    <Fragment>
      <Header />
      <MovieDetail
        moviedetail={moviedetail}
        setfavourite ={setfavourite}
        favourite={favourite}
        comments={comments}
        movierelated={movierelated}
        paths={paths}
        setReviewTitle={(event) => setReviewTitle(event.target.value)}
        setReview={(event) => setReview(event.target.value)}
        saveRating={saveRating}
        Auth={Auth}
        review={review}
        ratingChanged={ratingChanged}
        userdata={userdata}
        navToPlayer={navToPlayer}
        movielike={movielike}
      />
      <Footer />
    </Fragment>
  )
}     