import React, { useState } from "react";
import Category from "./Category";
import Header from "./Header";
import Product from "./Product";

export default function Main({food, setFood, newFood, setNewFood, setSave, save}) {

  return(
    <main className="main">
      <Header
        food={food}
        setFood={setFood}
        newFood={newFood}
        setNewFood={setNewFood}
      />
      <Category
        food={food}
        setFood={setFood}
        newFood={newFood}
        setNewFood={setNewFood}
      />
      <Product
        newFood={newFood}
        setNewFood={setNewFood}
        save={save}
        setSave={setSave}
        food={food}
      />
    </main>
  )
}