import React from 'react'

function Hero() {
    return ( 
        <div className='container p-3'>
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className='mb-3'/>
                <h1 className='mt-3'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 mb-5 btn btn-primary fs-5' style={{width:"30%", margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;