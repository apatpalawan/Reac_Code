/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Row, Spin } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Cards from '../../containers/Cards';
import Footer from '../../containers/footer/Footer';
import Header from '../../containers/header/Header';

// import { getStoreByIdFetch } from './Api/StoreApi';
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

        const result = [
            {
                "storeId": 1,
                "storeTitle": "ร้านขายรถของเล่น",
                "storeSubDescription": "ของรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
                "storeDetail": "xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx",
                "storeCardImage": "https://sv1.picz.in.th/images/2022/07/31/XZVB0V.png",
                "storeGallery": [
                    {
                        "id": 1,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZV48N.png"
                    },
                    {
                        "id": 2,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZVfcQ.png"
                    },
                    {
                        "id": 3,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZVh2S.png"
                    },
                    {
                        "id": 4,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZVkyn.png"
                    },
                    {
                        "id": 5,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZV9Tg.png"
                    }
                ]
            },
            {
                "storeId": 2,
                "storeTitle": "ร้านขาย Lego",
                "storeSubDescription": "เรามี Lego ทุกชิ้นส่วน ของ rare หายาก มีขายที่นี่",
                "storeDetail": "xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx",
                "storeCardImage": "https://sv1.picz.in.th/images/2022/07/31/XZ6qIe.png",
                "storeGallery": [
                    {
                        "id": 1,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZ6Uut.png"
                    },
                    {
                        "id": 2,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZ6Ewl.png"
                    },
                    {
                        "id": 3,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZ6ODk.png"
                    },
                    {
                        "id": 4,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZ6bJv.png"
                    },
                    {
                        "id": 5,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZ6lhE.png"
                    }
                ]
            },
            {
                "storeId": 3,
                "storeTitle": "ร้านขายบ้านขอเล่น",
                "storeSubDescription": "เรามีทุกรูปเเบบของบ้าน เเละรับทำบ้านตัวอย่าง ตามความต้องการ ราคาเป็นกันเอง",
                "storeDetail": "xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx",
                "storeCardImage": "https://sv1.picz.in.th/images/2022/07/31/XZVg79.png",
                "storeGallery": [
                    {
                        "id": 1,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZVZ8D.png"
                    },
                    {
                        "id": 2,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZVicJ.png"
                    },
                    {
                        "id": 3,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZVR2b.png"
                    },
                    {
                        "id": 4,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZVxFf.png"
                    },
                    {
                        "id": 5,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZVUTa.png"
                    }
                ]
            },
            {
                "storeId": 4,
                "storeTitle": "ร้านขายตุ๊กตาหมี",
                "storeSubDescription": "เรามีทุกขนาด ทุกสี ขนนิ่ม ทำจากขนฝ้ายคุณภาพดี",
                "storeDetail": "xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx xxxx xxxx xxxx xx xxxx xx xx",
                "storeCardImage": "https://sv1.picz.in.th/images/2022/07/31/XZHLU0.png",
                "storeGallery": [
                    {
                        "id": 1,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZHJNR.png"
                    },
                    {
                        "id": 2,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZHeru.png"
                    },
                    {
                        "id": 3,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZHy0Z.png"
                    },
                    {
                        "id": 4,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZHFZI.png"
                    },
                    {
                        "id": 5,
                        "imageUrl": "https://sv1.picz.in.th/images/2022/07/31/XZHIsP.png"
                    }
                ]
            }
        ] // await getStoreByIdFetch(storeId);
        let tmp = result.filter(val => val.storeId === Number(storeId))[0];
        setStoreInfo(tmp);

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