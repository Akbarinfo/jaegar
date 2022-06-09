import React from "react";
import { NavLink } from "react-router-dom";
import { Categorys } from "..";
import Navbar from "../../Navbar";

export default function About() {
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
            <h1>About</h1>
        </div>
      </section>
    </div>
  )
}