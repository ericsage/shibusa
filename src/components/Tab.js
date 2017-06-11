import React from 'react'
import './Tab.css'

export default function Tab({
  children,
  selected,
  ...props,
}) {
  return (
    <li
      className={"Shibusa-Tab" + " " + (selected && "selected")}
      {...props}
    >
      {children}
    </li>
  )
}
