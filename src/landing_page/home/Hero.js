import React from 'react';

function Hero() {
    return ( 
        <div className='container p-3'>
            <div className="row text-center justify-content-center">
                {/* Image Section */}
                <div className="col-12">
                    <img src="media/images/homeHero.png" alt="Hero Image" className='img-fluid mb-3'/>
                </div>

                {/* Text Content */}
                <div className="col-10 col-md-8">
                    <h1 className='mt-3'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

                    {/* Button */}
                    <button className='p-2 mb-5 btn btn-primary fs-5 w-100 w-md-50'>Sign up for free</button>
                </div>
            </div>
        </div>
     );
}

export default Hero;
