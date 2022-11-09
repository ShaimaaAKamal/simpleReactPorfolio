import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <>
        <div className="parent mx-auto my-5 text-center" id='Portfolio'>
         <div className="container-fluid">
           <h2 className='fw-bolder fs-1 mb-3 text-uppercase'>Contact me</h2>
           <span className='starIcon position-relative sectionStar'><i className="fa-solid fa-star text-white fa-2x"></i></span>
           <div className='contactWidth mx-auto my-5'>
           <div className="my-3 borderBottom py-4 text-start">
                <small className='text-site mb-3 px-2 ms-1 d-none'>Name</small>
                <input type="text" className="form-control" id="name" placeholder="Name"/>
            </div>
            <div className="my-3 borderBottom py-4 text-start">
                <small className='text-site mb-3 px-2 d-none ms-1'>Email Address</small>
                <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                <li className='text-danger mt-2 ps-5 ms-1 d-none mb-0'>Not a valid Email Address</li>
            </div>
            <div className="my-3 borderBottom py-4 text-start">
                <small className='text-site mb-3 px-2 ms-1 d-none'>Phone Number</small>
                <input type="text" className="form-control" id="phone" placeholder="Phone Number"/>
            </div>
            <div className="my-3 borderBottom py-4 text-start">
                <small className='text-site mb-3 px-2 ms-1 d-none'>Message</small>
                <textarea className="form-control" id="Message" placeholder="Message" rows='8'/>
            </div>
            <div className='text-start my-4'>
                <button className='border-0 text-white bg-site py-3 px-4 rounded-3'>Send</button>
            </div>
           </div>
        </div>
        </div> 
        </>
    )
  }
}
