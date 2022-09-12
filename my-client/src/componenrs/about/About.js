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
                                    src={"https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/301899831_108854558618037_1763401062116067836_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE6QqRp7ri8xaedrXGohuhPeSH8aMW5DvJ5IfxoxbkO8saHQjiqF8DSyx5EA69MX7NEF5pcMqHAC1NBH5Wcv_kN&_nc_ohc=yWkSFMrPXNYAX-m--4I&_nc_oc=AQnKExzHs9M6XTrfLs4I7oBWS3-4JEbCVACiBiNoCW8BJmBFK_hjrkM5HBvzowBPiGM&_nc_ht=scontent.fbkk5-4.fna&oh=00_AT8mSHf00Oksjrdrx4QzhsDcSUsbp-6DHPvTsby_7RUbNw&oe=63135F9A"}
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
