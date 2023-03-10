import React from 'react';
import Ad01Img from './Images/Ad01 (320x50).png';
import '../App.css';

const Ad01 = () => (
    <div>
        <a href="https://google.com.br" target="_blank">
        <img className='banners-ads' src={Ad01Img} />
        </a>
    </div>
);



export default Ad01;