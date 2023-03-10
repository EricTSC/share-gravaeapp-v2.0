import React from 'react';
import '../App.css';
import iconApple from './Images/Apple-Store-icon.svg';
import iconAndroid from './Images/Playstore-icon.svg';

const BotaoLoja = () => (
    <div className='section1'>
        <a href="https://www.apple.com/br/app-store/" target="_blank">
            <button>
                <object className="icons" data={iconApple} type=""></object>
                Baixe o app para iPhone
            </button>
        </a>
        <a href="https://play.google.com/store/games?hl=pt_BR" target="_blank">
            <button>
                <object className="icons" data={iconAndroid} type=""></object>
                Baixe o app para Android
            </button>
        </a>
    </div>
);



export default BotaoLoja;
