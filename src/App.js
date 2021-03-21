import React from "react";
import logo from "./logo.svg";
import "./App.css";

import OrdersContainer from "./OrdersContainer";
import Analytics from "./Analytics";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";

function Content(props) {
    return (
        <>
            {" "}
            <div>{props.linkTo.name} page</div>
            <div>{props.linkTo.component}</div>
        </>
    );
}

function VerticalMenu(props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            {props.routes.map((r) => (
                <Link to={`${props.matchPath}/${r.path}`} key={r.path}>
                    {r.name}
                </Link>
            ))}
        </div>
    );
}

class DashBoardContainer extends React.Component {
    routes = [
        { path: "analytics", name: "analytics", component: Analytics },
        { path: "orders", name: "orders", component: OrdersContainer },
    ];

    render() {
        const matchPath = this.props.match.path;

        return (
            <div
                style={{
                    display: "flex",
                }}
            >
                <div
                    style={{
                        maxWidth: "200px",
                        width: "200px",
                    }}
                >
                    <VerticalMenu routes={this.routes} matchPath={matchPath} />
                </div>

                <div
                    style={{
                        flexGrow: 1,
                        marginLeft: "100px",
                    }}
                >
                    <Route
                        path={`${matchPath}/:id`}
                        render={(props) => {
                            const linkTo = this.routes.find((l) => {
                                console.log(l);
                                return l.name === props.match.params.id;
                            });

                            return (
                                <linkTo.component linkTo={linkTo} {...props} />
                            );
                        }}
                    />
                </div>
            </div>
        );
    }
}

function App() {
    return (
        <Router>
            <div>
                <header
                    style={{
                        backgroundColor: "#fb3",
                    }}
                >
                    Learn Reac
                </header>
            </div>
            <Route path="/dashboard" component={DashBoardContainer} />
            <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        </Router>
    );
}

export default App;
