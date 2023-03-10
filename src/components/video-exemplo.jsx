import React from 'react';
import '../App.css';

const VideoExemplo = () => (
    <video className='video' autoplay="" controls="" width="100%" muted="">
    <source
        src="https://gravae.s3.amazonaws.com/ArenaTest/quadra07_camera01/watermark-1675536689253-2023-02-04T18-42-11.mp4"
        type="video/mp4" />
    Your browser does not support the video tag.
</video>
);



export default VideoExemplo;