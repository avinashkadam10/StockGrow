import React from 'react';

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* Image Section */}
                <div className="col-12 col-md-6 p-3 p-md-5 text-center">
                    <img src="media/images/largestBroker.svg" alt="Awards" className="img-fluid" />
                </div>

                {/* Text Section */}
                <div className="col-12 col-md-6 p-3 p-md-5">
                    <h1 className='fs-2 mb-3 text-center text-md-start'>Largest stock broker in India</h1>
                    <p className='mb-3 text-center text-md-start'>
                        2+ million StockGrow clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>

                    <div className="row">
                        {/* List 1 */}
                        <div className="col-6">
                            <ul>
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        {/* List 2 */}
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>

                    {/* Press Logos Image */}
                    <div className="text-center text-md-start">
                        <img src="media/images/pressLogos.png" alt="PressLogos" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
