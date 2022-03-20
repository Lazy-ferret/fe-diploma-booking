import avatar1 from '../img/reviews-avatar1.png';
import avatar2 from '../img/reviews-avatar2.png';
import wi_fi from '../img/wi_fi-icon.png';
import express from '../img/express-icon.png';
import coffee from '../img/coffee-icon.png';

import firstClassIcon from '../img/first_class-icon.png';
import secondClassIcon from '../img/second_class-icon.png';
import thirdClassIcon from '../img/third_class-icon.png';
import fourthClassIcon from '../img/fourth_class-icon.png';

export const reviewsList = [
    {
        id: 1,
        avatar: avatar1,
        name: 'Екатерина Вальнова',
        content: 'Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/ д билет, даже если вы заказываете онлайн билет впервые.',

    },
    {
        id: 2,
        avatar: avatar2,
        name: 'Евгений Стрыкало',
        content: 'СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.',

    },
];

export const featuresList = [
    {
        name: 'have_wifi',
        src: wi_fi,
        alt: 'wi_fi-icon'
    },
    {
        name: 'is_express',
        src: express,
        alt: 'express-icon'
    },
    {
        name: 'have_coffee',
        src: coffee,
        alt: 'coffee-icon'
    }
]

export const featuresFilterList = [
    {
        name: 'have_second_class',
        title: 'Купе',
        src: secondClassIcon,
        alt: 'second_class-icon'
    },
    {
        name: 'have_third_class',
        title: 'Плацкарт',
        src: thirdClassIcon,
        alt: 'third_class-icon'
    },
    {
        name: 'have_fourth_class',
        title: 'Сидячий',
        src: fourthClassIcon,
        alt: 'fourth_class-icon'
    },
    {
        name: 'have_first_class',
        title: 'Люкс',
        src: firstClassIcon,
        alt: 'first_class-icon'
    },      
    {
        name: 'have_wifi',
        title: 'WI-FI',
        src: wi_fi,
        alt: 'wi_fi-icon'
    },
    {
        name: 'is_express',
        title: 'Экспресс',
        src: express,
        alt: 'express-icon'
    } 
]

