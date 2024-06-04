import Data from './componets/api/Data.jsx'
import './App.css'
// import Nav from './Navbar/Nav.jsx'
import Navbar from './Navbar/Navbar.jsx'
import Line from './Linechert/Line.jsx'


function App() {


  return (
    <>
    {/* <Nav></Nav> */}
    <Navbar></Navbar>
    <Data></Data>
      <h1>Hello World</h1>
      <Line></Line>
    </>
  )
}

export default App
