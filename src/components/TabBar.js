import React from 'react'
import './TabBar.css'

export default function TabBar({
  children,
  ...props,
}) {
  return (
    <ul
      className="Shibusa-TabBar"
      {...props}
    >
      {children}
    </ul>
  )
}
