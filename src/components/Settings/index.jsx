import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Products from "./Products";

export let Categorys = [
  {
    title: 'Appereance',
    desc: 'Dark and Light mode, Font size',
    link: '/apperance',
    icon: 'bx bx-heart'
  },
  {
    title: 'Your Restaurant',
    desc: 'Dark and Light mode, Font size',
    link: '/your',
    icon: 'bx bx-store-alt'
  },
  {
    title: 'Products Management',
    desc: 'Manage your product, pricing, etc',
    link: '/settings',
    icon: 'bx bxs-offer'
  },
  {
    title: 'Notifications',
    desc: 'Customize your notifications',
    link: '/notif',
    icon: 'bx bx-bell'
  },
  {
    title: 'Security',
    desc: 'Configure Password, PIN, etc',
    link: '/security',
    icon: 'bx bx-lock-open'
  },
  {
    title: 'About Us',
    desc: 'Find out more about Posly',
    link: '/about',
    icon: 'bx bx-error-circle'
  },
]

export default function Settings({food, setFood, newFood, setNewFood, }) {
  return(
    <div className="d-flex">
      <Navbar />
      <section className="settings">
        <h1 className="settings__title">Settings</h1>
        <div className="d-flex">
          <div className="">
            <ul className="settings__listbox">
              {Categorys.map((item, key) => {
                return(
                  <NavLink key={key+329} className={({ isActive }) => (isActive ? 'settings__links settings__active' : 'settings__links')} to={item.link}>
                    <li className="settings__itembox">
                      <h2 className="settings__subtitle d-flex"><i className={`settings__icons ${item.icon}`}></i> {item.title}</h2>
                      <p className="settings__desc">{item.desc}</p>
                    </li>
                  </NavLink>
                )
              })
              }
            </ul>
          </div>
          <Products
            food={food}
            setFood={setFood}
            newFood={newFood}
            setNewFood={setNewFood}
          />
        </div>
      </section>
    </div>
  )
}