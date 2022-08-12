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
                                    fallback="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/136785002_114546740528710_630719397401111171_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEq-fk1-k3EHPz3E24iB8dUT6TDNpop-rdPpMM2min6tyODwP-qmNFDODqryYfM4oFoCPaDYLDsRSDDkB-RNSsR&_nc_ohc=VAp09pwqD_sAX9OdQv_&_nc_oc=AQnZqpwBgeBuBETDisKUCdRxbCgGKHuxzBmp2Zjwf7VKrH-l9Bs-tvwsiay1gHs1i2s&_nc_ht=scontent.fbkk5-5.fna&oh=00_AT_iFDtqaw8jXKL2COzJ3IjAXp9-dVe2rdj9mHt837dvjQ&oe=6309A8B2"
                                    src="error"
                                    width={50}
                                    height={50}
                                    style={{ marginTop: -5 }}
                                />
                                <label style={{ paddingLeft: 10, fontSize: 25 }}>Toflyn</label>
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
