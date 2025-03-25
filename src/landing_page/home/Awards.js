import React from 'react'

function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="Awards" style={{width:"90%"}} />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1 className='fs-2 mb-3'>Largest stock broker in India</h1>
                    <p className='mb-3'>2+ million StockGrow clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6 mb-3">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="PressLogos" style={{width:"90%"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;