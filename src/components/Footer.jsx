import React from 'react'
import swiggylogo from '../assets/swiggy-logo.svg'
import '../App.css'
function Footer() {
  return (
        <footer>
            <div>
            <img className='footerImg' src={swiggylogo} alt="photo" />
            <p> 	&#169;Create By Anshul Ojha</p>
            </div>
        </footer>
  )
}

export default Footer