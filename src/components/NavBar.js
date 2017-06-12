import React from 'react'
import './NavBar.css'

export default function NavBar({
  children,
  ...props,
}) {
  return (
    <ul
      className="Shibusa-NavBar"
      {...props}
    >
      {children}
    </ul>
  )
}
