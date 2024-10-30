import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>Oops!!.</h1>
            <p>{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not Found</h3>
                    <p>go Back Where you Form</p>
                    <Link to={`/`}><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;