import React from 'react'
import './Select.css'

export function Select({
  children,
  ...props,
}) {
  return (
    <div className="Shibusa-SelectWrapper">
      <select
        className="Shibusa-Select"
        {...props}
      >
        {children}
      </select>
    </div>
  )
}

export function Option({
  children,
  ...props,
}) {
  return (
    <option
      className="Shibusa-Option"
      {...props}
    >
      {children}
    </option>
  )
}
