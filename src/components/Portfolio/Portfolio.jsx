import React, { Component } from 'react'
import { images } from '../../js/script';
import PortfolioItem from './portfolioItem';

export  class Portfolio extends Component {
  render() {
    return (
        <>

        <div className="parent mx-auto my-5 text-center">
         <div className="container-fluid">
           <h2 className='fw-bolder fs-1 mb-3'>Portfolio</h2>
           <span className='starIcon position-relative sectionStar'><i className="fa-solid fa-star text-white fa-2x"></i></span>
           <div className="row g-4 my-5">

            {
                images.map((img,index) => <PortfolioItem key={index} img={img}/>)
            }

           </div>
         </div>
         </div>
        </>
    )
  }
}
