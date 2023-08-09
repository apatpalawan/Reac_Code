import React from 'react'
import "./Header.css";
import { Button, PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    return (
        <header>
            <nav className="header">
                <PageHeader
                    title="PLearning"
                    extra={[
                        <Button
                            key="1"
                            type="text"
                            onClick={() => navigate("/about")}
                        >About</Button>
                    ]}
                    style={{ 
                        backgroundColor: "white", 
                        margin: 0, 
                        paddingBottom: 5, 
                        paddingLeft: 10, 
                        paddingRight: 5, 
                        paddingTop: 5 
                    }}
                    avatar={{
                        src: "./pl.jpg"
                    }}
                />
            </nav>
        </header>
    )
}
