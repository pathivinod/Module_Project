import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Background from './Components/Background/Background.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Reviews from './Components/Reviews/Reviews.jsx'
import Contact from './Components/Contacts/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Reviews' title='What Student Says'/>
        <Reviews/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
