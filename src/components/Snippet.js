import React from 'react'
import './Snippet.css'

export default function Snippet({
  children,
  ...props,
}) {
  return (
    <div className="Shibusa-Snippet">
      {children}
    </div>
  )
}
