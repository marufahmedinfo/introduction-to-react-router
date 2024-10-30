import { useLoaderData, useNavigate } from "react-router-dom";
import '../User/User.css'

const PostDetails = () => {
    const navigate = useNavigate();
    const handlegoBack = () => {
        navigate(-1)
    }
    const post = useLoaderData();
    const {id,title, body} = post;
    return (
        <div className="grid-tamplate">
            <h3>Post Detaisl about : {id}</h3>
            <h3>Title : {title}</h3>
            <h3>Body : <small>{body}</small></h3>
            <button onClick={handlegoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;