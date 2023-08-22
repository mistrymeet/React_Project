import React, { useEffect, useState } from 'react'
import Project from '../../utils/Product.json'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import FooterCom from '../../components/FooterCom/FooterCom'
import CardCom from '../../components/CardCom/CardCom'
import BestSellerCom from '../../components/BestSellerCom/BestSellerCom'

function Men(props) {
    let [productdata, SetProductData] = useState([])

    useEffect(() => {
        let filterData = Project?.filter?.((e) => {
            return e?.gender === 'men' && e?.title?.toLowerCase?.()?.includes?.(props?.textsearch?.toLowerCase?.())
        })
        SetProductData(filterData)
    }, [props.textsearch])
    return (
        <>
            <HeaderCom />
            {/* <BestSellerCom /> */}
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

export default Men