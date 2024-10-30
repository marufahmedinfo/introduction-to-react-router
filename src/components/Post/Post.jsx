import { Link, useNavigate } from 'react-router-dom';
import '../User/User.css'
import PropTypes from 'prop-types';
const Post = ({ post }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    const { id, title } = post;
    return (
        <div className='grid-tamplate'>
            <h4>Post of Id : {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigate}>Show More</button>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}
export default Post;