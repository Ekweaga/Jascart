import React from 'react';
import Contact from './contact';
import './footer.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';


const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    <><div className='bottom'>
      <div className='bot1'>
        <h3>
          JASCART
        </h3>
        <section>Gadgets Our Hold</section>
      </div>
      <div data-aos="fade-in" className='bot2'>
        <p>
          Whether you are new here or just want to partner with us, we are glad you are here. Stay informed of Our Special offers
        </p>
        <div>
          <Contact />
        </div>
      </div>

    </div>
    <hr />

    <div className='ceo'>
      JASCART &nbsp;| &nbsp;Co-Founder : ChaxTech
    </div>
    </>
  )
}

export default Footer