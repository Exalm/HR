import React from "react";

export default function card({ title, dsc, service__1, service__2, service__3, service__4, service__5, service__6}) {
    return (
        <article className="card">
            <div className="card__title"><p>{title}</p></div>
            <div className="card__dsc"><p>{dsc}</p></div>
            <div className="list">
                <ul>
                    <li>{service__1}</li>
                    <li>{service__2}</li>
                    <li>{service__3}</li>
                    <li>{service__4}</li>
                    <li>{service__5}</li>
                    <li>{service__6}</li>
                </ul>
            </div>
            <input type="button" id="choice" className="service__btn-none" />
            <label htmlFor="choice" className="service__btn">выбрать</label>
        </article>
    )
}