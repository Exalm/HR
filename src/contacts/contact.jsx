import React from "react";
import './contact.css'

export default function contact() {
    return (
        <section className="contact" id="contacts">
            <div className="container">
                <div className="contact__title">
                    <h2>Контакты</h2>
                </div>
                <div className="contact__inner">
                    <div className="contact__text">
                        <div className="contact-subtitle">
                            <p>Готовы начать путь в IT? Наши эксперты помогут выбрать
                                направление и составить индивидуальный план обучения.</p>
                        </div>
                        <div className="contact__tel">
                            <svg width="30" height="30" viewBox="0 0 30 30">
                                <path
                                    fill="#3b5998"
                                    d="M6 3c1.32 0 2.64 0 4 0C11.81 5.19 11.81 5.19 13 8c-.29 1.68-.62 3.35-1 5 .56 2.28.56 2.28 2 4 2.34 1.01 3.51 1.16 5.94.38C22 17 22 17 24.75 18.44 25.49 18.95 26.23 19.47 27 20c-.88 4.88-.88 4.88-2 6-3.83.64-5.89.64-9.29-1.32C10.06 21.21 5.45 17.38 3 12 .56 8.19.56 8.19 1 5c.66-.66 1.32-1.32 2-2Z"
                                />
                            </svg> {/* код svg изображения: трубки */}
                            <p>+7-(999)-999-99-99</p>
                        </div>
                        <div className="contact__email">
                            <svg width="30" height="30" fill="#3b5998" viewBox="0 0 30 26">
                                <path d="M0 0 C9.9 0 19.8 0 30 0 C30 7.26 30 14.52 30 22 C20.1 22 10.2 22 0 22 C0 14.74 0 7.48 0 0 Z M2 2 C4.93 4.93 7.68 7.67 10.81 10.31 C11.42 10.82 12.02 11.34 12.64 11.86 C13.32 12.43 14 13 17.5 11.44 20.27 9.34 23.25 6.94 24.14 6.22 25.03 5.51 25.95 4.78 28 3 C28 2.67 28 2.34 28 2 C19.42 2 10.84 2 2 2 Z M2 6 C2 10.62 2 15.24 2 20 C10.58 20 19.16 20 28 20 C28 15.38 28 10.76 28 6 C26.14 7.39 24.25 8.81 21.5 10.88 18.75 12.94 16 15 12.72 13.52 10.11 11.62 7.31 9.38 2 6 Z" />
                            </svg> {/* код svg изображения: email */}

                            <p>example@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact__input">
                        <input className='name' id='name' type="text" maxLength={25} placeholder="Имя" /> {/* поле ввода имени пользователя*/}
                        <input className='tel' id="tel" type="tel" inputMode="tel" maxLength={15} placeholder="Телефон" /> {/* поле ввода номера телефона пользователя*/}
                        <input className='email' id="email" type="email" inputMode="email" maxLength={35} placeholder="Email" /> {/* поле ввода email пользователя*/}
                        <input type="button" id="choice" className="contact__btn-none" /> {/* кнопка отправки сообщения формы */}
                        <label htmlFor="choice" className="contact__btn">Отправить</label>
                    </div>
                </div>
            </div>
        </section>
    )
}