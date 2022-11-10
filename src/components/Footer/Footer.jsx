import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <>
        <div className='bg-nav py-5'>
           <div className='parent mx-auto pt-5'>
              <div className="row">
                <div className="col-lg-4">
                  <div className='text-white text-center'>
                    <h3 className=' mb-4'>LOCATION</h3>
                    <p className='mb-1 fs-5'>2215 John Daniel Drive</p>
                    <p className='mb-0 fs-5'>Clark, MO 65243</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className='text-white text-center'>
                    <h3 className='mb-4'>AROUND THE WEB</h3>
                    <div className='socials'>
                       <span className='mx-2'><i className="fa-brands fa-facebook-f rounded-circle border-2 border border-white p-3"></i></span>
                       <span className='mx-2'><i className="fa-brands fa-twitter  rounded-circle border border-2 border-white  p-3"></i></span>
                       <span className='mx-2'><i className="fa-brands fa-linkedin-in rounded-circle border border-2 border-white p-3"></i></span>
                       <span className='mx-2'><i className="fa-brands fa-dribbble  rounded-circle border border-2 border-white p-3"></i></span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className='text-white text-center'>
                    <h3 className='mb-4'>ABOUT FREELANCER</h3>
                    <p className='mb-1 fs-5 px-5'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
        <div className='text-center text-white bg-bk py-4 small'>
        Copyright © Your Website 2021 
        </div>
        </>
    )
  }
}
