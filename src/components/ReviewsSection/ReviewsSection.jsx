import React from 'react';
import { reviewsList } from '../../lib/const';
import './ReviewsSection.css';

export default function ReviewsSection(props) {
    return (
        <section className="Reviews" id='reviews'>
            <div className="Reviews-Container">
                <h3 className="Reviews-Title">Отзывы</h3>
                <ul className="Reviews-List">
                    {reviewsList.map(review => {
                        return <li className="Reviews-Item" key={review.id}>
                            <img src={review.avatar} alt="reviews-avatar" className="Reviews-Item_avatar" />
                            <div className="Revies-Item_content">
                                <div className="Revies-Item_name">{review.name}</div>
                                <div className="Revies-Item_text">
                                    <blockquote>"{review.content}"</blockquote>
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
            <ul className="Reviews-Slider">
                <li className="Reviews-Slider-Item slider-item_active"></li>
                <li className="Reviews-Slider-Item"></li>
                <li className="Reviews-Slider-Item"></li>
                <li className="Reviews-Slider-Item"></li>
                <li className="Reviews-Slider-Item"></li>
            </ul>
        </section>
    )
}
