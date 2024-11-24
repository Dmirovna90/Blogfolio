import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import { ActiveContext, ThemeContext } from "../../Context/Context";;
import { useState, useEffect } from "react";

const Layout = () => {
    const [active, setActive] = useState(false);
    const [themePage, setThemePage] = useState('light');
    const toggleTheme = () => {
        setThemePage((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    };
    useEffect(() => {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${themePage}-theme`)
    }, [themePage])
    return (
        <ActiveContext.Provider value={{isActive: active, SetIsActive: setActive}}>
            <ThemeContext.Provider value = {{theme: themePage, toggleTheme: toggleTheme}}>
                <Header />
                <Navbar />
                <Outlet />
                <div>Footer</div>
            </ThemeContext.Provider>
        </ActiveContext.Provider>
    )
}
export default Layout