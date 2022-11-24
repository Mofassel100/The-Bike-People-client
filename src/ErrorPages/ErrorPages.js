import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPages = () => {
    const error = useRouteError()
    return (
        <div>
        <h1>{error.status}</h1>
        <h2>{error.data.sorry}</h2>
        <p>
           {error.data.hrEmail} 
        </p>
      </div>
    );
};

export default ErrorPages;