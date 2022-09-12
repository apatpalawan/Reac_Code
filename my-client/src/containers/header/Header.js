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
                        src: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/301899831_108854558618037_1763401062116067836_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE6QqRp7ri8xaedrXGohuhPeSH8aMW5DvJ5IfxoxbkO8saHQjiqF8DSyx5EA69MX7NEF5pcMqHAC1NBH5Wcv_kN&_nc_ohc=yWkSFMrPXNYAX-m--4I&_nc_oc=AQnKExzHs9M6XTrfLs4I7oBWS3-4JEbCVACiBiNoCW8BJmBFK_hjrkM5HBvzowBPiGM&_nc_ht=scontent.fbkk5-4.fna&oh=00_AT8mSHf00Oksjrdrx4QzhsDcSUsbp-6DHPvTsby_7RUbNw&oe=63135F9A"
                    }}
                />
            </nav>
        </header>
    )
}
