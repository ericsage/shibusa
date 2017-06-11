import React from 'react'
import './Table.css'

export function Table({
  children,
  ...props,
}) {
  return (
    <table className="Shibusa-Table">
      {children}
    </table>
  )
}

export function TableHead({
  children,
  ...props,
}) {
  return (
    <thead className="Shibusa-TableHead">
      <tr className="Shibusa-TableHead-Row">
        {children}
      </tr>
    </thead>
  )
}

export function TableHeader({
  children,
  ...props,
}) {
  return (
    <th className="Shibusa-TableHeader">
      {children}
    </th>
  )
}

export function TableBody({
  children,
  ...props,
}) {
  return (
    <tbody className="Shibusa-TableBody">
      {children}
    </tbody>
  )
}

export function TableRow({
  children,
  ...props,
}) {
  return (
    <tr className="Shibusa-TableRow">
      {children}
    </tr>
  )
}

export function TableData({
  children,
  ...props,
}) {
  return (
    <td className="Shibusa-TableData">
      {children}
    </td>
  )
}
