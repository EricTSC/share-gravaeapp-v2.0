import React from 'react';
import Ad02Img from './Images/Ad02 (320x100).png';
import '../App.css';

const Ad02 = () => (
    <div>
        <a href="https://google.com.br" target="_blank">
        <img className='banners-ads' src={Ad02Img} />
        </a>
    </div>
);



export default Ad02;