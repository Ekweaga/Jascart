import { BrowserRouter, Switch} from 'react-router-dom';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Cart from './cart';
import phone2 from './phone2.jpeg';
import phone7 from './phone7.jpeg';
import phone1 from './phone1.jpeg';
import phone4 from './phone4.jpeg';
import phone6 from './phone6.jpeg';
import phone11 from './phone11.jpeg';
import phone12 from './phone12.jpeg';
import Product from './products';
import './home.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';


function Home({productitem , addtocart}){

 useEffect(()=>{
    Aos.init({duration:1000})
  },[])
    return(
        <>
      
        
        <div className="header">
          <div className='ok'>
            <h3>
              JASCART - PHONE SHOP
            </h3>

            <button>
            <Link to="/product">  SHOP NOW </Link>
            </button>
          </div>
         
      
        </div> <br/><br/>
        <div data-aos="fade-in" className='kin'>
          <section>
          JASCART of ethical phone products and New Zealand designed. <br/>It is a destination for phone gadgets seekers. 
        Located in Masterton's boutique Kuripuni.
          </section>
        
        </div>
     
     <div className='item'>
     <div data-aos="zoom-out"><h4>
  Must Haves
</h4>
<p>
Some of our favourite picks this week.
</p></div>
      

    
        <div  className="productitem">
          
           {productitem.map(
               item=>{
                   return(
                       
                       <div className="product" data-aos="fade-left"> <img src={item.image} /><br />
                           <p><span>{item.name}</span></p>
                           <p><span> #{item.price}</span></p>
                     
                         
                      
                       </div>)
               })}</div> </div><br/><br/>
               

               <div className='more'>
                 <div className='img' data-aos="fade-right">
               <img src={phone12}/>
                 </div>
                 <div className='morecontent'>
                   
               <p>We love all of our beautiful brands here at Jascart but there is a special place in our heart for the New Zealand brands. We have made it easy for you to find a little about each of these amazing brands. Head over to our Product page where we give you a little insight into what makes
                  each of these brands so special.</p>
                  <div>
                  <button>
              SHOP NOW
            </button>
                  </div>
                 </div>
               </div>
               <div className='images' >
                 <div className='images1' data-aos="fade-out">
                   <h5>New Arrivals</h5>
                 </div>
                 <div className='images2' data-aos="zoom-in">
                   <h5>Sales</h5>
                 </div>
                 <div className='images3' data-aos="fade-in">
                   <h5>Old stocks</h5>
                 </div>
               </div>

              
               </>
    )
     
    
    
}

export default Home;