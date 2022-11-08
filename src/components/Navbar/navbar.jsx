import React, { Component } from 'react'

export  class Navbar extends Component {
  render() {
    return (
        <>
        <div className='bg-nav position-fixed top-0 w-100 '>
         <div className="parent mx-auto">
         <nav className="navbar navbar-expand-lg ">
           <div className="container">
                <a className="navbar-brand" href="#">Start react</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <div className='text-white d-flex align-items-center menuIcon small'><span className='fw-semibold'>menu</span> <i className="fa-solid fa-bars ms-1 fa-xs"></i></div>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
         </div>
        </div>
        </>
    )
  }
}
