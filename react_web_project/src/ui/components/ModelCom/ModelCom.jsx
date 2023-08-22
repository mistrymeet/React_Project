import React from 'react'
import '../ModelCom/Model.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ModelCom() {
    return (
        <>
            <div className='model mb-36'>
                <Container>
                    <div className='backg'></div>
                    <div className='modelinfo text-white drop-shadow-lg'>
                        <h5 className='font-semibold tracking-wider'>eau de toilette</h5>
                        <h1 className='text-6xl m-0 
                        sm:text-2xl'
                        >perfume</h1>
                        <h1 className='text-6xl m-0
                        sm:text-2xl'
                        >reflective</h1>
                        <h1 className='text-6xl mb-2
                        sm:text-2xl'
                        >edition</h1>
                        <div className='para text-lg font-extrabold pb-3
                        sm:text-sm'
                            style={{ width: '35%' }}
                        >
                            <p >This floral-fresh-ambery fragrance in 6 facets reveals itself in a unique way on every woman. Because each woman has her own special allure.</p>
                        </div>
                        <Link to='/Products'>
                            <button class="button uppercase font-bold text-base">
                                Shop now
                            </button>
                        </Link>
                    </div>
                    <div className='absol'>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ModelCom