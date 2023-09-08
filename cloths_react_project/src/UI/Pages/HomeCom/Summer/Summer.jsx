import React, { useEffect } from 'react'
import { ProductContext } from '../../../../App'
import ProductData from '../../../utils/ProductData.json'
import CardCom from '../../../Elements/CardCom/CardCom'

function Summer() {
    let product = ProductContext()
    useEffect(() => {
        let filterData = ProductData.sort((a, b) => {
            return b.bestSeller - a.bestSeller
        })
        product.SetProData(filterData.slice(0, 4))
    }, [])
    return (
        <>
            <div className="summer py-20 uppercase ">
                <p className='text-center m-0 drop-shadow-xl'>
                    Summer collection
                </p>
                <h1 className='text-center font-semibold drop-shadow-xl text-3xl pb-4'>
                    Popular T-Shirts
                </h1>
                <div className='flex flex-wrap justify-center gap-4'>
                    {
                        product.prodata.map((e, i) => {
                            return <CardCom key={i} data={e} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Summer