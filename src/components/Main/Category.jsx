import React from "react";

export default function Category({food, setNewFood}) {

  let type = []
  let type2 = []
  food.map((item) => {
    type2.push(item.foodType)
  })
  type = [...new Set(type2)]

  let categoryHandler = (e) => {
    setNewFood(food.filter(item => item.foodType === e.target.id))
    if(e.target.id === "all") {
      setNewFood(food.filter(item => item.foodType !== e.target.id))
    }
  }

  return(
    <ul className="main__category d-flex">
      <li className="main__category-item">
        <button onClick={categoryHandler} type="button" id="all" className="main__category-btn">All</button>
      </li>
      {type.map((type, key) => {
        return(
          <li key={key+751} className="main__category-item">
            <button onClick={categoryHandler} type="button" id={type} className="main__category-btn">{type}</button>
          </li>
        )
      })}
    </ul>
  )
}
