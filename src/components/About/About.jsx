import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <>
                <div className='bg-site py-5 my-5' id='About'>
                    <div className="parent mx-auto py-5 text-center">
                         <h2 className='fw-bolder text-white fs-1 mb-3 text-uppercase'>About</h2>
                        <span className='starIcon position-relative starIcon'><i className="fa-solid fa-star text-white fa-2x"></i></span>
                         <div className="row gx-5 gy-4 mt-1 justify-content-lg-center">
                            <div className="col-lg-4">
                                <div className='text-white text-start fs-5 lh-l px-5 px-lg-0'>
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </div>
                            </div>
                            <div className="col-lg-4">
                                  <div className='text-white text-start fs-5 lh-l px-5 ps-lg-5 pe-lg-0'>
                                  You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                                  </div>
                            </div>
                         </div>
                    </div>
                </div>
        </>
    )
  }
}
