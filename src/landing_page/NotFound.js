import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5'>
            <div className="row text-center">
                <h1 className='mt-3 mb-3'>404 Not Found</h1>
                <div role="alert">
                    <p className='mb-5'>Sorry, the page you're looking for does not exist.</p>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to="/">
                        <button className='p-2 mb-5 btn btn-primary fs-5 w-50 w-md-25'>Go to Home Page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
