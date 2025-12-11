// Header.jsx - ТВОЯ структура + БУРГЕР
import React, { useState } from "react";
import './header.css'
import '../root.css'
import home from './img/home.png'
import Header__li from "./header__li";
import navLinks from './data.js'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header__up">
                    <div className="container">

                        <button
                            className="burger-btn"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
                            <ul>
                                {navLinks.map((link) => (
                                    <Header__li
                                        key={link.id}
                                        id={link.id}
                                        li__content={link.li__content}
                                    />
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="header__down">
                <div className="container">
                    <div className="header__down-inner">
                        <div className="header__text">
                            <div className="header__title">
                                <h1>ПОМОЩЬ НОВИЧКАМ
                                    В ТРУДОУСТРОЙСТВЕ
                                    В ВЕДУЩИЕ IT-КОМПАНИИ
                                </h1>
                            </div>
                            <div className="header__dsc">
                                <p>
                                    Начни строить успешную карьеру
                                    всего за 3 месяца благодаря опыту профессиональных
                                    карьерных консультантов
                                </p>
                            </div>
                            <label htmlFor="signup" className="header__btn">
                                Записаться
                            </label>
                            <input type="checkbox" id="signup" />

                        </div>
                        <img src={home} alt="" loading="lazy" className="header__img" />
                    </div>
                </div>
            </div>
        </header>
    )
}
