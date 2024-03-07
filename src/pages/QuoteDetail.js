import { Fragment, useEffect } from "react";
import {  Link, Outlet, useParams } from "react-router-dom";
import HighlightedQuote from './../components/quotes/HighlightedQuote';
import useHttp from "../hooks/hooks/use-http";
import { getSingleQuote } from "../lib/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
    const params = useParams();
    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner/>
            </div>
        );
    }

    if (error) {
        return (
            <p className="centered">{error}</p>
        );
    }

    if (!loadedQuote.text) {
        return(
            <p>No Quote Found.</p>
        );
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
              <div className="centered">
                <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default QuoteDetail;