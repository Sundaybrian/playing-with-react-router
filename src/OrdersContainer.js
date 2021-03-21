import React, { useEffect } from "react";
import {
    Route,
    Link,
    Switch,
    useRouteMatch,
    useLocation,
} from "react-router-dom";

function OrderDetail(props) {
    const { url, match } = useRouteMatch();

    useEffect(() => {
        console.log(url, "use effect");
    }, []);
    return <p>orders detail page</p>;
}

function Orders(props) {
    const { url, match } = useRouteMatch();

    console.log(url);
    return (
        <>
            {" "}
            <p>orders page</p>
            <Link to={`${url}/1`}>Product 1</Link>
        </>
    );
}

function OrdersContainer(props) {
    const routes = [
        { path: "", exact: true, name: "orders", component: Orders },
        { path: ":id", name: "order detail", component: OrderDetail },
    ];

    const { url } = props.match;
    // console.log(props.match, url);

    return (
        <>
            <ul>
                <Link to={`${url}`}>Back</Link>
                <li></li>
            </ul>

            <div>
                {routes.map(({ path, component, ...rest }) => (
                    <Route
                        path={`${url}/${path}`}
                        component={component}
                        {...rest}
                        key={`${path}1`}
                    />
                ))}
            </div>
        </>
    );
}

export default OrdersContainer;
