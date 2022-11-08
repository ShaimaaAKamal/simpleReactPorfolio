import React, { Component } from 'react';

export  class Home extends Component {
  render() {
    return (
        <>
        <div className='w-100 vh-100 bg-site d-flex align-items-center justify-content-center'>
           <div className='text-center'>
                <img src="http://routeegypt.com/start-react/assets/img/avataaars.svg" alt="avatar Photo" className='w-90' />
                <h1 className='text-uppercase text-white fw-bolder my-3 display-2'>Start react</h1>
                <span className='starIcon position-relative'><i class="fa-solid fa-star text-white fa-2x"></i></span>
                <div className='text-white mt-3 fs-4'>
                    <span>Graphic Artist - </span>
                    <span>Web Designer - </span>
                    <span>Illustrator</span>
                </div>
           </div>
        </div>
        </>
    )
  }
}
