import React, { useContext, useState } from 'react'
import CardCom from '../../components/CardCom/CardCom.jsx'
import { theme } from 'antd';
import HeaderCom from '../../components/HeaderCom/HeaderCom.jsx';
import FooterCom from '../../components/FooterCom/FooterCom.jsx';
import { ContextTest } from '../Router/AniRouter.jsx';
import { motion } from "framer-motion"

function ProductCom() {
    let ProductData = useContext(ContextTest)

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <motion.div
                initial={{ opacity: 0, transition: { duration: 0.6 } }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
                <HeaderCom />
                <div className="site-layout-content flex flex-wrap gap-3 justify-center items-center"
                    style={{
                        background: colorBgContainer,
                        padding: '10px'
                    }}>
                    {
                        ProductData?.data?.map?.((e, i) => {
                            return <CardCom key={i} data={e} />
                        })
                    }
                </div>
                <FooterCom />
            </motion.div>
        </>
    )
}

export default ProductCom