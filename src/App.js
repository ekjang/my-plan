import './App.css';
import TabMenu from "./common/TabMenu";
import {BrowserRouter as Router} from "react-router-dom";
import React from "react";
import MyRoute from "./route/MyRoute";

function App() {
    return (
        <div className="App">
            <Router>
                <TabMenu />
                <div>
                    <MyRoute />
                </div>
            </Router>
        </div>
    );
}

export default App;
