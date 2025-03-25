import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5'>
            <div className="row text-center">
                <h1 className='mt-3 mb-3'>404 Not Found</h1>
                <p className='mb-5'>Sorry, the page your looking for does not exist</p>
                <Link to="/">
                 <button className='p-2 mb-5 btn btn-primary fs-5' style={{width:"30%", margin:"0 auto"}}>Go to Home Page</button>
                </Link>
            </div>
        </div>
     );
}

export default NotFound;