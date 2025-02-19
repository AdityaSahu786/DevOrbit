import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div>Hi there from NeuralNets!</div>
  )
}

const style = { width: 200, backgroundColor: "White", borderRadius: 10, borderColor: "gray", borderWidth: 1}

function PostComponent() {
  return 
    <div style={Style}>
      <img src={"https://appx-wsb-grp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
         Style={{
          width:20,
          height: 20,
          borderRadius: 20
         }} />
    </div>
}

export default App
