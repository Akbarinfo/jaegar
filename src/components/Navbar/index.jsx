import React from "react";
import { Link, NavLink } from "react-router-dom";
//icon
import logo from '../../assets/images/main-logo.svg'

export default function Navbar() {

  let nav = [
    {
      icon: 'bx bx-home-alt-2',
      link: '/'
    },

    {
      icon: 'bx bxs-offer',
      link: '/menu'
    },

    {
      icon: 'bx bx-circle-three-quarter bx-flip-horizontal',
      link: '/contact'
    },

    {
      icon: 'bx bx-message-dots',
      link: '/message'
    },

    {
      icon: 'bx bx-bell',
      link: '/bell'
    },

    {
      icon: 'bx bx-cog',
      link: '/settings'
    },

    {
      icon: 'bx bx-log-in',
      link: '/sign'
    },
  ]

  return(
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__logo">
          <Link to='/'> <img src={logo} alt="logo" /></Link>
        </li>
        {nav.map((item, key) => {
          return(
            <NavLink key={key+845} to={item.link} className={({ isActive }) => (isActive ? 'navbar__link navbar__active' : 'navbar__link')}>
              <li className="navbar__item"><i className={item.icon}></i> </li>
            </NavLink>
          )
        })}
      </ul>
    </nav>
  )
}