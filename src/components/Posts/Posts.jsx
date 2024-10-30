import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import '../User/User.css'

const Posts = () => {
    const posts = useLoaderData();
    // const {} = posts;
    return (
        <div>
            <h2>Posts : {posts.length}</h2>
            <div className="usergrid">
                {
                    posts.map((post) => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;