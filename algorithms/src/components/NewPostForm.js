import React, { useState, useContext } from 'react'
import Axios from 'axios';

import { PostsContext } from '../contexts/PostsContext';

export default function NewPostForm() {

    const { addPost } = useContext(PostsContext);

    const [title, setTitle]= useState('')
    const [author, setAuthor]= useState('')
    const [content, setContent]= useState('')
    // const [image, setImage] = useState('')

    const uploadImage = (files)=>{
        console.log(files[0])

        const formData = new FormData();
            formData.append("file", files[0])
            formData.append("upload_preset", "x7kpco5b")

        Axios.post("https://api.cloudinary.com/v1_1/kolive/image/upload", formData).then(
            (res)=>{
                console.log(res.data)
                localStorage.setItem('image_url', res.data.secure_url);

            })

    }
    

    const handleSubmit =(e)=>{
        e.preventDefault();
        addPost(title, author, content);
        setTitle('');
        setAuthor('');
        setContent('');
    }

    return (
        <aside>
            <p className="title">CREATE</p>
            <form onSubmit={handleSubmit} className="post-form">
                <input type="text" placeholder="Post Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>

                <input type="text" placeholder="Author" value={author} onChange={(e)=>{setAuthor(e.target.value)}} required />

                <label>Select Image </label>
                <input type="file" id="img" name="img" accept="image/*" onChange={(e)=>{uploadImage(e.target.files)}} />

                <label>Content</label>
                <textarea col="3" row="5" value={content} onChange={(e)=>{setContent(e.target.value)}} required></textarea>

                <button type="submit">Create Post</button>
            </form>
        </aside>
      
    )
}
