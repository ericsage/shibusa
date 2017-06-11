import React from 'react'
import './TabList.css'

export default function TabList({
  children,
  ...props,
}) {
  return (
    <ul
      className="Shibusa-TabList"
      {...props}
    >
      {children}
    </ul>
  )
}
