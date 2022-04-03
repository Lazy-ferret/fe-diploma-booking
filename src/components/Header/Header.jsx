import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import { setOrderStatus } from '../../actions/order';
import Progressbar from '../Progressbar/Progressbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

export default function Header(props) {
  const { orderStatus, orderSuccess } = useSelector(state => state.order);
  const dispatch = useDispatch();

  const onLinkClick = () => {
    dispatch(setOrderStatus(0))
  };

  const getHeaderClassName = () => {
    let status = (orderStatus) ? 'Header_order' : '';
    let success = (orderSuccess) ? 'Header_success' : '';
    let className = `container Header ${status} ${success}`;
    return className;
  };

  return (
    <header className={getHeaderClassName()}>
      <div className="Header-Logo">
        <span>Лого</span>
      </div>

      <nav className="Header-Menu">
        <ul className="Header-Menu_list">
          <li className="Header-Menu_item">
            <HashLink
              smooth
              to="/#about"
              className="Header-Menu_link"
              onClick={onLinkClick}>О нас</HashLink>
          </li>
          <li className="Header-Menu_item">
            <HashLink
              smooth
              to="/#features"
              className="Header-Menu_link"
              onClick={onLinkClick}>Как это работает</HashLink>
          </li>
          <li className="Header-Menu_item">
            <HashLink
              smooth
              to="/#reviews"
              className="Header-Menu_link"
              onClick={onLinkClick}>Отзывы</HashLink>
          </li>
          <li className="Header-Menu_item">
            <HashLink
              smooth
              to="/#contacts"
              className="Header-Menu_link"
              onClick={onLinkClick}>Контакты</HashLink>
          </li>
        </ul>
      </nav>

      {!orderStatus && !orderSuccess &&
        <h1 className="Header-Title">
          <span>Вся жизнь -</span>
          <span className='bold-text'>путешествие!</span>
        </h1>}

      {!orderSuccess &&
        <SearchForm />}

      {!orderSuccess &&
        <Progressbar />
      }
    </header>
  )
};
