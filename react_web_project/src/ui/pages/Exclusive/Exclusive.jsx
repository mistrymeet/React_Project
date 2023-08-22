import React, { useEffect, useState } from 'react'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import FooterCom from '../../components/FooterCom/FooterCom'
import Product from '../../utils/Product.json'
import CardCom from '../../components/CardCom/CardCom'

function Exclusive({ textsearch }) {
    let [productdata, SetProductData] = useState([])
    useEffect(() => {
        let filterData = Product?.filter?.((e) => {
            return e.categories === 'Exclusive' && e?.title?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
        })
        SetProductData(filterData)
    }, [textsearch])
    return (
        <>
            <HeaderCom />
            <div className="site-layout-content flex flex-wrap gap-3 justify-center items-center p-10">
                {
                    productdata?.map?.((e) => {
                        return <CardCom data={e} />
                    })
                }
            </div>
            <FooterCom />
        </>
    )
}

export default Exclusive