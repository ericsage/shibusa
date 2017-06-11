import React from 'react'
import './InfoBox.css'

export default function InfoBox({
  children,
  ...props
}) {
  return (
    <div
      className="Shibusa-InfoBox"
      {...props}
    >
      {children}
    </div>
  )
}
