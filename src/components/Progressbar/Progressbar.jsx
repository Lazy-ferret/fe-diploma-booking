import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Progressbar.css';

export default function Progressbar(props) {
    const { orderStatus } = useSelector(state => state.order)
    const dispatch = useDispatch()

    const getProgressbarClassName = () => {
        let status = (orderStatus) ? 'Header-Progressbar_order' : ''
        let className = `Header-Progressbar ${status}`
        return className
    }

    const getItemClassName = (number) => {
        let status = (orderStatus >= number) ? 'Progressbar-Item_active' : ''
        let className = `Progressbar-Item ${status}`
        return className
    }

    return (
        <div className={getProgressbarClassName()}>
            {(orderStatus !== 0)  &&
                <>
                    <div className={getItemClassName(1)}>
                        <div className="Progressbar-Item-content">
                            <span className="Progressbar-Item-number">1</span>
                            <span className="Progressbar-Item-name">Билеты</span>
                        </div>
                        <div className="Progressbar-Item-arrow">
                            <svg className="arrow" viewBox="0 0 45 100" preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <polyline points="0,0 30,50 0,100" stroke="white" strokeWidth="1"
                                    vectorEffect="non-scaling-stroke" />
                            </svg>
                        </div>
                    </div>

                    <div className={getItemClassName(2)}>
                        <div className="Progressbar-Item-content">
                            <span className="Progressbar-Item-number">2</span>
                            <span className="Progressbar-Item-name">Пассажиры</span>
                        </div>
                        <div className="Progressbar-Item-arrow">
                            <svg className="arrow" viewBox="0 0 45 100" preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <polyline points="0,0 30,50 0,100" stroke="white" strokeWidth="1"
                                    vectorEffect="non-scaling-stroke" />
                            </svg>
                        </div>
                    </div>

                    <div className={getItemClassName(3)}>
                        <div className="Progressbar-Item-content">
                            <span className="Progressbar-Item-number">3</span>
                            <span className="Progressbar-Item-name">Оплата</span>
                        </div>
                        <div className="Progressbar-Item-arrow">
                            <svg className="arrow" viewBox="0 0 45 100" preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <polyline points="0,0 30,50 0,100" stroke="white" strokeWidth="1"
                                    vectorEffect="non-scaling-stroke" />
                            </svg>
                        </div>
                    </div>

                    <div className={getItemClassName(4)}>
                        <div className="Progressbar-Item-content">
                            <span className="Progressbar-Item-number">4</span>
                            <span className="Progressbar-Item-name">Проверка</span>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}


