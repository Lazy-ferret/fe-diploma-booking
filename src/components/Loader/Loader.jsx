import React from 'react';
import './Loader.css';
import loadingImg from './img/loading.gif';

export default function Loader(props) {
  return (
    <div className='Loader-container'>
      <img src={loadingImg} className='Loader-img' alt='loader_img' />
    </div>
  )
};
