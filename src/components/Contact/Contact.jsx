import React, { Component } from 'react'
import { Validation } from '../../js/modules/validate.js';
import { General } from '../../js/modules/general.js';
const validate=new Validation();
const general =new General();

export default class Contact extends Component {
  componentDidMount(){
        const inputs=document.querySelectorAll('.form-control');
        const invalidEmail=document.querySelector('#invalidEmail');
        const invalidPhone=document.querySelector('#invalidPhone');
        inputs.forEach(input =>{
            const labelElement=input.previousElementSibling;
            input.addEventListener('keyup',function(e){
                (input.value !== '')?general.showlabel(labelElement):general.hideLabel(labelElement);
                switch(input.id){
                    case 'email':
                        (validate.validateMail(input.value) || input.value === '')?invalidEmail.classList.add('d-none'):invalidEmail.classList.remove('d-none');
                         break;
                    case 'phone':
                            (validate.validatePhone(input.value) || input.value === '')?invalidPhone.classList.add('d-none'):invalidPhone.classList.remove('d-none');
                             break;
                }  })
            input.addEventListener('blur',function(e){
                (input.value !== '')? labelElement.style.color='#1a1a1a':general.hideLabel(labelElement) })
            input.addEventListener('focus',function(e){
                (input.value !== '')?labelElement.style.color='#1CBB9D':general.hideLabel(labelElement) })
        })

    }

  render() {
    return (
        <>
        <div className="parent mx-auto my-5 py-5 text-center" id='Contact'>
         <div className="container-fluid py-5">
           <h2 className='fw-bolder fs-1 mb-3 text-uppercase'>Contact me</h2>
           <span className='starIcon position-relative sectionStar'><i className="fa-solid fa-star text-white fa-2x"></i></span>
           <div className='contactWidth mx-auto my-5'>
           <div className="my-3 borderBottom py-4 text-start">
                <small className='text-site px-2 ms-1 label'>Name</small>
                <input type="text" className="form-control" id="name" placeholder="Name"/>
            </div>
            <div className="my-3 borderBottom py-4 text-start">
                <small className='text-site  px-2 label ms-1'>Email Address</small>
                <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                <li className='text-danger mt-2 ps-5 ms-1 d-none mb-0' id='invalidEmail'>Not a valid Email Address</li>
            </div>
            <div className="my-3 borderBottom py-4 text-start">
                <small className='text-site  px-2 ms-1 label'>Phone Number</small>
                <input type="text" className="form-control" id="phone" placeholder="Phone Number"/>
                <li className='text-danger mt-2 ps-5 ms-1 d-none mb-0' id='invalidPhone'>Not a valid Phone Number</li>
            </div>
            <div className="my-3 borderBottom py-4 text-start">
                <small className='text-site  px-2 ms-1 label'>Message</small>
                <textarea className="form-control" id="Message" placeholder="Message" rows='8'/>
            </div>
            <div className='text-start my-4'>
                <button className='border-0 text-white bg-site py-3 px-4 rounded-3' id='sendBtn'>Send</button>
            </div>
           </div>
        </div>
        </div> 
        </>
    )
  }
}
