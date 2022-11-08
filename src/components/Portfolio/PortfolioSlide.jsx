import React, { Component } from 'react'

export default class PortfolioSlide extends Component {
   componentDidMount(){
    const closeIcons=document.querySelectorAll('.closeIcon');
    const closeButtons=document.querySelectorAll('.closeButton');

    const slideCards=document.querySelectorAll('.slideCard');
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
    return (
        <>
         <div className='position-fixed d-none w-100 bg-black top-0 start-0 bg-opacity-50 slideCard'>
                <div className="slideWidth mx-auto py-5 my-5 rounded-3 text-center bg-white">
                    <div className='text-end me-5 text-site'>     
                         <i className="fa-regular fa-circle-xmark fa-2x closeIcon" ></i>
                    </div>
                    <div className="container-fluid">
                        <h2 className='fw-bolder fs-1 mb-3 text-uppercase'>img name</h2>
                        <span className='starIcon position-relative sectionStar'><i className="fa-solid fa-star text-white fa-2x"></i></span>
                        <div className='text-center my-5'>
                            <img src={this.props.img} alt="" className='w-65 rounded-3' />
                        </div>
                        <p className='text-black-50 w-75 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta inventore veritatis culpa, quaerat eligendi velit non odit aut doloribus! Optio eaque nesciunt, in illo cupiditate excepturi laudantium inventore, maxime ratione praesentium architecto sapiente. Nulla et porro commodi neque deleniti, aperiam nam dolorem minus hic expedita doloribus numquam itaque quidem dolor.</p>
                        <div className='text-center'>
                        <button className='rounded-3 p-2 px-3 bg-site text-white border-0 closeButton'> <i className="fa-solid fa-xmark me-1"></i> <span>Close Window</span> </button>
                        </div>
                    </div>
                </div>
         </div>
        </>
    )
  }
}
