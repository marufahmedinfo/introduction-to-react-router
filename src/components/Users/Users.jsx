import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import '../User/User.css'

const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h2>USER Data : {users.length}</h2>
            <h1>This is Users</h1>
            <div className="usergrid">
                {
                    users.map((user) => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;