import React, { Fragment } from "react";
import classes from "./QuoteList.module.css";
import QuoteItem from "./QuoteItem";
import { useLocation, useNavigate } from "react-router-dom";

const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};


const QuoteList = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const isSortingAscending = queryParams.get('sort') === 'asc';

    const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

    const changeSortHandler = () => {
        navigate('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
    };

    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={changeSortHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
            </div>
            <ul className={classes.list}>
                {sortedQuotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default QuoteList;
