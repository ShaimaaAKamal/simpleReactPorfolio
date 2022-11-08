import React, { Component } from 'react'
import PortfolioSlide from './PortfolioSlide';
export default class PortfolioItem extends Component {
  componentDidMount(){
    const plusIcons=document.querySelectorAll('.plusIcon');
    plusIcons.forEach((plusIcon,index)=>{
     plusIcon.addEventListener('click',function(){
      const slideCards=(document.querySelectorAll('.slideCard'));
      slideCards[index].classList.remove('d-none');
    })
    })
   
  }
  render() {
    return (
        <>
         <PortfolioSlide img={this.props.img}/>
         <div className="col-lg-4 col-md-6">
                <div className='position-relative rouneded-3 portfolioCardParent'>
                   <img src={this.props.img} alt="" className='w-100 rounded-3'  />
                   <div className='position-absolute rounded-3 portfolioCard top-0 bottom-0 bg-site start-0 end-0 d-flex justify-content-center align-items-center'>
                   <i className="fa-solid fa-plus text-white fa-4x plusIcon "></i>
                   </div>
                </div>
            </div>
        </>
    )
  }
}
