import React, { Fragment, useRef, useState } from "react";
import classes from "./QuoteForm.module.css";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteForm = (props) => {
    const [isEntering, setIsEntering] = useState(false);

    const authorInputRef = useRef();
    const textInputRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        props.onAddQuote({ author: enteredAuthor, text: enteredText });
    };

    const formFocusHandler = () => {
        setIsEntering(true);
    };
    

    return (
        <Fragment>
            
        <Card>
            <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
                {props.isLoading && (
                    <div className={classes.loading}>
                    <LoadingSpinner/>
                </div>
                )}
                <div className={classes.control}>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" ref={authorInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="text">Text</label>
                    <textarea id="text" rows="5" ref={textInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button className="btn">Add Quote.</button>
                </div>
            </form>
        </Card>
        </Fragment>
    );
};

export default QuoteForm;