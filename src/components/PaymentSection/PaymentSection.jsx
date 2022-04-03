import React, { useState } from 'react';
import { Form, Input, Checkbox } from 'antd';
import './PaymentSection.css';
import { useDispatch } from 'react-redux';
import { setOrderStatus, setUser } from '../../actions/order';

export default function PaymentSection(props) {
    const dispatch = useDispatch();
    const initialPassangerState = {
        first_name: '',
        last_name: '',
        patronymic: '',
        phone: '',
        email: '',
        payment_method: 'cash'
    };
    const [userData, setUserData] = useState(initialPassangerState);

    const onFormSubmit = () => {
        dispatch(setUser(userData));
        dispatch(setOrderStatus(4));
    };

    const onFormItemChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...userData, [name]: value });
    };

    const onCheckboxChange = (e) => {
        const value = e.target.name === 'payment_method' ? 'cash' : 'online';
        if (e.target.checked) setUserData({ ...userData, payment_method: value });
    }

    return (
        <section className="Order-Result">
            <Form
                onFinish={onFormSubmit}
                className='Order-Payment-container'>
                <div className='Payment-Info'>
                    <div className='Payment-Info-fieldTitle Payment-Info_data'>
                        <div className='Info-title_value'>Персональные данные</div>
                    </div>
                    <div className='Payment-Info-personalData Passenger-Info_data'>
                        <div className='personalData-fullName Payment-personalData_field'>
                            <Form.Item className='fullName-item_wrapper fullName-surname'>
                                <div className='personalData-fieldName'>Фамилия</div>
                                <Input
                                    name='last_name'
                                    value={userData.last_name}
                                    onChange={onFormItemChange}
                                    required
                                    type="text"
                                    className='fullName-item_input personalData_inputField'
                                    placeholder='Фамилия'
                                />
                            </Form.Item>

                            <Form.Item className='fullName-item_wrapper fullName-name'>
                                <div className='personalData-fieldName'>Имя</div>
                                <Input
                                    name='first_name'
                                    value={userData.first_name}
                                    onChange={onFormItemChange}
                                    required
                                    type="text"
                                    className='fullName-item_input personalData_inputField'
                                    placeholder='Имя'
                                />
                            </Form.Item>

                            <Form.Item className='fullName-item_wrapper fullName-patronymic'>
                                <div className='personalData-fieldName'>Отчество</div>
                                <Input
                                    name='patronymic'
                                    value={userData.patronymic}
                                    onChange={onFormItemChange}
                                    required
                                    type="text"
                                    className='fullName-item_input personalData_inputField'
                                    placeholder='Отчество'
                                />
                            </Form.Item>
                        </div>

                        <Form.Item className='personalData-phone Payment-personalData_field'>
                            <div className='personalData-fieldName'>Контактный телефон</div>
                            <Input
                                name='phone'
                                value={userData.phone}
                                onChange={onFormItemChange}
                                required
                                type="tel"
                                className='fullName-item_input personalData_inputField'
                                placeholder='+7 ___ ___ __ __'
                            />
                        </Form.Item>

                        <Form.Item className='personalData-email Payment-personalData_field'>
                            <div className='personalData-fieldName'>E-mail</div>
                            <Input
                                name='email'
                                value={userData.email}
                                onChange={onFormItemChange}
                                required
                                type="email"
                                className='fullName-item_input personalData_inputField'
                                placeholder='inbox@gmail.ru'
                            />
                        </Form.Item>
                    </div>

                    <div className='Payment-Info-fieldTitle Payment-Info_data'>
                        <div className='Info-title_value'>Способ оплаты</div>
                    </div>
                    <div className='Payment-Info-chooseType Passenger-Info_data'>
                        <Form.Item className='chooseType-checkbox_wrapper'>
                            <Checkbox
                                name='payment_method_online'
                                onChange={onCheckboxChange}
                                className='chooseType-checkbox online_checkbox btn'>
                                Онлайн
                            </Checkbox>

                        </Form.Item>
                        <div className='chooseType-availableTypes'>
                            <div className='availableTypes-item'>Банковской картой</div>
                            <div className='availableTypes-item'>PayPal</div>
                            <div className='availableTypes-item'>Visa QIWI Wallet</div>
                        </div>
                    </div>

                    <div className='Payment-Info-chooseType Passenger-Info_data'>
                        <Form.Item className='chooseType-checkbox_wrapper'>
                            <Checkbox
                                name='payment_method'
                                onChange={onCheckboxChange}
                                className='chooseType-checkbox cash_checkbox btn'
                            >
                                Наличными
                            </Checkbox>
                        </Form.Item>
                    </div>
                </div>

                <div className="Order-Payment-btn_container">
                    <button className="Order-Payment-btn btn">Купить билеты</button>
                </div>
            </Form>
        </section>
    )
};
