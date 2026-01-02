import NavText from "./NavText.component";
import { useState, useEffect } from "react";


const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll=()=>{
        setScrolled(window.scrollY>60);
        }
        window.addEventListener("scroll",handleScroll);
    
        return () => {
        window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return(
        <nav className={`h-[10vh] flex fixed top-2 backdrop-blur-md z-10 transition-all duration-900 ${scrolled?"w-[50%] top-2 rounded-full bg-gray-500/50 ":"w-[90vw] top-0 bg-transparent rounded-lg border-0  "} `}>
            <div className=" w-[50%] flex"></div>
            <div className='flex m-auto w-[50%] justify-evenly'>
                <NavText to={"/"} text={"Home"} />
                <NavText to={"/about"} text={"About"} />
                <NavText to={"/contact"} text={"Contact"} />
            </div>
        </nav>
    )
}

export default NavBar;