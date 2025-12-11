import React from 'react'
import './direction.css'
import WayItem from './wayItem'
import data from './data'

export default function Direction() {
    return (
        <section className="way animate-on-scroll" id='directions'>
            <div className="way__h">
                <h2>Направления</h2>
            </div>
            <div className="container">
                <div className="wrapper">
                    {data.map((link) => (
                        <WayItem
                            key={link.id}
                            title={link.title}
                            LiItem1={link.LiItem1}
                            LiItem2={link.LiItem2}
                            LiItem3={link.LiItem3}
                            LiItem4={link.LiItem4}
                            ITid={link.ITid}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}