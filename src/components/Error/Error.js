import React from 'react'
import {useRouteError} from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
    console.log(err.error)
    const {status} = err
  return (
    <div style={{display:"flex"}}>
      <h1>Oops!</h1>
      <h2>Something went wrong</h2>
      <p>{status +" : " +err.statusText}</p>
    </div>
  );
}

export default Error
