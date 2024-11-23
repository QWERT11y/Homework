import React from 'react'
import Home from './Home'
import Footer from './Footer'

const Lox = ({children}) => {
  return (
    <div>
      <Home/>
      {children}
      <Footer/>
    </div>
  )
}

export default Lox
