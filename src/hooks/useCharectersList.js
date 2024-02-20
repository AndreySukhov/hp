import {useEffect, useState} from "react";
import {API_URL} from "../utils/constants.js";
import {formatCharecter} from "../utils/formatters.js";

export const useCharectersList = (url, statuses) => {
    const [status, setStatus] = useState(statuses.loading);
    const [pagination, setPagination] = useState(null);
    const [results, setResults] = useState([]);

    useEffect(() => {
        setStatus(statuses.loading)
        const handleSearch = async () => {
            const rawResult = await fetch(url);
            const result = await rawResult.json();
            setStatus(statuses.success)
            setPagination(null)
            setResults(result.data.map((char) => formatCharecter(char)))
            setPagination(result.meta.pagination)
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
        if (url) {
            handleSearch()
        }
    }, [url, setPagination]);

    return {
        status,
        pagination,
        results,
        setPagination
    }
}