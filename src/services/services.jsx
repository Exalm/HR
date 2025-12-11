import React from "react";
import './services.css';
import Data from './data.jsx';
import Card from "./servicesCard.jsx";

export default function Service() {
    return (
        <section className="service" id="services">
            <div className="service__inner">
                <div className="service__title">
                    <h2>Услуги</h2>
                </div>
                <div className="wrapper">
                    {Data.map((link) => (
                        <Card
                            key={link.title}
                            dsc={link.dsc}
                            title={link.title}
                            service__1={link.service__1}
                            service__2={link.service__2}
                            service__3={link.service__3}
                            service__4={link.service__4}
                            service__5={link.service__5}
                            service__6={link.service__6}
                            serviceID={link.serviceID}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}