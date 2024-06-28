// import { BrowserRouter,Route,Router, Routes } from "react-router-dom" 
// import About from "./pages/About"
// import Home from "./pages/Home"
// import Signin from "./pages/signin"
// import Signup from "./pages/signup"
// import Dashboard from "./pages/Dashboard"
// import Projects from "./pages/Projects"
// import Header from "./components/Header"
import Particals from "./components/Particals"


export default function App() {
  return (
    <>
    <Particals/>
  {/* <BrowserRouter>
    <Header/>
  <Routes>|
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About/>} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/projects" element={<Projects/>} />
  
  </Routes>
  
  </BrowserRouter> */}
    </>
  )
}
