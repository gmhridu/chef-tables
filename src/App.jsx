import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Recipes from "./components/Recipes/Recipes";
import Card from "./components/Card/Card";
import Carts from "./components/Carts/Carts";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import Footer from "./components/Footer/Footer";


const App = () => {
  const [recipesData, setRecipesData] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    fetch('recipes.json')
      .then((res) => res.json())
      .then((data) =>
        setRecipesData(data?.recipes)
      )
      .catch((err) => console.log(err));
  }, []);

  const checkAlreadyExits = (recipe) => {
      return cart.find((item)=> item?.recipe_id === recipe?.recipe_id)
  }
  const handleWantToCook = (recipe) => {
    if (checkAlreadyExits(recipe)) {
      // toast 
      toast.warning("Already Exist!", {
        type: "error",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return
    }
    setCart((prev) => {
      return [...prev, recipe];
    })
  };
  


  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Recipes />
        {/* cards */}
        <div className="container flex flex-col md:flex-row gap-6 justify-between my-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full md:w-1/2 lg:w-[67%]">
            {recipesData?.map((recipe) => (
              <Card
                key={recipe?.id}
                recipe={recipe}
                handleWantToCook={handleWantToCook}
              />
            ))}
          </div>
          <div className="w-full md:w-1/2 lg:w-[38%]">
            <Carts cart={cart} setCart={setCart} />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default App;
