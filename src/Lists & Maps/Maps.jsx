import React, { useState } from "react";

const Maps = () => {

    const NavBar =()=>{
        return (
            <h1>Test</h1>
        )
    }

const Products = [

  {
    id: 1,
    Name: "Pineapple",
    Price: 50,
  },
  {
    id: 2,
    Name: "Strawberry",
    Price: 15,
  },
  {
    id: 3,
    Name: "Mangos",
    Price: 45,
  },
  {
    id: 4,
    Name: "Cashew",
    Price: 8,
  },
  {
    id: 5,
    Name: "Oranges",
    Price: 20,
  },
];


  return (

    
    
    <div className=" flex items-center my-6 text-4xl ml-6">
    
      <ul>
        {Products.map((Fruit) => (
          <div key={Fruit.id}>
            <li>{Fruit.Name}</li>
            <p className=" text-red-600 bg-gray-400 w-16 rounded p-1">${Fruit.Price}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Maps;
