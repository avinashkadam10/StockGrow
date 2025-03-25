import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5'>
            <div className="row text-center">
                <h1 className='mt-3 mb-3'>Open a StockGrow Account</h1>
                <div role="alert">
                    <p className='mb-5 text-muted'>
                        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>
                </div>
                <div className="d-flex justify-content-center">
                    <button className='p-2 mb-5 btn btn-primary fs-5 w-50 w-md-25'>
                        Sign Up for Free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;
