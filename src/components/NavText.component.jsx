import { NavLink } from "react-router-dom";

const NavText = ({to, text}) => {
    return (
        <NavLink to={to} className='text-sky-500'>
            {text}
        </NavLink>
    )
}

export default NavText;