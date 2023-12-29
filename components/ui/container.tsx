import React from 'react'

interface ContainerProps{
    children: React.ReactNode
}

const container: React.FC<ContainerProps> = ({
    children
}) => {
  return (
    <div className = "mx-auto max-w-7xl">
    {children}
    </div>
  )
}

export default container