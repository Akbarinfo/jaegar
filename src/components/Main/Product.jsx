import React, { useState } from "react";

let card = []
export default function Product({food, newFood, setNewFood, setSave, save}) {

  let saveHander = (el) => {
    if(save.length <= 0) {
      setSave([[el]])
    } else {
      save.map(item => {
        if(item[0].id === el.id) {
          console.log("ish")
          setSave([...save, [...item, el]])
        }
        if(item[0].id !== el.id) {
          setSave([...save, [el]])
        }
      })
    }
  }
  console.log(save)


  return(
    <section className="main__box">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="main__title">Choose Dishes</h2>
        <select className="main__select" name="cars" id="cars">
          <option value="volvo">Dine In</option>
        </select>
      </div>

      <ul className="main__list d-flex flex-wrap">
        {newFood.map((item, key) => {
          return(
            <li onClick={() => saveHander(item)} key={key+657} className="main__item">
              <div className="main__imgbox">
                <img className="main__img" src={item.img} alt={item.title} />
              </div>
              <div className="main__infobox">
                <h3 className="main__name">{item.title}</h3>
                <p className="main__price">$ {item.money}</p>
                <p className="main__desc">{item.theRest} Bowls available</p>
              </div>
            </li>
          )
        })
        }
      </ul>
    </section>
  )
}


    // if(card.length <= 0) {
    //   card.push([el])
    //   console.log('0 ishladi')
    // }
    // else {
    //   card.map(item => {
    //     if(item[0].id === el.id) {
    //       item.push(el)
    //       console.log("Arrayga qo'shdi")
    //     }
    //     if(item[0].id !== el.id) {
    //       card.push([el])
    //       console.log("cardga qo'shdi")
    //     }
    //   })
    // }