import { Col, Row } from 'antd'
import { Content } from 'antd/lib/layout/layout'
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
                                    src={"./pl.jpg"}
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
