import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, website} = user;
    return (
        <div>
            <h1>Details About User</h1>
            <h2>Name : {name}</h2>
            <h4>Website : {website}</h4>
            <h5>Email : {email}</h5>

        </div>
    );
};

export default UserDetails;