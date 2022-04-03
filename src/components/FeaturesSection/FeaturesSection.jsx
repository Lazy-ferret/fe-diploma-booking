import React from 'react';
import './FeaturesSection.css';

export default function FeaturesSection(props) {
    return (
        <section className="Features-Container" id='features'>
            <h3 className="Features-Title">Как это работает</h3>
            <button className="Features-Button btn">Узнать больше</button>
            <ul className="Features-List">
                <li className="Features-Item feature-order">Удобный заказ <br />на сайте</li>
                <li className="Features-Item feature-office">Нет необходимости ехать в офис</li>
                <li className="Features-Item feature-directions">Огромный выбор направлений</li>
            </ul>
        </section>
    )
};
