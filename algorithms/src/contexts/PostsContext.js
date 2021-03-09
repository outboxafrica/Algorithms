import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/dist/v1';


export const PostsContext = createContext();

export default function PostsContextProvider(props) {
    const [posts, setPosts] = useState([
        {title: 'How to navigate imposter syndrome', author: 'John Doe', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', id: 1},
        {title: 'How to deal with procrastination', author: 'Kyle Doe', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', id: 2},
        {title: 'How to work from home', author: 'Jane Doe', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', id: 3},
        {title: 'How to be more productive', author: 'Paul Doe', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', id: 4},
        
    ])
    

    const addPost = (title, author, content)=>{
        setPosts([...posts, {title: title, author: author, content: content, id: uuid() }]);
    }

    const removePost =(id)=>{
        setPosts(posts.filter((post)=> post.id !== id));
    }


    useEffect (()=> {  
        const localData = localStorage.getItem('posts')
        //checks if there is any data stored in local storage and returns it as an object
        //enables posts persist even when the page is refreshed
        if(localData) { setPosts(JSON.parse(localData))}
    },[])
    
    useEffect(()=> {
        localStorage.setItem('posts', JSON.stringify(posts));
        
    }, [posts])
    return (
        <PostsContext.Provider value={{ posts, addPost, removePost }}>
            {props.children}
        </PostsContext.Provider>
    )
}
