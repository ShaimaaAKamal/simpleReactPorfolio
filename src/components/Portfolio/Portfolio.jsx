import React, { Component } from 'react'
import { images } from '../../js/script';
import PortfolioItem from './portfolioItem';

export  class Portfolio extends Component {
  componentDidMount(){
    const closeIcons=document.querySelectorAll('.closeIcon');
    const portfolioCards=document.querySelectorAll('.portfolioCard');
    const closeButtons=document.querySelectorAll('.closeButton');
    const slideCards=document.querySelectorAll('.slideCard');
  
  portfolioCards.forEach((portfolioCard,index)=>{
     portfolioCard.addEventListener('click',function(){
      slideCards[index].tabIndex=-1;
      slideCards[index].focus();
      slideCards[index].classList.remove('d-none');
    })
    })

    closeIcons.forEach((icon,index) => {
        icon.addEventListener('click',function(){
            slideCards[index].classList.add('d-none');
        })
    })
    closeButtons.forEach((btn,index) => {
        btn.addEventListener('click',function(){
            slideCards[index].classList.add('d-none');
        })
    })

  }
  render() {
    const names=['log cabin','tasty cake','circus tent','controller','locked safe','submarine']
    return (
        <>

        <div className="parent mx-auto my-5 text-center">
         <div className="container-fluid">
           <h2 className='fw-bolder fs-1 mb-3'>Portfolio</h2>
           <span className='starIcon position-relative sectionStar'><i className="fa-solid fa-star text-white fa-2x"></i></span>
           <div className="row g-4 my-5">

            {
                images.map((img,index) => <PortfolioItem key={index} img={img} name={names[index]}/>)
            }

           </div>
         </div>
         </div>
        </>
    )
  }
}
