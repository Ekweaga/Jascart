import { BrowserRouter, Switch} from 'react-router-dom';
import { Route } from 'react-router-dom';

import Cart from './cart';
import Home from './home';
import Product from './products';
import Checkout from './checkout';
import Shop from './shop';

function Routers({productitem,addtocart,CartItem,decreaseitem,clearcart,remove,itemadd}){
    return(
<Switch>

<Route path="/cart" exact>
<Cart CartItem={CartItem} decreaseitem={decreaseitem} remove={remove} addtocart={addtocart} clearcart={clearcart} itemadd={itemadd}/>
</Route>
<Route path="/product" exact>
<Product productitem={productitem} addtocart={addtocart} itemadd={itemadd}/>
</Route>
<Route path="/cart" exact>
<Shop productitem={productitem} addtocart={addtocart} itemadd={itemadd} CartItem={CartItem}/>
</Route>
<Route path="/" exact>
<Home productitem={productitem} addtocart={addtocart}/>
</Route>
<Route path="/checkout" exact>
<Checkout />
</Route>
</Switch>


    )
}
export default Routers
