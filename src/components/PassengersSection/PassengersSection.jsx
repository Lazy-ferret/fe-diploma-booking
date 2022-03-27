import React from 'react'
import './PassengersSection.css'

export default function PassengersSection(props) {
    return (

        <section className="Order-Result">

            <div className='Order-Passengers-container'>

                {/* <div class='Passenger-Info active'>
            <div class='Passenger-Info-title active'>
                <div class='Passenger-Info-btn active btn'></div>
                <div class='Info-title_value'>Пассажир 1</div>
                <div class='Passenger-Info-btn delete_btn btn'></div>
            </div>

            <div class='Passenger-Info-personalData Passenger-Info_data'>
                <div class='personalData-age'>
                    <select class='personalData-select_age personalData_inputField' name="" id="">
                        <option class='personalData-select_option' value="Взрослый">Взрослый</option>
                        <option class='personalData-select_option' value="Детский">Детский</option>
                    </select>
                </div>

                <div class='personalData-fullName'>
                    <div class='fullName-item_wrapper fullName-surname'>
                        <div class='fullName-item_name'>Фамилия</div>
                        <input type="text" class='fullName-item_input personalData_inputField'
                            value='Мартынюк'/>
                    </div>

                    <div class='fullName-item_wrapper fullName-name'>
                        <div class='fullName-item_name'>Имя</div>
                        <input type="text" class='fullName-item_input personalData_inputField'
                            value='Ирина'/>
                    </div>

                    <div class='fullName-item_wrapper fullName-patronymic'>
                        <div class='fullName-item_name'>Отчество</div>
                        <input type="text" class='fullName-item_input personalData_inputField'
                            value='Эдуардовна'/>
                    </div>

                </div>

                <div class='personalData-birthData'>
                    <div class='gender_wrapper '>
                        <div class='gender_name'>Пол</div>
                        <div class='gender_value-container'>
                            <div class='gender_value-btn btn personalData_inputField'>M</div>
                            <div class='gender_value-btn btn personalData_inputField checked'>Ж</div>
                        </div>
                    </div>

                    <div class='birthday_wrapper'>
                        <div class='birthday_name'>Дата рождения</div>
                        <input type="text" class='birthday_input personalData_inputField'
                            placeholder='ДД/ММ/ГГ'/>
                    </div>
                </div>

                <div class='personalData-mobility'>
                    <input type="checkbox" checked class="mobility_checkbox personalData_inputField btn"/>
                    <label for='mobility-checkbox'>ограниченная подвижность</label>
                </div>
            </div>

            <div class='Passenger-Info-documentData Passenger-Info_data'>

                <div class='documentData-type'>
                    <div class='documentData-type_fieldName'>Тип документа</div>
                    <div class='documentData-type_document personalData_inputField'>Паспорт РФ</div>

                </div>

                <div class='documentData_inputFields documentData-passport'>
                    <div class='passport-item_wrapper'>
                        <div class='passport-item_name'>Серия</div>
                        <input type="text" class='passport-item_input personalData_inputField'
                            placeholder='__ __ __ __'/>
                    </div>
                    <div class='passport-item_wrapper'>
                        <div class='passport-item_name'>Номер</div>
                        <input type="text" class='passport-item_input personalData_inputField'
                            placeholder='__ __ __ __ __ __'/>
                    </div>
                </div>

            </div>

            <div class='Passenger-Info-nextPassenger Passenger-Info_data'>
                <button class='nextPassenger-btn btn'>Следующий пассажир</button>
            </div>


        </div>

        <div class='Passenger-Info active'>
            <div class='Passenger-Info-title active'>
                <div class='Passenger-Info-btn active btn'></div>
                <div class='Info-title_value'>Пассажир 2</div>
                <div class='Passenger-Info-btn delete_btn btn'></div>
            </div>

            <div class='Passenger-Info-personalData Passenger-Info_data'>
                <div class='personalData-age'>
                    <select class='personalData-select_age personalData_inputField' name="" id="">
                        <option class='personalData-select_option' value="Взрослый">Взрослый</option>
                        <option class='personalData-select_option' value="Детский">Детский</option>
                    </select>
                </div>

                <div class='personalData-fullName'>
                    <div class='fullName-item_wrapper fullName-surname'>
                        <div class='fullName-item_name'>Фамилия</div>
                        <input type="text" class='fullName-item_input personalData_inputField' value=''/>
                    </div>

                    <div class='fullName-item_wrapper fullName-name'>
                        <div class='fullName-item_name'>Имя</div>
                        <input type="text" class='fullName-item_input personalData_inputField' value=''/>
                    </div>

                    <div class='fullName-item_wrapper fullName-patronymic'>
                        <div class='fullName-item_name'>Отчество</div>
                        <input type="text" class='fullName-item_input personalData_inputField' value=''/>
                    </div>

                </div>

                <div class='personalData-birthData'>
                    <div class='gender_wrapper '>
                        <div class='gender_name'>Пол</div>
                        <div class='gender_value-container'>
                            <div class='gender_value-btn btn personalData_inputField checked'>M</div>
                            <div class='gender_value-btn btn personalData_inputField'>Ж</div>
                        </div>
                    </div>

                    <div class='birthday_wrapper'>
                        <div class='birthday_name'>Дата рождения</div>
                        <input type="text" class='birthday_input personalData_inputField'
                            placeholder='ДД/ММ/ГГ'/>
                    </div>
                </div>

                <div class='personalData-mobility'>
                    <input type="checkbox" checked class="mobility_checkbox personalData_inputField btn"/>
                    <label for='mobility-checkbox'>ограниченная подвижность</label>
                </div>
            </div>

            <div class='Passenger-Info-documentData Passenger-Info_data'>

                <div class='documentData-type'>
                    <div class='documentData-type_fieldName'>Тип документа</div>
                    <div class='documentData-type_document personalData_inputField'>Свидетельство о рождении
                    </div>

                </div>

                <div class='documentData_inputFields documentData-passport'>
                    <div class='passport-item_wrapper'>
                        <div class='passport-item_name'>Номер</div>
                        <input type="text" class='passport-item_input personalData_inputField'
                            placeholder='12 символов'/>
                    </div>

                </div>

            </div>

            <div class='Passenger-Info-nextPassenger Passenger-Info_data'>
                <button class='nextPassenger-btn btn'>Следующий пассажир</button>
            </div>


        </div> */}

                <div className='Passenger-Info inactive'>
                    <div className='Passenger-Info-title'>
                        <div className='Passenger-Info-btn btn'></div>
                        <div className='Info-title_value'>Пассажир 3</div>
                    </div>
                </div>
                {/* 
        <div class='Passenger-Info add_new_passenger'>
            <div class='Passenger-Info-title'>
                <div class='Info-title_value'>Добавить пассажира</div>
                <div class='Passenger-Info-btn add_btn btn'></div>
            </div>
        </div> */}
            </div>


            {/* <div class="Order-ChooseSeats-btn_container">
        <button class="Order-ChooseSeats-btn btn inactive">Далее</button>
    </div> */}



        </section>


    )
}


