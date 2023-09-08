import React, { useContext, useEffect } from 'react'
import '../BestSellerCom/Bestseller.css'
import Product from '../../utils/Product.json'
import { ContextTest } from '../../pages/Router/AniRouter'
import CardCom from '../CardCom/CardCom'

function BestSellerCom() {
    let BestProduct = useContext(ContextTest)
    useEffect(() => {
        let filterdata = Product.sort((a, b) => {
            return b.bestSeller - a.bestSeller
        })
        BestProduct.SetData(filterdata.slice(0, 4))
    }, [])
    return (
        <>
            <div className="bs text-center">
                <h6 className='text-xl font-bold drop-shadow-sm'>Check out our</h6>
                <h1 className='text-6xl drop-shadow-sm'>Best Sellers</h1>
            </div>
            <div className='flex justify-center items-center gap-4 p-10 flex-wrap'>
                {
                    BestProduct.data.map((e) => {
                        return <CardCom data={e} />
                    })
                }
            </div>
        </>
    )
}

export default BestSellerCom