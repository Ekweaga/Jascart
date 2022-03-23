import './header.css';
import Footer from './footer';


import {Link} from 'react-router-dom';



function Header(){
    return (
     
     <>
    
    <div className='top'>
        <p>$6 EXPRESS COURIER. FREE SHIPPING FOR ORDERS $200+. GIFTED HEBE TOTE BAG WITH PURCHASES $250+.</p>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light" style={{color:'white'}}>
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" style={{color:'white'}}></span>
    </button>
    <a class="navbar-brand" href="/" style={{color:'white'}}>JASCART</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
                      <Link to="/" class="nav-link active" style={{color:'white'}}>
                          Home
                          </Link>  
                    </li>
                    <li class="nav-item">
                      <Link to="/cart" class="nav-link active" style={{color:'white'}}>
                          Cart
                          </Link>  
                    </li>
                    <li class="nav-item">
                      <Link to="/product" class="nav-link active" style={{color:'white'}}>
                          Shop
                          </Link>  
                    </li>
       
      
      </ul>
      
    </div>
  </div>
</nav>
        
       
   
    
    
        </>
    )
}


export default Header;