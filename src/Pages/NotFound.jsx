import React from 'react'
import Sanya from './assets/sanya.png'
const NotFound = () => {
  return (
    <div>
        <h1>Page not found</h1>
        <img className='not-found-sanya' src={Sanya} alt="" width={800} height={800}/>
    </div>
    
  )
}

export default NotFound