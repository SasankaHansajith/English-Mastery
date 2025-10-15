import React from 'react'

export function Button({ className = '', variant = 'solid', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    solid: 'bg-gray-900 text-white hover:bg-gray-800',
    outline: 'border border-gray-300 hover:bg-gray-50',
    ghost: 'hover:bg-gray-100'
  }
  const classes = `${base} ${variants[variant] || variants.solid} ${className}`.trim()
  return <button className={classes} {...props} />
}
