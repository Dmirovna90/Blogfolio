import {ReactComponent as Light} from '../../assets/light.svg';
import {ReactComponent as Dark} from '../../assets/dark.svg';
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ActiveContext, ThemeContext } from "../../Context/Context";
import style from './Navbar.module.scss';
import User from "../User/User";
import Title from "../Title/Title";

const Navbar = () => {
    const context = useContext(ActiveContext);
    const theme = useContext(ThemeContext);
    return (
        <div className={!context?.isActive ? style.navbar : `${style.navbar} ${style.active}`}>
            <div className = {style.menuBox}>
                <User userName= {'Artem Malkin'}/>
                <NavLink to = '/' className = {style.menuPoint} onClick={() => context?.SetIsActive(!context.isActive)}>Home</NavLink>
                <NavLink to = '/add-post' className = {style.menuPoint} onClick={() => context?.SetIsActive(!context.isActive)}>Add Post</NavLink>
            </div>
            <div className = {style.menuBox}>
                <div className = {style.buttonThemeWrap}>
                    <button className = {style.buttonTheme} onClick={theme?.toggleTheme}><Light className = {style.theme}/></button>
                    <button className = {style.buttonTheme} onClick={theme?.toggleTheme}><Dark /></button>
                </div>
                <Title title = {"Sign In"}/>
            </div>
        </div>
    )
}
export default Navbar