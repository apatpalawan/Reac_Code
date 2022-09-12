import React, { useEffect, useState } from 'react';
import Header from '../../containers/header/Header';
import Footer from '../../containers/footer/Footer';
import Cards from '../../containers/Cards';
import { Content } from 'antd/lib/layout/layout';
import { Spin } from 'antd';

let json = [
    {
        storeId: 1,
        storeTitle: "ร้านขายรถของเล่น",
        storeSubDescription: "ของรถคุณภาพดี เหมือนจริง เปิดประตูได้ทุกคัน",
        storeCardImage: "https://sv1.picz.in.th/images/2022/07/31/XZVB0V.png",
    },
    {
        storeId: 2,
        storeTitle: "ร้านขาย Lego",
        storeSubDescription: "เรามี Lego ทุกชิ้นส่วน ของ rare หายาก มีขายที่นี่",
        storeCardImage: "https://sv1.picz.in.th/images/2022/07/31/XZ6qIe.png",
    },
    {
        storeId: 3,
        storeTitle: "ร้านขายบ้านขอเล่น",
        storeSubDescription: "เรามีทุกรูปเเบบของบ้าน เเละรับทำบ้านตัวอย่าง ตามความต้องการ ราคาเป็นกันเอง",
        storeCardImage: "https://sv1.picz.in.th/images/2022/07/31/XZVg79.png",
    },
    {
        storeId: 4,
        storeTitle: "ร้านขายตุ๊กตาหมี",
        storeSubDescription: "เรามีทุกขนาด ทุกสี ขนนิ่ม ทำจากขนฝ้ายคุณภาพดี",
        storeCardImage: "https://sv1.picz.in.th/images/2022/07/31/XZHLU0.png",
    },
]

export default function Home() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getBaseApi = () => {
        setLoading(true);
        setList(json);
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
                    <div style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: 24 }}>
                        {!loading ?
                            <Cards data={list} isShowSingle={false}/>
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
