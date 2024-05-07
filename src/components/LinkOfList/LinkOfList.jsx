import React from 'react'
import { NavLink } from 'react-router-dom'

export const LinkOfList = ({content, routes}) => (
  <li>
    <NavLink 
      to={routes} 
      className="font-semibold text-xl text-ColorOfText_2-0 hover:text-textBeigeC-0 hover:border-b-2 hover:border-b-borderColorNew_1 "
      >
      {content}
    </NavLink>
  </li>
)

