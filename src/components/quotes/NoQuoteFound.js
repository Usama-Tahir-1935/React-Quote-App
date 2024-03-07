import React from "react";
import classes from "./NoQuoteFound.module.css";
import { Link } from "react-router-dom";

const NoQuoteFound = (props) => {
    return (
        <div className={classes.noquotes}>
            <p>No Quotes Found!</p>
            <Link className="btn" to="/new-quote">Add a Quote</Link>
        </div>
    );
};

export default NoQuoteFound;