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
                        src: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/136785002_114546740528710_630719397401111171_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEq-fk1-k3EHPz3E24iB8dUT6TDNpop-rdPpMM2min6tyODwP-qmNFDODqryYfM4oFoCPaDYLDsRSDDkB-RNSsR&_nc_ohc=VAp09pwqD_sAX9OdQv_&_nc_oc=AQnZqpwBgeBuBETDisKUCdRxbCgGKHuxzBmp2Zjwf7VKrH-l9Bs-tvwsiay1gHs1i2s&_nc_ht=scontent.fbkk5-5.fna&oh=00_AT_iFDtqaw8jXKL2COzJ3IjAXp9-dVe2rdj9mHt837dvjQ&oe=6309A8B2"
                    }}
                />
            </nav>
        </header>
    )
}
