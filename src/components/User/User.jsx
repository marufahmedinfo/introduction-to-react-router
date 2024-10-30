import { Link } from 'react-router-dom';
import './User.css'
import PropTypes from 'prop-types';
const User = ({ user }) => {
    const { id, name, email, phone } = user;
    return (
        <div className="grid-tamplate">
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p> Phone : {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object
}
export default User;