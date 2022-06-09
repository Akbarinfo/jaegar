import React from "react";

let foodee = []
export default function EditProduct({editOpen, setEditOpen, newFood, setNewFood, element}) {

  foodee = newFood

  let cancelHandler = () => {
    setEditOpen(! editOpen)
  }

  let formHandler = (e) => {
    e.preventDefault()
    foodee.map(item => {
      if(item.id === element.id) {
        item.title = e.target[0].value
        item.img = e.target[1].value
        item.theRest = e.target[2].value
        item.foodType = e.target[3].value
        item.money = e.target[4].value
      }
    })
    setEditOpen(! editOpen)
  }
  setNewFood(foodee)

  return(
    <section className={`edits ${editOpen ? 'edits__open' : ''}`}>
      <div className={`edits__main ${editOpen ? 'edits__mopen' : ''}`}>
        <h1 className="edits__title">Edit Product</h1>
        <form onSubmit={formHandler} className="edits__form" action="">
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Name</span>
            <input className="edits__input" type="text" defaultValue={element.title} placeholder="Name"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Images</span>
            <input className="edits__input" type="text" defaultValue={element.img} placeholder="Images"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Bowls</span>
            <input className="edits__input" type="text" defaultValue={element.theRest} placeholder="Bowls"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Type</span>
            <input className="edits__input" type="text" defaultValue={element.foodType}  placeholder="Type"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Price</span>
            <input className="edits__input" type="text" defaultValue={element.money} placeholder="Price"/>
          </label>
          <div className="d-flex justify-content-between">
            <button type="button" onClick={cancelHandler} className="payment__cancelbtn col-5">Cancel</button>
            <button type="submit" className="payment__btn col-5">Confirm Payment</button>
          </div>
        </form>
      </div>
    </section>
  )
}