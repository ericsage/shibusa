import React from 'react'
import './Tab.css'

export default function Tab({
  selected,
  children,
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

export default function Table({
  children,
  ...props,
}) {
  return (
    <table className="Shibusa-table">
      {children}
    </table>
  )
}
