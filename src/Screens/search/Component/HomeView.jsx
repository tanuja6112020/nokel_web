import React, { Fragment} from 'react';
import Trending from './Trending';



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
            setValue={props.setValue}
            value={props.value}
          />
        </Fragment>
   )
}     