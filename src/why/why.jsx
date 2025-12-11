import React from "react";
import "./why.css"
import WhyLi from './why__li.jsx'
import data from './data.jsx'

export default function Why() {
    return (
        <section className="why">
            <div className="container">
                <div className="why__title">
                    <h2>Почему выбирают First Offer</h2>
                </div>
                <div className="why__answer">
                    {data.map((link) => (
                        <WhyLi
                            key={link.title}
                            title={link.title}
                            dsc={link.dsc}
                            icon={link.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}