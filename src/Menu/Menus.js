import React, { useState } from "react";
import Cat1 from "./Cat1";
import CatItem from "./CatItem";
import Cat3 from "./Cat3";
import { Link, Route, useRouteMatch } from "react-router-dom";
export function Menus(props) {
    const [menuItem, setMenuItem] = useState(null);
    const { url } = useRouteMatch();
    const routes = [
        {
            id: 0,
            path: "cat1",
            name: "cat1",
            component: Cat1,
        },
        {
            id: 1,
            path: "cat2",
            name: "cat2",
            component: Cat1,
        },
        {
            id: 2,
            path: "cat3",
            name: "cat3",
            component: Cat1,
        },
    ];

    console.log(routes, "routessssssss---------------------------------------");

    return (
        <div
            className="menu-container"
            style={{
                display: "flex",
                height: "100vh",
            }}
        >
            <div
                className="sideNav"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "300px",
                    backgroundColor: "yellowGreen",
                }}
            >
                <div
                    className="header"
                    style={{
                        height: "80px",
                        flex: "none",
                    }}
                >
                    <h5>Company</h5>
                </div>

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <div
                        className="category-sideNav"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            overflowY: "auto",
                            flex: "auto",
                        }}
                    >
                        {routes.map((link, index) => (
                            <Link to={`${url}/category/${index}`} key={index}>
                                {link.path}
                            </Link>
                        ))}
                    </div>
                    <div
                        className="recipe-sideNav"
                        style={{
                            overflowY: "auto",
                            flex: "auto",
                        }}
                    >
                        <Route
                            path={`${url}/category/:catId`}
                            render={({ match }) => {
                                const item = routes.find(
                                    (r) => r.id == match.params.catId
                                );

                                console.log(item);

                                return (
                                    <CatItem
                                        item={item}
                                        setMenuItem={setMenuItem}
                                    />
                                );
                            }}
                        />
                    </div>
                </div>
            </div>
            <div
                className="mainContent"
                style={{
                    flexGrow: 1,
                    backgroundColor: "gray",
                }}
            >
                {menuItem && <div>{menuItem.name}</div>}
            </div>
        </div>
    );
}

export default Menus;
