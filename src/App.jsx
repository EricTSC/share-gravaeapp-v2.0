import './App.css';
import backgroundImg from './components/bg-img';
import LogoGravae from './components/LogoGravae';
import VideoExemplo from './components/video-exemplo';
import Ad02 from './components/ad02';
import Ad01 from './components/ad01';
import Carousel from './components/carousel';
import BotaoLoja from './components/botoes';
import BotaoAjuda from './components/botoes-ajuda';
import Footer from './components/footer';

function App() {
  return (
    <>

      <div className='section1'>
        <backgroundImg />

        <LogoGravae />

        <VideoExemplo />

        <BotaoLoja />

        <Ad02 />      

        <BotaoAjuda />

        <Ad01 />

        <Footer />

      </div>

    </>
  );
};

export default App;
