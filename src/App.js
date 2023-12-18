import React from 'react'
import RoutesApp from './routes'
import style from './styles/global.css'
import Nav from '../src/components/Nav'
import { AuthProvider } from './context/auth'


const App = () => {
  return (

    <>
    {/* <Nav/> */}
    <AuthProvider>
     <RoutesApp />
    </AuthProvider>
    </>
  )
}

export default App