import React, { useEffect } from 'react'
import { Content } from 'antd/es/layout/layout'
import { ProductContext } from '../../../App'
import CardCom from '../../Elements/CardCom/CardCom'
import HeaderCom from '../../Elements/HeaderCom/HeaderCom'
import ProductData from '../../utils/ProductData.json'

function Product() {
    let context = ProductContext()
    useEffect(() => {
        let filterdata = ProductData?.filter?.((e) => {
            return e?.title?.toLowerCase?.()?.includes?.(context?.textsearch?.toLowerCase?.())
        })
        context?.SetProData(filterdata)
    }, [context?.textsearch])
    return (
        <>
            <HeaderCom />
            <Content>
                <div className='flex flex-wrap justify-center gap-4 my-12'>
                    {
                        context?.prodata?.map((e, i) => {
                            return <CardCom key={i} data={e} />
                        })
                    }
                </div>
            </Content>
        </>
    )
}

export default Product