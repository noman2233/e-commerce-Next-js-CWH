import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const ReactCarousal = () => {
  return (
    <div className='relative '>
        <Carousel
        className='z-[-1]'
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        interval={5000}
        >
            <div>
            <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" loading='lazy' />
            </div>
            <div>
            <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" loading='lazy' />
                
            </div>
            <div>
            <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" loading='lazy' />
                
            </div>
             <div>
            <img src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" loading='lazy' />
                
            </div>

        </Carousel>


    </div>
  )
}

export default ReactCarousal