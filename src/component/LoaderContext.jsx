import React, { useContext, Fragment } from 'react'
import { GlobalSpinnerContext } from './Context/GlobalSpinnerContext'
import './loader.css'

export default function Loader() {
  const { isLoading } = useContext(GlobalSpinnerContext)
  return isLoading ? (
    <Fragment>
      <center>
        <div className="mfp-content loaderimage overhiden">
          <img className="profile_size" src='img/loader.gif' alt="loader" />
        </div>
      </center> 
    </Fragment >
  ) : null
}
