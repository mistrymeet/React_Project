import React, { createContext, useEffect, useState } from 'react';
import { Layout, theme } from 'antd';
import HeaderCom from '../../components/HeaderCom/HeaderCom';
import CrousalCom from '../../components/CrousalCom/CrousalCom';
import FooterCom from '../../components/FooterCom/FooterCom';
import CardCom from '../../components/CardCom/CardCom';
import Product from '../../utils/Product.json'
import ProductCom from '../Product/ProductCom';
import Men from '../Men/Men';
import FragranceCom1 from '../../components/Fragnance1/FragranceCom1';
import FragranceCom2 from '../../components/Fragnance2/FragnanceCom2';
import BestSellerCom from '../../components/BestSellerCom/BestSellerCom';
import DiscoverCom from '../../components/DiscoverCom/DiscoverCom';
import ModelCom from '../../components/ModelCom/ModelCom';
import CategoryCom from '../../components/CategoryCom/CategoryCom';

export const ContextSearch = createContext()

const { Content } = Layout;
const HomeCom = () => {
    return (
        <>
            <Layout className="layout">
                <HeaderCom />
                <Content>
                    <CrousalCom />
                    <FragranceCom1 />
                    <FragranceCom2 />
                    <BestSellerCom />
                    <DiscoverCom />
                    <ModelCom />
                    <CategoryCom />
                </Content>
                <FooterCom />
            </Layout>
        </>
    );
};
export default HomeCom;