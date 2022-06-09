import React from "react";

export default function Modal({setOModal, omodal}) {

  let openModal = () => {
    setOModal(! omodal)
  }

  return(
    <section className={`payment ${omodal ? 'payment__open' : ''}`}>
      <div className={`payment__main ${omodal ? 'payment__main payment__mopen' : ''}`}>
        <div className="payment__header">
          <h1 className="payment__title">Payment</h1>
          <p className="payment__desc">3 payment method available</p>
        </div>

        <div className="payment__box">
          <h2 className="payment__method">Payment Method</h2>
          <div className="d-flex">
            <button className="payment__card payment__active">
              <i className='bx bx-credit-card payment__card-icon'></i>
              Credit Card
            </button>
            <button className="payment__card">
              <i className='bx bxl-paypal payment__card-icon'></i>
              Paypal</button>
            <button className="payment__card">
              <i className='bx bx-wallet-alt payment__card-icon'></i>
              Cash</button>
          </div>
          <h2 className="payment__subtitle">Cardholder Name</h2>
          <input className="payment__input" type="text" placeholder="Name"/>

          <h2 className="payment__subtitle">Cardholder Name</h2>
          <input className="payment__input" type="text" placeholder="1234 5678 1011 1213"/>

          <div className="payment__date d-flex justify-content-between">
            <div className="col-5">
              <input className="payment__input" type="date" />
            </div>
            <div className="col-5">
              <input className="payment__input" type="text" placeholder="..."/>
            </div>
          </div>

          <div className="d-flex justify-content-between mb-5">
            <div className="col-5">
              <h2 className="payment__subtitle">Order Type</h2>
              <p className="d-flex payment__dine align-items-center"><i className='bx bx-chevron-down payment__down-icon'></i> Dine In</p>
            </div>
            <div className="col-5">
              <h2 className="payment__subtitle">Tabel no.</h2>
              <input className="payment__input" type="number" placeholder="140" />
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <button onClick={openModal} className="payment__cancelbtn col-5">Cancel</button>
            <button className="payment__btn col-5">Confirm Payment</button>
          </div>
        </div>

      </div>
    </section>
  )
}