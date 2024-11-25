import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from './Post.module.scss';

const Post = () => {
    const [result, setResult] = useState({title: '', image: '', text: ''})
    // const navigate = useNavigate();
    const path = useParams()
    useEffect (() => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/?author__course_group=14&format=json&limit=9/${path.result}`)
        .then((response) => response.json())
        .then((json) => setResult((json)))
    },[]);

    // console.log(result.title)
    return (
        <div>      
            <h1>{result.title}</h1>
            {/* <img src={post.image}></img>
            <p>{post.text}</p>
            <button onClick = {() => navigate(-1)}>Back</button> */}
        </div>
    )
}
export default Post