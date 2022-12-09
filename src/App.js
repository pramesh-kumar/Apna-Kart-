import React,{useState} from "react";
import "./App.css";
import Navbar from './components/Navbar';
import ProductList from "./components/ProductList";

import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {

  const products = [
    {
      price: 80000,
      name: "IPhone MAX Pro",
      quantity: 0,
    },
    {
      price: 10000,
      name: "Redmi Note 10",
      quantity: 0,
    },
  ]

  let  [productList, setProductList] =  useState(products);
  let  [TotalAmount, setTotalAmount] =  useState(0);

  const incrementQuantity = (index) =>{
    let newProductList=[...productList]; // TO make clone
    let newTotalAmount=TotalAmount; // TO make clone
    newProductList[index].quantity++;
    newTotalAmount+=newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const decrementQuantity = (index) =>{
    let newProductList=[...productList]; // TO make copy 
    let newTotalAmount=TotalAmount;
    if(newProductList[index].quantity > 0 ) {
      newProductList[index].quantity--;
      newTotalAmount-=newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const resetQuantity = () =>{
    let newProductList=[...productList]; // TO make copy 
    newProductList.map((products)=>{
      products.quantity=0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  
  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = TotalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    // splice to remove from array 
    newProductList.splice(index, 1);
    
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem =(name,price)=> {
    let newProductList=[...productList]; // TO make clone
    // push to new element in array 
    newProductList.push({
      price:price,
      name:name,
      quantity:0
    })

    setProductList(newProductList);

  }

  return (
    <>
      <Navbar  productList={productList} />

      <main className="container  mt-5 ">

        <AddItem addItem={addItem}/>

        <ProductList productList={productList} 
        incrementQuantity = {incrementQuantity} 
        decrementQuantity = {decrementQuantity}
        removeItem={removeItem} />

      </main>       

      <Footer TotalAmount={TotalAmount} resetQuantity={resetQuantity} />
    </>
  );
}
export default App;
