import React from "react";
import classes from "./QuoteItem.module.css";
import { Link } from "react-router-dom";

const QuoteItem = (props) => {
    return (
        <div>
            <li className={classes.item}>
                <figure>
                    <blockquote>
                        <p>{props.text}</p>
                    </blockquote>
                    <figcaption>{props.author}</figcaption>
                </figure>
                <Link className="btn" to={`/quotes/${props.id}`}>View FullScreen</Link>
            </li>
        </div>
        
    );
};

export default QuoteItem;