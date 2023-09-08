import React, { useEffect, useState } from 'react'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import FooterCom from '../../components/FooterCom/FooterCom'
import Product from '../../utils/Product.json'
import CardCom from '../../components/CardCom/CardCom'
import { motion } from "framer-motion"

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
            <motion.div
                initial={{ opacity: 0, transition: { duration: 0.6 } }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
                <HeaderCom />
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

export default Exclusive