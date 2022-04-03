import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
    return (
        <section className="AboutSection-Container" id='about'>
            <h3 className="AboutSection-Title">О нас</h3>
            <div className="AboutSection-Content">
                <div className="AboutSection-Content-rectangle"></div>
                <div className="AboutSection-Content-text">
                    <p>Мы рады видеть вас! Мы работаем для Вас с 2003 года. 19 лет мы наблюдаем, как с каждым днем
                        все больше людей заказывают жд билеты через интернет.</p>
                    <p>Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?
                        Мы расскажем о преимуществах заказа через интернет.</p>
                    <p>Покупать жд билеты дешево можно за 90 суток до отправления поезда.
                        Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
                </div>
            </div>
        </section>
    )
};
