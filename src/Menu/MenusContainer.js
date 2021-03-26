import React from "react";
import { Route } from "react-router-dom";
import Menus from "./Menus";

function MenusContainer(props) {
    const { url } = props.match;
    const { routes } = props;

    // console.log(routes, "++++++++++++++++++++++++++");
    return (
        <div>
            {routes.map(({ path, component, ...rest }, index) => (
                <Route
                    path={`${url}/${path}`}
                    component={component}
                    {...rest}
                    key={`${index}${path}`}
                />
            ))}
        </div>
    );
}

export default MenusContainer;
