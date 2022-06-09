import React from "react";

export default function EndPart({setSave, save, setOModal, omodal}) {

  let openModal = () => {
    setOModal(! omodal)
  }

  return(
    <section className="endpart d-flex flex-column justify-content-between">
      <div className="endpart__main">
        <h2 className="endpart__title">Orders #34562</h2>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <button className="endpart__btn-active">Dine In</button>
          <button className="endpart__btn">To Go</button>
          <button className="endpart__btn">Delivery</button>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="endpart__cate">Item</p>
          <div className="d-flex">
          <p className="endpart__cate me-5">Qty</p>
          <p className="endpart__cate">Price</p>
          </div>
        </div>

        <hr className="endpart__hr mb-3" />

        <ul className="endpart__list">
          <li className="endpart__item">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="endpart__imgbox">
                  <img className="endpart__img" src="https://picsum.photos/id/345/70" alt="sa" />
                </div>
                <div className="ms-2">
                  <h2 className="endpart__name">Spicy seasoned sea...</h2>
                  <p className="endpart__price-min">$ 2.29</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                  <p className="endpart__count me-4">2</p>
                  <p className="endpart__price">$ 4.58</p>
                </div>
            </div>
            <div className="d-flex">
              <input className="endpart__input" type="text" placeholder="Order Note..."/>

            <button className="endpart__deletebtn"><i className='bx bx-trash-alt endpart__trash'></i></button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="endpart__sub">Discount</p>
          <p className="endpart__total-price">$ 0</p>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <p className="endpart__sub">Sub Total</p>
          <p className="endpart__total-price">$ 21.05 </p>
        </div>
        <button onClick={openModal} className="endpart__cbtn" type="type">Continue to Payment</button>
      </div>
    </section>
  )
}