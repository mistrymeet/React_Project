import React, { useEffect } from 'react'
import ProductData from '../../utils/ProductData.json'
import { ProductContext } from '../../../App'
import CardCom from '../../Elements/CardCom/CardCom'
import HeaderCom from '../../Elements/HeaderCom/HeaderCom'

function Men() {
    let context = ProductContext()
    useEffect(() => {
        let filterdata = ProductData?.filter?.((e) => {
            return e.gender === 'men' &&
                e?.title?.toLowerCase?.()?.includes?.(context?.textsearch?.toLowerCase?.())
        }, [context.textsearch])
        context.SetProData(filterdata)
    })
    return (
        <>
            <HeaderCom />
            <div className='flex flex-wrap justify-center gap-4 my-12'>
                {
                    context?.prodata?.map?.((e, i) => {
                        return <CardCom key={i} data={e} />
                    })
                }
            </div>
        </>
    )
}

export default Men