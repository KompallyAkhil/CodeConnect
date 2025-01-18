import { Home } from "./Sections/Home";
import Navbar from "./Sections/Navbar";
import Community from "./Sections/Community";
import { Routes , Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/community" element={<Community/>}/>
      </Routes>
    </div>
  )
}
