import React, { useEffect, useState } from 'react';
import { Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setPassengersAge, setTicketsQuantity } from '../../actions/tickets';

export default function TicketsQuantity(props) {
    const dispatch = useDispatch();
    let maxTickets = 5;
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);
    const [infantTickets, setInfantTickets] = useState(0);
    let availableTickets = maxTickets - adultTickets - childTickets - infantTickets;
    let totalTickets = Number(adultTickets + childTickets + infantTickets);

    useEffect(() => {
        dispatch(setTicketsQuantity(totalTickets));
        dispatch(setPassengersAge(adultTickets, childTickets, infantTickets));
    }, [totalTickets, adultTickets, childTickets, infantTickets, dispatch]);

    return (
        <div className='ChooseSeats-TicketsQuantity'>
            <div className='TicketsQuantity-title'>Количество билетов</div>
            <Form className='TicketsQuantity-container'>
                <Form.Item className='TicketsQuantity-type'>
                    <Input
                        className='TicketsQuantity-type-quantity'
                        type='number'
                        defaultValue={0}
                        max={5}
                        min={0}
                        value={adultTickets}
                        onChange={(e) => setAdultTickets(Number(e.target.value))}
                        prefix='Взрослых —' />
                    <div className='TicketsQuantity-type-hint'>
                        Можно добавить еще {availableTickets} пассажиров
                    </div>
                </Form.Item>
                <Form.Item className='TicketsQuantity-type'>
                    <Input
                        className='TicketsQuantity-type-quantity'
                        type='number'
                        defaultValue={0}
                        max={5}
                        min={0}
                        value={childTickets}
                        onChange={(e) => setChildTickets(Number(e.target.value))}
                        prefix='Детских —' />
                    <div className='TicketsQuantity-type-hint'>
                        Можно добавить еще {availableTickets} детей до 10 лет. Свое место
                        в вагоне, как у взрослых, но дешевле в среднем
                        на 50-65%
                    </div>
                </Form.Item>
                <Form.Item className='TicketsQuantity-type'>
                    <Input
                        className='TicketsQuantity-type-quantity'
                        type='number'
                        defaultValue={0}
                        max={5}
                        min={0}
                        value={infantTickets}
                        onChange={(e) => setInfantTickets(Number(e.target.value))}
                        prefix='Детских «без места» —' />
                </Form.Item>
            </Form>
        </div>
    )
};
