"use client"
import React from 'react'
type ContainerProps = {
  children: React.ReactNode;
  className?: string;
}
function Container({ children, className }: ContainerProps) {
  return (
    <div className={`max-w-5xl mx-auto p-4 sm:px-6 lg:px-8 w-full min-h-screen bg-neutral-800 ${className || ''}`}>
      {children}
    </div>
  )
}

export default Container