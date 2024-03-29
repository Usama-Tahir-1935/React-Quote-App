import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/hooks/use-http";
import { getAllQuotes } from "../lib/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuoteFound from './../components/quotes/NoQuoteFound';

const AllQuotes = () => {
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner/>
            </div>
        );
    }

    if (error) {
        return (
            <p className="centered focused">{error}</p>
        );
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return (
            <NoQuoteFound/>
        );
    }


    return (
        <QuoteList quotes ={loadedQuotes}/>
    );
};

export default AllQuotes;