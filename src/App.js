import React, { Component } from 'react'
import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./components/Home/home";
import { Portfolio } from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
class App extends Component 
  {
    componentDidMount(){
      const navLinks=document.querySelectorAll('.nav-link');
      const Portfolio=document.querySelector('#Portfolio');
      const About=document.querySelector('#About')
      const Contact=document.querySelector('#Contact')
    //  console.log(About.offsetTop,Contact.offsetTop,Portfolio.offsetTop)
    window.addEventListener('scroll',function(e){
     const scrollVal=window.scrollY;
    if(scrollVal >= Portfolio.offsetTop && scrollVal < About.offsetTop){
      navLinks.forEach((link,index) => {
        (index === 0)?link.classList.add('active'):link.classList.remove('active');})
    }
    else if(scrollVal >= About.offsetTop && scrollVal < Contact.offsetTop){
      navLinks.forEach((link,index) => {
        (index === 1)?link.classList.add('active'):link.classList.remove('active');})
    }
    else if(scrollVal >= Contact.offsetTop){
      navLinks.forEach((link,index) => {
        (index === 2)?link.classList.add('active'):link.classList.remove('active');})
    } else {
      navLinks.forEach((link,index) => {
       link.classList.remove('active');})
    }


    })
  
    }
    render(){
      return (
        <div className="App">
          <Navbar/>
          <Home/>
          <Portfolio/>
          <About/>
          <Contact/>
        </div>
      );
    }

}

export default App;
