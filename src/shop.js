import React from 'react'
import './shop.css';
import small from './small.png';
import { Link } from 'react-router-dom';

const Shop = ({itemadd,CartItem}) => {
  return (
    <><div>
         
      <div className="itemadds">
          <div style={{position:'relative'}}>
          <Link to='/cart'><img src={small} /></Link>
              <span style={{color:'black', fontSize:'20px', position:'absolute', top:0, left:35,fontWeight:'bold',bottom:0}}>
              {CartItem.length}
      </span>

          </div>
             
          </div>
    
    </div>
    </>
  )
}

export default Shop;