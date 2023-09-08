import React, { useEffect, useState } from 'react'
import Project from '../../utils/Product.json'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import FooterCom from '../../components/FooterCom/FooterCom'
import CardCom from '../../components/CardCom/CardCom'
import BestSellerCom from '../../components/BestSellerCom/BestSellerCom'
import { motion } from "framer-motion"


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
            <motion.div
                initial={{ opacity: 0, transition: { duration: 0.6 } }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
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
            </motion.div>
        </>
    )
}

export default Men