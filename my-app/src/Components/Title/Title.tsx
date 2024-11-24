import style from "./Title.module.scss"
interface IProps {
    title?: string;
    children?: React.ReactNode;
}
const Title = ({title, children}: IProps) => {
    console.log(children)
    if (title === undefined) {
        return children
    }
    return (
        <div className = {style.title}>
            <p>{title}</p>
        </div>
    )
}
export default Title