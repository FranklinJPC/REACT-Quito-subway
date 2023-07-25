import React from 'react'
// Propiedades de componentes dinamicos
function Cupcake({nombre = 'bg-yellow-200', children = 'Default'}) {
  return (
    <div className={nombre}>Cupcake - {children}</div>
  )
}

export default Cupcake