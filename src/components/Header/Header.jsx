import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Progressbar from '../Progressbar/Progressbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

export default function Header(props) {



  return (

    <header className="container Header">
      <div className="Header-Logo">
        <span>Лого</span>
      </div>

      <nav className="Header-Menu">
        <ul className="Header-Menu_list">
          <li className="Header-Menu_item">
            <HashLink smooth to="/#about" className="Header-Menu_link">О нас</HashLink>
          </li>
          <li className="Header-Menu_item">
            <HashLink smooth to="/#features" className="Header-Menu_link">Как это работает</HashLink>
          </li>
          <li className="Header-Menu_item">
            <HashLink smooth to="/#reviews" className="Header-Menu_link">Отзывы</HashLink>
          </li>
          <li className="Header-Menu_item">
            <HashLink smooth to="/#contacts" className="Header-Menu_link">Контакты</HashLink>
          </li>
        </ul>
      </nav>

      <h1 className="Header-Title">
        <span>Вся жизнь -</span>
        <span className='bold-text'>путешествие!</span>
      </h1>

      {/* <div class="Header-SearchForm_container">
        <form class="Header-SearchForm">
          <div class="SearchForm-Section_container">
            <div class="SearchForm-Section SearchForm_direction">
              <div class="SearchForm-Section_title">Направление</div>
              <div class="SearchForm-Input_container">
                <input type="text" class="SearchForm-Input Input_direction" placeholder="Откуда" />
                  <div class="Input_changeBtn"></div>
                  <input type="text" class="SearchForm-Input Input_direction" placeholder="Куда" />
                  </div>
              </div>

              <div class="SearchForm-Section SearchForm_date">
                <div class="SearchForm-Section_title">Дата</div>
                <div class='SearchForm-Input_container'>
                  <input type="text" class="SearchForm-Input Input_date Input_date_start"
                    placeholder="ДД/ММ/ГГ" />
                    <input type="text" class="SearchForm-Input Input_date Input_date_end"
                      placeholder="ДД/ММ/ГГ" />
                    </div>
                </div>
              </div>

              <button class="SerchForm-Button btn">Найти билеты</button>
            </form>
          </div> */}

      <SearchForm />


      <Progressbar />

    </header>
  )
}
