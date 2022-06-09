import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Bell from "./components/Bell";
import Contact from "./components/Contact";
import Data from "./components/Data/data";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Message from "./components/Message";
import Settings from "./components/Settings";
import About from "./components/Settings/Category/About";
import Appereance from "./components/Settings/Category/Appereance";
import Notifications from "./components/Settings/Category/Notifications";
import Security from "./components/Settings/Category/Security";
import Your from "./components/Settings/Category/Your";
import Sign from "./components/Sign";

function App() {

  let [food, setFood] = useState(Data)
  let [newFood, setNewFood] = useState(food)

  useEffect(() => {
    setNewFood(food)
  }, [food])

  //save
  let [save, setSave] = useState([])

  return(
    <>
      <Routes>
        <Route path='/' element={<Home
          food={food}
          setFood={setFood}
          newFood={newFood}
          setNewFood={setNewFood}
          save={save}
          setSave={setSave}
        />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/message' element={<Message />} />
        <Route path='/bell' element={<Bell />} />
        <Route path='/settings' element={<Settings
          food={food}
          setFood={setFood}
          newFood={newFood}
          setNewFood={setNewFood}
        />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/about' element={<About />} />
        <Route path='/apperance' element={<Appereance />} />
        <Route path='/notif' element={<Notifications />} />
        <Route path='/security' element={<Security />} />
        <Route path='/your' element={<Your />} />
      </Routes>
    </>
  );
}

export default App;
