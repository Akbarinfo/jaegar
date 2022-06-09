import React from "react";

export default function Header({food, setNewFood}) {
  let value = []
  let searchHander = (e) => {
    food.map(element => {
      if(element.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        value.push(element)
      }
    })
    setNewFood(value)
  }

  return(
    <section className="main__header d-flex">
      <div>
        <h2 className="main__header-title">Jaegar Resto</h2>
        <p className="main__header-date">Tuesday, 2 Feb 2021</p>
      </div>
      <form className="main__header-from">
        <i className='bx bx-search main__header-icon'></i>
        <input onChange={searchHander} className="main__header-input" type="text" placeholder="Search for food, coffe, etc.." />
      </form>
    </section>
  )
}