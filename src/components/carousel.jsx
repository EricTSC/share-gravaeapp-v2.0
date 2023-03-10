import React from 'react';
import ImgArena1 from './Images/Arena 01.png';
import ImgArena2 from './Images/Arena 02.png';
import '../App.css';

const Carousel = () => (
        <section class="section2">
                <div class="text-box">
                        <h1>Arenas</h1>
                        <p>Veja onde encontrar o Gravae</p>
                </div>
                <div class="container">
                        <div class="gallery-wrapper">
                                <div class="gallery">
                                        <ul class="slides">
                                                <li class="item">
                                                        <img src={ImgArena1} />
                                                        <h2>Nome da Arena</h2>
                                                        <div style="display: flex; flex-direction: row; margin: -0.3rem;">
                                                                <object class="local-icon" data="./Images/Icon Local.svg" type=""></object>
                                                                <p>Bairro, Cidade-UF</p>
                                                        </div>
                                                </li>
                                                <li class="item">
                                                        <img src={ImgArena2} />
                                                        <h2>Nome da Arena</h2>
                                                        <div style="display: flex; flex-direction: row; margin: -0.3rem;">
                                                                <object class="local-icon" data="./Images/Icon Local.svg" type=""></object>
                                                                <p>Bairro, Cidade-UF</p>
                                                        </div>
                                                </li>
                                                <li class="item">
                                                        <img src={ImgArena1} />
                                                        <h2>Nome da Arena</h2>
                                                        <div style="display: flex; flex-direction: row; margin: -0.3rem;">
                                                                <object class="local-icon" data="./Images/Icon Local.svg" type=""></object>
                                                                <p>Bairro, Cidade-UF</p>
                                                        </div>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </div>
        </section>
);

export default Carousel;