import { useNavigate } from "react-router-dom";
import style from './CardPostSmall.module.scss';
import {ReactComponent as Up} from '../../../assets/up.svg';
import {ReactComponent as Down} from '../../../assets/down.svg';
import {ReactComponent as Bookmark} from '../../../assets/bookmark.svg';
import {ReactComponent as More} from '../../../assets/more.svg';

interface IPost {
    id: number;
    image?: string;
    date: string;
    title: string;
}
const CardPostSmall = ({date, title, image, id}: IPost) => {
    const navigate = useNavigate()
    return (
        <div className = {style.wrapper}>
            <div className = {style.wrap}>
                <div className = {style.wraptextcontent}>
                    <p className = {style.date}>{date}</p>
                    <h2 className = {style.title} onClick = {() => navigate(`${id}`)} >{title}</h2>
                </div>
                <div className = {style.wrapimg}>
                    <img className = {style.imgCard} src={image}></img>
                </div>
            </div>
            <div className = {style.wrap}>
                <div className = {style.icons}><Up className = {style.icon} /><Down /></div>
                <div className = {style.icons}><Bookmark className = {style.icon}/><More /></div>
            </div>

        </div>
    )
}
export default CardPostSmall