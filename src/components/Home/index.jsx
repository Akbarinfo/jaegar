import React, { useState } from "react";
import EndPart from "../EndPart";
import Main from "../Main";
import Modal from "../Modal";
import Navbar from "../Navbar";

export default function Home({food, setFood, newFood, setNewFood, setSave, save}) {

  let [omodal, setOModal] = useState(false)

  return(
    <div className="d-flex">
      <Navbar />
      <Main
        food={food}
        setFood={setFood}
        newFood={newFood}
        setNewFood={setNewFood}
        save={save}
        setSave={setSave}
      />
      <EndPart
        save={save}
        setSave={setSave}
        omodal={omodal}
        setOModal={setOModal}
      />
      <Modal
        omodal={omodal}
        setOModal={setOModal}
      />
    </div>
  )
}