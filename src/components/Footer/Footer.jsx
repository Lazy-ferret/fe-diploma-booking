import React from 'react';
import { useState } from 'react';
import { setSubscription } from '../../lib/api';
import './Footer.css';

export default function Footer() {

  const [mail, setMail] = useState('');

  const onInputChange = (e) => {
    setMail(e.target.value)
  }

  const onInputSubmit = (e) => {
    e.preventDefault();
    setSubscription(mail);
    setMail('');
  }

  const onPageUpBtnClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="Footer container" id='contacts'>

      <div className="Footer-Contacts-container">
        <address className="Footer-Contacts">
          <h4 className="Contacts-Title">Свяжитесь с нами</h4>
          <ul className="Contacts-List">
            <li className="Contacts-Item ">
              <div className="Contacts-Item_logo contacts-phone"></div>
              <div className="Contacts-Item_content">8 (800) 000 00 00</div>
            </li>
            <li className="Contacts-Item">
              <div className="Contacts-Item_logo contacts-mail"></div>
              <div className="Contacts-Item_content">inbox@mail.ru</div>
            </li>
            <li className="Contacts-Item">
              <div className="Contacts-Item_logo contacts-skype"></div>
              <div className="Contacts-Item_content">tu.train.tickets</div>
            </li>
            <li className="Contacts-Item">
              <div className="Contacts-Item_logo contacts-address"></div>
              <div className="Contacts-Item_content">г. Москва<br />
                ул. Московская 27-35<br />555 555</div>
            </li>
          </ul>
        </address>

        <div className="Footer-Subscribe-container">
          <div className="Footer-Subscribe">
            <h4 className="Subscribe-Title">Подписка</h4>
            <form action="submit" className="Subscribe-Form" onSubmit={onInputSubmit}>
              <div className="Subscribe-Form-title">Будьте в курсе событий</div>
              <div className="Subscribe-Input_container">
                <input
                  className="Subscribe-Form-input"
                  type="email"
                  placeholder="e-mail"
                  value={mail}
                  onChange={onInputChange}
                  required
                />
                <button className="Subscribe-Form-button btn">Отправить</button>
              </div>
            </form>
          </div>

          <div className="Footer-Social">
            <h4 className="Social-Title">Подписывайтесь на нас</h4>
            <ul className="Social-List">
              <li className="Social-Item">

                <a href="https://www.youtube.com" className='Social-Item_link social-youtube'>{ }</a>
              </li>
              <li className="Social-Item">
                <a href="https://www.linkedin.com" className='Social-Item_link social-lnkdin'>{ }</a>
              </li>
              <li className="Social-Item">
                <a href="https://www.https://plus.google.com/" className='Social-Item_link social-google'>{ }</a>
              </li>
              <li className="Social-Item">
                <a href="https://www.facebook.com" className='Social-Item_link social-facebook'>{ }</a>
              </li>
              <li className="Social-Item">
                <a href="https://www.twitter.com" className='Social-Item_link social-twitter'>{ }</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="Footer-Logo-container">
        <div className="Footer-Logo">
          <span>Лого</span>
        </div>

        <div className="Footer-PageUpBtn">
          <div className='Footer-PageUpBtn_link btn' onClick={onPageUpBtnClick}></div>
        </div>

        <div className="Footer-Copyright">
          <span>2018 WEB</span>
        </div>
      </div>

    </footer>
  )
}
