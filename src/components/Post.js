import React, {useEffect} from 'react';
import {useAtom} from "jotai";
import {POST, PRE_FILLED_ARTICLES} from "../STORE";
import axios from "axios";


const Post = () => {
    const [articles, setArticles] = useAtom(PRE_FILLED_ARTICLES);
    const [post, setPost] = useAtom(POST);

    //on pageload runs the getPost() function
    useEffect(() => {
        getPost();
    }, [])

    //fetches the post with id 22 from jsonplaceholder api
    //axios variant
    const getPost = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/22');
        setPost(response.data);
    }

    //fetches the post with id 22 from jsonplaceholder api
    //fetch variant
    // const getPost = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/22');
    //     let promise = await response.json();
    //     setPost(promise);
    // }

    // display articles from default atom
    //display post from atom that draw his data with the help of getPost at pageload
    return (
        <div>
            <h3>New articles:</h3>
            {articles.map(art => <p key={art.id}>article id: {art.id} <br/> article name: {art.name}</p>)}
            <hr/>
            <h3>Json placeholder post data:</h3>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <p>{post.userId}</p>
        </div>
    );
};

export default Post;