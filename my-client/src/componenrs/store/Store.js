/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Row, Spin } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Cards from '../../containers/Cards';
import Footer from '../../containers/footer/Footer';
import Header from '../../containers/header/Header';
import { getStoreByIdFetch } from './Api/StoreApi';

import StoreDetail from './StoreDetail';
import StoreGallery from './StoreGallery';

export default function Store() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const storeId = params.get("storeId");

    const [storeInfo, setStoreInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    const getBaseApi = async () => {
        setLoading(true);

        const result = await getStoreByIdFetch(storeId);
        setStoreInfo(result);

        setLoading(false);
    }

    useEffect(() => {
        getBaseApi();
    }, []);

    return (
        <>
            <Header />
            <Content style={{ backgroundColor: "#F5F5F5" }}>
                <article>
                    <div style={{ paddingTop: 24, paddingBottom: 24, paddingLeft: '5%', paddingRight: '5%' }}>
                        {!loading ?
                            <Row gutter={[24, 24]}>
                                <Col xs={24} sm={8} md={6} lg={6}>
                                    <Cards data={storeInfo ? storeInfo : null} isShowSingle={true} />
                                </Col>

                                <Col xs={24} sm={16} md={18} lg={18}>
                                    <Row gutter={[0, 24]}>
                                        <Col span={24}>
                                            <StoreDetail data={storeInfo ? storeInfo.storeDetail : "-"} />
                                        </Col>

                                        <Col span={24}>
                                            <StoreGallery data={storeInfo ? storeInfo.storeGallery : []} />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            :
                            <div style={{ padding: '20%' }}>
                                <center><Spin size='large' ></Spin></center>
                            </div>
                        }
                    </div>
                </article>
            </Content>
            <Footer />
        </>
    )
}