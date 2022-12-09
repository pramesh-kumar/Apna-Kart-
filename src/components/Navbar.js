import React from 'react';
import ProductList from './ProductList';

const  Navbar = (props)=> {

  console.log(props)

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mx-auto " href="https://www.google.com/">
           
          <button type="button" class="btn btn-primary">
            Apna Kart <span class="badge badge-light">{props.productList.length}</span>
            <span class="sr-only">Items</span>
          </button>
          
          </a>
          
        </div>
      </nav>
    );
  }


export default Navbar;
