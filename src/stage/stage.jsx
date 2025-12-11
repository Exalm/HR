import React from "react";
import './stage.css'
import StageStep from './stageStep.jsx'
import Data from './data.jsx'

export default function stage() {
    return (
        <section className="stage" id="stages">
            <div className="container">
                <div className="stage__h">
                    <h2>Этапы работы</h2>
                </div>
                <div className="steps">
                    {Data.map((item, index) => (
                        <StageStep
                            key={item.title}
                            title={item.title}
                            dsc={item.dsc}
                            num={item.num}
                            isEven={index % 2 === 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}