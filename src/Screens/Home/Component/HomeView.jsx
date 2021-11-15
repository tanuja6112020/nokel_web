import React, { Fragment} from 'react';
import HomeCategoryItem from './HomeCategoryItem';
import Trending from './Trending';
import NewItemList from './NewItemList';



const dataArray = {}


const image = true;
const color = "#fffff";
export default function Home(props) {
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
            favourite={props.favourite}
          />

          <HomeCategoryItem
            dataArray={dataArray}
            backgroundType={image}
            background={color} 
            categorydata={props.categorydata}
            posterpath={props.posterpath}
          />

         {/* <NewItemList
            dataArray={dataArray}
            backgroundType={image}
            background={color} 
            categorydata={props.categorydata}
            trendingdata={props.trendingdata}
            posterpath={props.posterpath}
            
          /> */}
          
          
        </Fragment>
   )
}     