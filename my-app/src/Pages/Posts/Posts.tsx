import { useEffect, useState } from "react";
import CardPostBig from "../../Components/CardPost/CardPostBig/CardPostBig";
import CardPostMiddle from "../../Components/CardPost/CardPostMiddle/CardPostMiddle";
import CardPostSmall from "../../Components/CardPost/CardPostSmall/CardPostSmall";
// import { useNavigate } from "react-router-dom";

interface IPost {
    id: number;
    image?: string;
    text?: string;
    date: string;
    title: string;
}
const Posts = () => {
    const [results, setPosts] = useState([]);
    useEffect (() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?author__course_group=14&format=json&limit=9')
        .then((response) => response.json())
        .then((json) => setPosts((json.results)))
    },[])
    return (
    <>
            {results.map(({id, image, date, text, title}: IPost) => {
                return (
                <div key={id}>
                    <CardPostBig id ={id} image ={image} text = {text} date = {date} title = {title}/>
                    {/* <CardPostMiddle id ={id} image ={image} date = {date} title = {title}/> */}
                    {/* <CardPostSmall id ={id} image ={image} date = {date} title = {title}/> */}
                </div>)
            })}
 
    </>
    )
}
export default Posts


