import { Col, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import Footer from '../../containers/footer/Footer'
import Header from '../../containers/header/Header'
export default function About() {
    return (
        <>
            <Header />
            <Content style={{ backgroundColor: "#F5F5F5" }}>
                <article>
                    <div style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: 24 }}>
                        <Row style={{ backgroundColor: 'white', padding: 24 }}>
                            <Col span={24} style={{ textAlign: "center", paddingBottom: 12 }}>
                                <img
                                    src={"https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/136785002_114546740528710_630719397401111171_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEq-fk1-k3EHPz3E24iB8dUT6TDNpop-rdPpMM2min6tyODwP-qmNFDODqryYfM4oFoCPaDYLDsRSDDkB-RNSsR&_nc_ohc=VAp09pwqD_sAX9OdQv_&_nc_oc=AQnZqpwBgeBuBETDisKUCdRxbCgGKHuxzBmp2Zjwf7VKrH-l9Bs-tvwsiay1gHs1i2s&_nc_ht=scontent.fbkk5-5.fna&oh=00_AT_iFDtqaw8jXKL2COzJ3IjAXp9-dVe2rdj9mHt837dvjQ&oe=6309A8B2"}
                                    alt="Snow"
                                    style={{ width: 100, borderRadius: "10px 10px 10px 10px" }}
                                ></img>
                            </Col>
                            <Col span={24} style={{ textAlign: "center", paddingBottom: 12 }}>
                                <h2>เกี่ยวกับเรา</h2>
                            </Col>

                            <Col span={24}>
                                <h3>PLearning is xxxx xxxx xxxx xxxx xxxx</h3>
                                <p>Detail xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx </p>
                                <p>xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx </p>
                                <label>Tel. 09X-XXX-XXXX</label>
                                <br />
                                <label>Email xxxx@plxxx.com</label>
                            </Col>
                        </Row>
                    </div>
                </article>
            </Content>
            <Footer />
        </>
    )
}
