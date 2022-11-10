import React, { Component } from 'react'
import { Navbar } from "./components/Navbar/navbar";
import { Home } from "./components/Home/home";
import { Portfolio } from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';
class App extends Component 
  {
    componentDidMount(){
      const self=this;
      const navLinks=document.querySelectorAll('.nav-link');
        navLinks.forEach((link,index)=>{
          link.addEventListener('click',function(e){
            self.activeLink(index);
          })
        })

        this.scrollEvent(self,navLinks);  
    }

    scrollEvent(self,navLinks){
      const Portfolio=document.querySelector('#Portfolio');
      const About=document.querySelector('#About')
      const Contact=document.querySelector('#Contact')
      window.addEventListener('scroll',function(){
        const scrollVal=Math.ceil(window.scrollY);
        const nav=document.querySelector('.bg-nav');
        (scrollVal >= 100)? nav.classList.remove('py-3'): nav.classList.add('py-3');
       if(scrollVal >= Portfolio.offsetTop && scrollVal < About.offsetTop){
         self.activeLink(0);
       }
       else if(scrollVal >= About.offsetTop && scrollVal < Contact.offsetTop){
         self.activeLink(1)
       }
       else if(scrollVal >= Contact.offsetTop){
         self.activeLink(2);
       } else {
         navLinks.forEach((link,index) => {
          link.classList.remove('active');})
       }
       })
    }

    activeLink(ind){
      const navLinks=document.querySelectorAll('.nav-link');
      navLinks.forEach((link,index) => {
        (index === ind)?link.classList.add('active'):link.classList.remove('active');})
    }
    render(){
      return (
        <div className="App">
          <Navbar/>
          <Home/>
          <Portfolio/>
          <About/>
          <Contact/>
          <Footer/>
        </div>
      );
    }

}

export default App;
