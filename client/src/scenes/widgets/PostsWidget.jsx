import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { setPosts } from "state";

import PostWidget from "./PostWidget";

const PostsWidget = ({ userId , isProfile = false }) =>{
    const dispatch = useDispatch();
    const posts = useSelector((state)=> state.posts);
    const token = useSelector((state)=> state.token);

    const getPosts = async ()=>{
        try {
            const response = await fetch(`http://localhost:3001/posts`, {
                method : "GET",
                headers: {Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            dispatch(setPosts({posts: data}));
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }

    const getUserPosts = async ()=>{
        try {
            const response = await fetch(`http://localhost:3001/posts/${userId}/posts`, {
                method : "GET",
                headers: {Authorization: `Bearer ${token}` }
            });
            const data = await response.json();
            dispatch(setPosts({posts: data}));
        } catch (error) {
            console.error("Error fetching user posts:", error);
        }
    }

    useEffect(()=>{
        if(isProfile){
            getUserPosts();
        }else{
            getPosts();
        }
    }, []);

    if (!Array.isArray(posts)) {
        return <div>Loading...</div>; // or some other loading indicator
    }

    return (
        <>
           {posts.map(
             ({
                _id,
                userId,
                firstName,
                lastName,
                description,
                location,
                picturePath,
                userPicturePath,
                likes,
                comments,
             }) =>(
                <PostWidget
                key={_id}
                postId={_id}
                postUserId={userId}
                name={`${firstName} ${lastName}`}
                description={description}
                location={location}
                picturePath={picturePath}
                userPicturePath={userPicturePath}
                likes={likes}
                comments={comments}
                />
             )
           )}
        </>
    )
};

export default PostsWidget;
