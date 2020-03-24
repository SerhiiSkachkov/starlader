import React from 'react';
import { NavLink } from "react-router-dom";

import './Tabs.css';

const Tabs = () => {
    return (
        <div className="tabs">
            <div className="container">
                <ul className="tabs_list">
                    <li><NavLink  to="/matches" className="tabs_item">Matches</NavLink></li>
                    <li><NavLink  to="/battles" className="tabs_item">Battles</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Tabs;