import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setOrderSuccess } from '../../actions/order';
import './SuccessPage.css';

export default function SuccessPage(props) {
    const { userData } = useSelector(state => state.order.user);
    const { totalPrice } = useSelector(state => state.tickets);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onRedirectClick = () => {
        dispatch(setOrderSuccess(false));
        navigate('/');
    };

    return (
        <main className="container main">
            <div className="Order-Container Order-Container_success">
                <div className="Order-Success-Modal_container">
                    <div className="Success-Modal-title">Благодарим Вас за заказ!</div>
                    <div className="Success-Modal">
                        <div className="Modal-orderDetails">
                            <div className="Modal-orderDetails_field">
                                <div className="number_fieldName orderDetails_fieldName">№ Заказа</div>
                                <div className="number_fieldValue">{Math.ceil(Math.random() * 1000)}</div>
                            </div>
                            <div className="Modal-orderDetails_field">
                                <div className='price_fieldName orderDetails_fieldName'>Всего</div>
                                <div className="price_fieldValue">
                                    <span className='price_fieldValue-value'>{totalPrice}</span>
                                    <span className='price_fieldValue-rouble'> ₽</span>
                                </div>
                            </div>
                        </div>
                        <div className="Modal-ticketsHint">
                            <ul className="ticketsHint-List">
                                <li className="ticketsHint-Item hint-mail">билеты будут отправлены на ваш e-mail</li>
                                <li className="ticketsHint-Item hint-print">распечатайте и сохраняйте билеты до даты поездки
                                </li>
                                <li className="ticketsHint-Item hint-show">предьявите распечатанные билеты при посадке</li>
                            </ul>
                        </div>
                        <div className="Modal-successMsg">
                            <div className="Modal-successMsg-client">
                                <span className="successMsg-client_name">{`${userData.first_name} ${userData.patronymic}`}</span>
                                <span> !</span>
                            </div>
                            <div className="Modal-successMsg-message">
                                <span>Ваш заказ успешно оформлен.</span>
                                <span>В ближайшее время с вами свяжется наш оператор для подтверждения.</span>
                            </div>
                            <div className="Modal-successMsg-gratitude">
                                Благодарим Вас за оказанное доверие и желаем приятного путешествия!
                            </div>
                        </div>
                        <div className="Modal-rateApp">
                            <div className="Modal-rateApp-field">
                                <div className="rateApp-field_name">Оценить сервис</div>
                                <ul className="rateApp-rating_list">
                                    <li className="rateApp-rating_item btn"></li>
                                    <li className="rateApp-rating_item btn"></li>
                                    <li className="rateApp-rating_item btn"></li>
                                    <li className="rateApp-rating_item btn"></li>
                                    <li className="rateApp-rating_item btn"></li>
                                </ul>
                            </div>
                            <div className="Modal-toMainBtn-container">
                                <button
                                    onClick={onRedirectClick}
                                    className="Modal-toMainBtn btn">Вернуться на главную</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};
