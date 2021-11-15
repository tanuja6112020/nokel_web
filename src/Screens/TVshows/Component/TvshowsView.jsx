import React, { Fragment} from 'react';
import TvCategoryItem from './TvshowsCategoryItem';
import Trending from './Trending';



const dataArray = {}


const image = true;
const color = "#fffff";
export default function Tvshows(props) {
 return (
        <Fragment> 

          <Trending
            dataArray={dataArray}
            backgroundType={image}
            background={color} 
            trendingdata={props.trendingdata}
            posterpath={props.posterpath}
            banner={props.banner}
            baseurl={props.baseurl}
            continueWatch={props.continueWatch}
          />

          <TvCategoryItem
            dataArray={dataArray}
            backgroundType={image}
            background={color} 
            categorydata={props.categorydata}
            posterpath={props.posterpath}
          />
        </Fragment>
   )
}     