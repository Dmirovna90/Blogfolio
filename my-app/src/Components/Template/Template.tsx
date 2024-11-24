import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Template = () => {
    const context = useContext(ThemeContext)
    return (
        <div>
            Template {context}
        </div>
    )
}
export default Template