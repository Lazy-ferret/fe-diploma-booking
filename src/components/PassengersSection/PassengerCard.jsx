import React, { useState } from 'react';
import { Form, Input, Select, Radio, Checkbox } from 'antd';
import { setPassengersList } from '../../actions/order';
import { useDispatch, useSelector } from 'react-redux';

export default function PassengerCard({ seat }) {
    const { Option } = Select;
    const { passengers } = useSelector(state => state.order);
    const dispatch = useDispatch();

    const initialPassangerState = {
        seat_number: seat,
        is_adult: true,
        is_disabled_person: false,
        include_children_seat: false,
        first_name: '',
        last_name: '',
        patronymic: '',
        gender: true,
        birthday: '',
        document_type: 'паспорт',
        document_data: ''
    };

    const [passenger, setPassenger] = useState(initialPassangerState);
    const [passport, setPassport] = useState(true);
    const [passportSeria, setPassportSeria] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [completed, setCompleted] = useState(false);

    const onDocTypeChange = (e) => {
        setPassport(!passport);
        setPassenger({ ...passenger, document_type: e });
    };

    const onPassportDataChange = (e) => {
        e.target.name === 'passport_seria'
            ? setPassportSeria(e.target.value)
            : setPassportNumber(e.target.value);
        e.target.name === 'passport_seria'
            ? setPassenger({ ...passenger, document_data: `${e.target.value} ${passportNumber}` })
            : setPassenger({ ...passenger, document_data: `${passportSeria} ${e.target.value}` });
    };

    const onFormItemChange = (e) => {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setPassenger({ ...passenger, [name]: value });
    };

    const onAgeSelectChange = (e) => {
        setPassenger({ ...passenger, is_adult: e });
    };

    const onFormSubmit = () => {
        setCompleted(true);
        let passengersList = [...passengers];
        if (passengers.length > 0) {
            if (!passengers.find((item) => (item.seat_number === passenger.seat_number))) {
                passengersList.push(passenger);
            } else {
                passengersList = passengers.map((item) => {
                    return (item.seat_number === passenger.seat_number) ? passenger : item
                });
            };
        } else {
            passengersList.push(passenger);
        };
        dispatch(setPassengersList(passengersList));
    };

    return (
        <>
            <div className='Passenger-Info active'>
                <Form onFinish={onFormSubmit}>
                    <div className='Passenger-Info-personalData Passenger-Info_data'>
                        <Form.Item className='personalData-age'>
                            <Select
                                name='is_adult'
                                showArrow={false}
                                defaultValue='Взрослый'
                                onChange={onAgeSelectChange}
                                className='personalData-select_age personalData_inputField'>
                                <Option className='personalData-select_option' value={true}>Взрослый</Option>
                                <Option className='personalData-select_option' value={false}>Детский</Option>
                            </Select>
                        </Form.Item>

                        <div className='personalData-fullName'>
                            <Form.Item className='fullName-item_wrapper fullName-surname'>
                                <div className='fullName-item_name'>Фамилия</div>
                                <Input
                                    name='last_name'
                                    value={passenger.last_name}
                                    onChange={onFormItemChange}
                                    required
                                    type="text"
                                    className='fullName-item_input personalData_inputField'
                                    placeholder='Фамилия'
                                >
                                </Input>
                            </Form.Item>

                            <Form.Item className='fullName-item_wrapper fullName-name'>
                                <div className='fullName-item_name'>Имя</div>
                                <Input
                                    name='first_name'
                                    value={passenger.first_name}
                                    onChange={onFormItemChange}
                                    required
                                    type="text"
                                    className='fullName-item_input personalData_inputField'
                                    placeholder='Имя'
                                >
                                </Input>
                            </Form.Item>

                            <Form.Item className='fullName-item_wrapper fullName-patronymic'>
                                <div className='fullName-item_name'>Отчество</div>
                                <Input
                                    name='patronymic'
                                    value={passenger.patronymic}
                                    onChange={onFormItemChange}
                                    required
                                    type="text"
                                    className='fullName-item_input personalData_inputField'
                                    placeholder='Отчество'
                                >
                                </Input>
                            </Form.Item>
                        </div>

                        <div className='personalData-birthData'>
                            <Form.Item className='gender_wrapper'>
                                <div className='gender_name'>Пол</div>
                                <Radio.Group
                                    name='gender'
                                    onChange={onFormItemChange}
                                    required
                                    className='gender_value-container'>
                                    <Radio.Button
                                        className='gender_value-btn btn personalData_inputField'
                                        value='true'
                                        defaultChecked>
                                        М
                                    </Radio.Button>
                                    <Radio.Button
                                        className='gender_value-btn btn personalData_inputField'
                                        value='false'>
                                        Ж
                                    </Radio.Button>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item className='birthday_wrapper'>
                                <div className='birthday_name'>Дата рождения</div>
                                <Input
                                    name='birthday'
                                    value={passenger.birthday}
                                    onChange={onFormItemChange}
                                    required
                                    type="date"
                                    className='birthday_input personalData_inputField'
                                    placeholder='ДД/ММ/ГГ'
                                >
                                </Input>
                            </Form.Item>
                        </div>

                        <Form.Item className='personalData-mobility'>
                            <Checkbox
                                name='is_disabled_person'
                                onChange={onFormItemChange}
                                className='mobility_checkbox  btn'>ограниченная подвижность</Checkbox>
                        </Form.Item>
                    </div>

                    <div className='Passenger-Info-documentData Passenger-Info_data'>
                        <Form.Item className='documentData-type'>
                            <div className='documentData-type_fieldName'>Тип документа</div>
                            <Select
                                name='document_type'
                                showArrow={false}
                                defaultValue='Паспорт РФ'
                                className='documentData-type_document personalData_inputField'
                                onChange={onDocTypeChange}>
                                <Option value="паспорт">Паспорт РФ</Option>
                                <Option value="свидетельство о рождении">Свидетельство о рождении</Option>
                            </Select>
                        </Form.Item>

                        {passport &&
                            <div className='documentData_inputFields documentData-passport'>
                                <Form.Item className='passport-item_wrapper'>
                                    <div className='passport-item_name'>Серия</div>
                                    <Input
                                        name='passport_seria'
                                        value={passportSeria}
                                        onChange={onPassportDataChange}
                                        required
                                        type="text"
                                        className='passport-item_input personalData_inputField'
                                        placeholder='__ __ __ __'
                                    >
                                    </Input>
                                </Form.Item>
                                <Form.Item className='passport-item_wrapper'>
                                    <div className='passport-item_name'>Номер</div>
                                    <Input
                                        name='passport_number'
                                        value={passportNumber}
                                        onChange={onPassportDataChange}
                                        type="text"
                                        className='passport-item_input personalData_inputField'
                                        placeholder='__ __ __ __ __ __'
                                    >
                                    </Input>
                                </Form.Item>
                            </div>
                        }

                        {!passport &&
                            <div className='documentData_inputFields documentData-passport'>
                                <Form.Item className='passport-item_wrapper'>
                                    <div className='passport-item_name'>Номер</div>
                                    <Input
                                        name='document_data'
                                        value={passenger.document_data}
                                        onChange={onFormItemChange}
                                        required
                                        type="text"
                                        className='passport-item_input personalData_inputField'
                                        placeholder='12 символов'
                                    >
                                    </Input>
                                </Form.Item>
                            </div>
                        }
                    </div>

                    <div className={`Passenger-Info-nextPassenger Passenger-Info_data ${completed ? 'success' : ''}`} >
                        {completed &&
                            <div className='nextPassenger-successMsg_wrapper'>
                                <div className='Passenger-Info-btn success btn'></div>
                                <div className='nextPassenger-successMsg'>Готово</div>
                            </div>
                        }

                        {!completed &&
                            <button
                                type='submit'
                                className='nextPassenger-btn btn'>
                                Следующий пассажир
                            </button>}
                    </div>
                </Form>
            </div>
        </>
    )
};
