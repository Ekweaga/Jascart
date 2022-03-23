import './product.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';


function Products({productitem,addtocart,itemadd}){
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
    return (
        <>
         <div className="headers">
          <div className='ok'>
            <h3>
              JASCART - PHONE SHOP
            </h3>

           
          </div>
      
        </div><br/><br/>
        <div>
            <h2>
                Latest Products
            </h2>
        </div>
        <hr/>
        
           
        
        <div  className="productitems">
          
           {productitem.map(
               item=>{
                   return(
                       
                       <div className="products" data-aos="fade-in"> <img src={item.image} /><br />
                           <p><span>{item.name}</span></p>
                           <p><span> #{item.price}</span></p>
                     
                           <button onClick={()=>addtocart(item)}>Add To Cart</button>
                      
                       </div>
                      
                   )
               }
           )}
        </div>
        </>
    )
}

export default Products;