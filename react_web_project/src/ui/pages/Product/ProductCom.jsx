import React, { useContext, useState } from 'react'
import CardCom from '../../components/CardCom/CardCom.jsx'
import { theme } from 'antd';
import HeaderCom from '../../components/HeaderCom/HeaderCom.jsx';
import FooterCom from '../../components/FooterCom/FooterCom.jsx';
import { ContextTest } from '../../../App';

function ProductCom() {
    let ProductData = useContext(ContextTest)

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <HeaderCom />
            <div className="site-layout-content flex flex-wrap gap-3 justify-center items-center"
                style={{
                    background: colorBgContainer,
                    padding: '10px'
                }}>
                {
                    ProductData?.data?.map?.((e) => {
                        return <CardCom data={e} />
                    })
                }
            </div>
            <FooterCom />
        </>
    )
}

export default ProductCom