import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
    
            <div className="header py-16 px-32 w-full h-screen flex items-center justify-center flex-col">
                <h1 className='text-6xl font-bold text-center'><span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-sky-500'>Develop, hire and work at </span>  <br /> <span className='text-7xl text-sky-400'>DevJobs</span></h1>
                <p className='text-xl my-5 font-bold'>Where you can find a suitable job, employee or develop yourself</p>

                <div className="flex gap-5 my-5">
                    <Link href="/signup">
                        <button type="button" className="py-3 rounded-lg px-10 bg-gradient-to-r from-sky-400 to-blue-500 ">
                            Get Started
                        </button>
                    </Link>
                    <Link href="/about">
                        <button type="button" className="py-3 rounded-lg px-10 bg-gradient-to-r  flex gap-2">
                            Learn More  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </div >

        </div>
    )
}

export default Hero