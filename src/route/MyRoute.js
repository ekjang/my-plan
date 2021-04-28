import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import IntroComponent from "../intro/IntroComponent";
import GoalComponent from "../intro/GoalComponent";
import FunctionComponent from "../intro/FunctionComponent";
import DesignComponent from "../intro/DesignComponent";

class MyRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/"
                           render={() => <IntroComponent
                           />
                           }
                    />
                    <Route exact path="/goal"
                           render={() => <GoalComponent
                           />
                           }
                    />
                    <Route exact path="/function"
                           render={() => <FunctionComponent
                           />}
                    />
                    <Route exact path="/design"
                           render={() => <DesignComponent
                           />}
                    />
                </Switch>
            </div>
        );
    }
}
export default MyRoute;