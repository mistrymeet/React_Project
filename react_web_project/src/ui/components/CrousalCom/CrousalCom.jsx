import React from 'react'
import '../CrousalCom/Crousal.css'
import { Link } from 'react-router-dom'

function CrousalCom() {
    return (
        <>
            <div className='home'>
                <div className='container p-0 font-normal lg-'>
                    <div className='subhome'>
                        <p className='font-medium text-lg sm:text-xs'>Moonsoon offer is live</p>
                        <p className='text-7xl pb-4 content'>Your exclusive sitewide offer awaits</p>
                        <Link to='/SignUp'>
                            <button class="button uppercase font-semibold">
                                Signup now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CrousalCom