import React from "react";
import useHistoryPopState from '../hooks/history_popstate/useHistoryPopState';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function HistoryTracker() {

    const location = useLocation();
    const [historyStack, setHistoryStack] = useState([]);

    useHistoryPopState(() => {
        setHistoryStack((prev) => [...prev, path]);
    });

    useEffect(() => {
        setHistoryStack((prev) => [...prev, location.pathname]);
    }, [location.pathname]);

    return (
        <></>
    );
}

export default HistoryTracker;