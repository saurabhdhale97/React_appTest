import React , { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'admin@shopcart.com' && password === 'admin') {
      console.log(`OK`)
      let isLogedIn = true
      localStorage.setItem("isLogedIn", isLogedIn);
      let status = localStorage.getItem("isLogedIn")
      window.location.replace('http://localhost:3001/index.html');
      console.log('isLogedIn',status)

    } else {
      console.log('incorrect password')
    }
    setEmail('')
    setPassword('')
    
  }
  return (
    <>
    <header id="header">
				
                <div class="header-middle">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 clearfix">
                                <div class="logo pull-left">
                                    <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
                                </div>
                                
                            </div>
                            <div class="col-md-8 clearfix">
                                <div class="shop-menu clearfix pull-right">
                                    <ul class="nav navbar-nav">
                                        <li><a href=""><i class="fa fa-user"></i> Account</a></li>
                                        <li><a href=""><i class="fa fa-star"></i> Wishlist</a></li>
                                        <li><a href="checkout.html"><i class="fa fa-crosshairs"></i> Checkout</a></li>
                                        <li><a href="cart.html"><i class="fa fa-shopping-cart"></i> Cart</a></li>
                                        <li><a href="login.html"><i class="fa fa-lock"></i> Login</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="header-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>
                                <div class="mainmenu pull-left">
                                    <ul class="nav navbar-nav collapse navbar-collapse">
                                        <li><a href="index.html">Home</a></li>
                                        <li class="dropdown"><a href="#">Shop<i class="fa fa-angle-down"></i></a>
                                            <ul role="menu" class="sub-menu">
                                                <li><a href="shop.html">Products</a></li>
                                                <li><a href="product-details.html">Product Details</a></li> 
                                                <li><a href="checkout.html">Checkout</a></li> 
                                                <li><a href="cart.html">Cart</a></li> 
                                                <li><a href="login.html" class="active">Login</a></li> 
                                            </ul>
                                        </li> 
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="search_box pull-right">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <section id="form">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 col-sm-offset-1">
                            <div class="login-form">
                                <h2>Login to your account</h2>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <input type="text" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} />
                                    <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
                                    <span>
                                        <input type="checkbox" class="checkbox"/> 
                                        Keep me signed in
                                    </span>
                                    <button type="submit" class="btn btn-default">Login</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-1">
                            <h2 class="or">OR</h2>
                        </div>
                        <div class="col-sm-4">
                            <div class="signup-form">
                                <h2>New User Signup!</h2>
                                <form action="#">
                                    <input type="text" placeholder="Name"/>
                                    <input type="email" placeholder="Email Address"/>
                                    <input type="password" placeholder="Password"/>
                                    <button type="submit" class="btn btn-default">Signup</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  );
}
