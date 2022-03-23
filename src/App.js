import phone1 from './phone1.jpeg';
import phone2 from './phone2.jpeg';
import phone3 from './phone3.jpeg';
import phone4 from './phone4.jpeg';
import phone5 from './phone5.jpeg';
import phone6 from './phone6.jpeg';
import phone7 from './phone7.jpeg';
import phone8 from './phone8.jpeg';
import phone9 from './phone9.jpeg';
import phone10 from './phone10.jpeg';
import phone11 from './phone11.jpeg';
import phone12 from './phone12.jpeg';

import './App.css';
import Header from './header';
import { BrowserRouter, Router, Switch} from 'react-router-dom';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Cart from './cart';
import Routers from './router';
import Products from './products';
import { useState } from 'react';
import Footer from './footer';
import Aos from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react';
import Shop from './shop';


function App() {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])


  const productitem = 
      [
      {
        id:1,
        image:phone1,
        price:21000,
        quantity:0,
        name:"Pouvoir 3 Air Plus"
      },
      {
        id:2,
        image:phone2,
        price:13000,
        quantity:0,
        name:"Infinix Hot 10Lite"
      },
      {
        id:3,
        image:phone3,
        price:15000,
        quantity:0,
        name:"Samsung 6s Edge"

      },
      {
        id:4,
        image:phone4,
        price:18000,
        quantity:0,
        name:"Infinix Hot 8"
      },
      {
        id:5,
        image:phone5,
        price:20000,
        quantity:0,
        name:"IPhone 6s"
      },
      {
        id:6,
        image:phone6,
        price:32000,
        quantity:0,
        name:"Tecno Spark 4"
      },
      {
        id:7,
        image:phone7,
        price:23000,
        quantity:0,
        name:"Iphone 8+"
      },
      {
        id:8,
        image:phone8,
        price:43000,
        quantity:0,
        name:"Infinix smart 5"
      },
      {
        id:9,
        image:phone9,
        price:50000,
        quantity:0,
        name:"Tecno Pop 2"
      },
      {
        id:10,
        image:phone10,
        price:25000,
        quantity:0,
        name:"Redmi 10"
      },
      {
        id:11,
        image:phone11,
        price:25000,
        quantity:0,
        name:"Tecno camon 17"
      },
      {
        id:12,
        image:phone12,
        price:25000,
        quantity:0,
        name:"Camon 18"
      }

    ] 
    const [CartItem, SetCartItem] = useState([]);
    const [itemadd, SetItemadd] = useState(0);

    const addtocart = (product) =>{
        const ProductExist= CartItem.find((item) =>
          item.id === product.id)
          if(ProductExist){
           SetCartItem( CartItem.map((item) =>
         item.id === product.id ?
       {...ProductExist, quantity:ProductExist.quantity + 1}:item));
       SetItemadd(itemadd + 1)
        
          }
          else{
            SetCartItem([...CartItem,{...product, quantity:1}])
            SetItemadd(itemadd + 1)

          }
    }
    const decreaseitem = (product)=>{
      const ProductExist= CartItem.find((item) =>
          item.id === product.id)
          if(ProductExist){
           SetCartItem( CartItem.map((item) =>
         item.id === product.id ?
    {...ProductExist, quantity:ProductExist.quantity - 1}:item));
    SetItemadd(itemadd - 1)
        
          }
     
    }
    const clearcart = ()=>{
      SetCartItem([]);
      SetItemadd(0)
    }
    const remove = (product)=>{
      const ProductExist= CartItem.find((item) =>
      item.id === product.id)
      if(ProductExist){
        SetCartItem( CartItem.filter((item) =>
        item.id !== product.id))
        SetItemadd(itemadd - 1);

    }
  }
  
  return (
    
 
    <>
    <div className='App'>
    <BrowserRouter>

<Header />

<Routers productitem={productitem} addtocart={addtocart} CartItem={CartItem}
  decreaseitem={decreaseitem} clearcart={clearcart} remove={remove} itemadd={itemadd} />
   <div className='goods'>
     <div>
     <Shop CartItem={CartItem} data-aos="fade-in"/>
     </div>

</div>
</BrowserRouter><br/><br/>



<div className='footer'>
<Footer />
</div> 

    </div>
    
  
    
    
    </>
   
  );
}

export default App;
