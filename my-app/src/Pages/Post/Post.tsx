import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from './Post.module.scss';

const Post = () => {
    const [result, setResult] = useState({title: '', image: '', description: ''})
    const navigate = useNavigate();
    const path = useParams()
    useEffect (() => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/${path.result}`)
        .then((response) => response.json())
        .then((json) => setResult((json)))
    },[]);

    // console.log(result.title)
    return (
        <div className = {style.container}>      
            <h1 className = {style.postTitle}>{result.title}</h1>
            <div className = {style.postImgWrap}>
                <img className = {style.postImg} src={result.image}></img>
            </div>
            <div className = {style.postTextWrap}>
                <p className = {style.postText}>{result.description}</p>
            </div>
            <button onClick = {() => navigate(-1)}>Back</button>
        </div>
    )
}
export default Post