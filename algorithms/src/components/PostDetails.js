import React, {useState, useContext } from 'react'

import { Image } from 'cloudinary-react';
import { PostsContext } from '../contexts/PostsContext'

export default function PostDetails( { post } ) {
    const { removePost } = useContext(PostsContext)

    const [likes, setLikes]= useState(0)

    const updateLikeCount=()=>{
        setLikes(likes + 1)
    }

    // useEffect(()=>{
    //     const localLikesNumber = localStorage.getItem('likes')
    //     setLikes(localLikesNumber)
    // },[likes])

    return (
        <li>
                 
                    <button className="ui icon button" style={{marginLeft:"250px", marginTop:"3px", width:"35px"}} onClick={()=>removePost(post.id)}>
                        <i className="close icon"></i>
                    </button>
                    <div className="ui card">
                    
                        <div className="image">
                            <Image cloudName="kolive"
                                 publicId={localStorage.getItem('image_url')}/>
                        </div>
                        <div className="content">
                            <div className="header">{post.title}</div>
                            <div className="meta">Posted in 2021</div>
                            <div className="description"> {post.content} </div>
                        </div>
                        <div className="extra content">
                            <a href=""><i aria-hidden="true" className="user icon"></i>By: {post.author}</a>
                            
                        </div>
                        <div>
                            <div className="ui right labeled button">
                                <button className="ui icon button" tabindex="0" onClick={updateLikeCount}>
                                    <i aria-hidden="true" className="heart icon"></i> Like
                                </button>
                                <span className="ui left pointing basic label">{likes}</span>
                            </div>
                            <span className="add-comment"><i className="comment outline icon"></i>Comment</span>
                        </div>  
                </div>          
            </li>
           
    )
}
