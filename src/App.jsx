import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ResponsiveAppBar from './Component/NavBarMui'
import Contentstatistics from './Component/Contentstatistics'
import Footer from './Component/footer'
import Menu from './Component/Menu'
import Content from './Component/content'
import TextContent from './Component/TextContent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Menu></Menu> */}
    <ResponsiveAppBar></ResponsiveAppBar>
    <TextContent></TextContent>
    <Content></Content>
      <Footer></Footer>
    </>
  )
}

export default App
