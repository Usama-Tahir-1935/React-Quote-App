import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
    const navStyleLink = ({ isActive }) => {
        return {
            color: isActive ? '#e6fcfc' : '',
        }
    };

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Great Quote</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/quotes" style={navStyleLink}>All Quotes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new-quote" style={navStyleLink}>Add a Quote</NavLink>
                    </li>
                    <li>
                        <NavLink to="/quotes" style={navStyleLink}>Delete a quote</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;