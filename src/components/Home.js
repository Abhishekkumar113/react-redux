import React from "react";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
          alt="thumbnell"
        />
      </div>
      <h1>Home componernt</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://media.istockphoto.com/id/1190447864/photo/apple-iphone-11-pro-gray-smartphone.jpg?s=612x612&w=0&k=20&c=zETLJeguLoTEFBNKPl1vjPY1lvPW1uM6GPpyiMSvsC0="
            alt="phone"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
          // onClick={
          //     ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
          //     }>
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
