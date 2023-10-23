import { Route, Routes } from "react-router-dom"
import Home from "../home/home"
import Navbar from "../navbar/navbar"
import Err from "../err/err"
const category = "urop"
const id = "id"
const App = () => {
    return (
        <div className='bg-neutral-900 text-white'>

            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/devs" element={<Home />} />
                <Route path="/contact" element={<Home />} />
                <Route path="/works" element={<Home />} />
                <Route path="/login" element={<Home />} />
                <Route path="/signup" element={<Home />} />
                <Route path={"category/:category/:id"} element={<Home />} />
                <Route path={"dashboard/:username"} element={<Home />} />
                <Route path="*" element={<Err />} />
            </Routes>
        </div >
    )
}

export default App