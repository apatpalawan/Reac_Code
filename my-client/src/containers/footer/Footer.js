import { Col, Image, Row } from 'antd';
import React from 'react';

import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <nav
                style={{
                    backgroundColor: "#2C2C2C",
                    color: "white",
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    paddingTop: 50,
                    paddingBottom: 50
                }}
            >
                <Row>
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <Image
                                    fallback="https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/301899831_108854558618037_1763401062116067836_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE6QqRp7ri8xaedrXGohuhPeSH8aMW5DvJ5IfxoxbkO8saHQjiqF8DSyx5EA69MX7NEF5pcMqHAC1NBH5Wcv_kN&_nc_ohc=yWkSFMrPXNYAX-m--4I&_nc_oc=AQnKExzHs9M6XTrfLs4I7oBWS3-4JEbCVACiBiNoCW8BJmBFK_hjrkM5HBvzowBPiGM&_nc_ht=scontent.fbkk5-4.fna&oh=00_AT8mSHf00Oksjrdrx4QzhsDcSUsbp-6DHPvTsby_7RUbNw&oe=63135F9A"
                                    src="error"
                                    width={50}
                                    height={50}
                                    style={{ marginTop: -5 }}
                                />
                                <label style={{ paddingLeft: 10, fontSize: 25 }}>PLearning</label>
                            </Col>
                            <Col span={24} style={{ paddingTop: 12 }}>
                                <span>เเหล่งรวมร้านขายชองเล่น ทั้งมือหนึ่ง เเละมือสอง ที่มากที่สุดในประเทศ</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </nav>
        </footer>
    )
}
