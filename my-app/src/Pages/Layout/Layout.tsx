import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Layout = () => {
    const {theme} = useSelector((state) => state.theme);
    useEffect(() => {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${theme}-theme`)
    }, [theme])
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <div>Footer</div>
        </>
    )
}
export default Layout