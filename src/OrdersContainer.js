import React, { useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";

function OrderDetail(props) {
    useEffect(() => {
        console.log("use effect");
    }, []);
    return <p>orders detail table</p>;
}

function Orders(props) {
    return <p>orders table</p>;
}

function OrdersContainer(props) {
    const routes = [
        { path: "", exact: true, name: "orders", component: Orders },
        { path: ":id", name: "order detail", component: OrderDetail },
    ];

    const { url } = props.match;
    console.log(props.match, url);

    return (
        <Link>
            <ul>
                <Link to={`${url}/1`}>Product 1</Link>
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
        </Link>
    );
}

export default OrdersContainer;
