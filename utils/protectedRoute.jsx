import { Fragment, useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUser = () => {
        const user = localStorage.getItem('username');
        if (!user || user === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUser();
        }, [isLoggedIn]);
    return (
        <Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </Fragment>
    );
}

export default ProtectedRoute;