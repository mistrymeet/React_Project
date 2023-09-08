import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HeaderCom from '../../Elements/HeaderCom/HeaderCom';
import Summer from './Summer/Summer';
import CrousalTest from '../../Elements/CrousalCon.jsx/CrousalTest/CrousalTest';
import CrousalCom from '../../Elements/CrousalCon.jsx/CrousalCom';
import Denim from './Denim/Denim';
const { Header, Content, Footer } = Layout;
const HomeCom = () => {
    return (
        <Layout className="layout">
            <HeaderCom />
            <CrousalCom />
            {/* <CrousalTest /> */}
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Summer />
                <Denim />
            </Content>
        </Layout>
    );
};
export default HomeCom;