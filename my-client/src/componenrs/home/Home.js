import { Spin } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react'
import Cards from '../../containers/Cards';
import Footer from '../../containers/footer/Footer';
import Header from '../../containers/header/Header';
import { getStoreAllFetch } from './Api/HomeApi';
export default function Home() {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getBaseApi = async () => {
        setLoading(true);

        const result = await getStoreAllFetch();
        setList(result);

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
                            <Cards data={list} isShowSingle={false} />
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
