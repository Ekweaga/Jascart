import { useState } from 'react';
import './cart.css';
import {Link} from 'react-router-dom';
function Cart({CartItem,decreaseitem,addtocart,clearcart,remove,itemadd}){
    

    return(
        <>
        <div className="Cartitem">
           <h2 style={{textAlign:'center', marginTop:'30px'}}>Your Cart</h2> 
        </div><br/>
       
        <div>

            {CartItem.length === 0 ? (<div className="noadded"><h3>Your Cart is empty</h3>
            <button>
            <Link to="/product">  ADD TO CART </Link>
            </button> </div>):
                 <div  className="cartitems">
                     <h2 style={{fontSize:'15px'}}>Total Cart Items:{CartItem.length}</h2>
                 { CartItem.map(
                     item=>{
                      
                         return(
                             <>
                            
                             <div className="items">
                                 <div>
                                 <img src={item.image} />
                                 </div>
                           <div>
                               {item.name}<br/><br/>
                               <span className="totalprice"> Price:{item.price * item.quantity}</span><br /><br/>
                               <span> Qty:{item.quantity}</span><br />
                           </div>
                               
                           
                            
                             <div className='btns'>
                                 <button onClick={()=>addtocart(item)}>+</button>
                                 <button onClick={()=>decreaseitem(item)}>-</button>
                                 <button className="remove" onClick={()=>remove(item)}>X</button>
                             </div>
                            
                             
                             </div>  <br/><br/>
                             
                             
                             </>
          )})}<div className="totalprices">
                <div className="">
           <section> Total Price: {CartItem.reduce(
                (price,item) => price + item.quantity *  item.price  , 0
            )}</section>
            <div>
            <button className='out'>
            <Link to="/checkout" style={{color:'black'}}> Checkout </Link>
            </button>
            </div>
        </div>

         <div> <button onClick={clearcart} className="clearcart">Clear Cart</button></div>
      </div>
    
                 </div>
            
            } </div>
       
       
        </>
    )
}

export default Cart;