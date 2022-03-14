import React from 'react';
import '../index.css';

const Sample1 = () => {
  return (
    <div>
    <div className="container h5 ">
        <div className="row row-content align-items-center">
            <div className="col-12 col-sm-4 col-md-3 order-sm-last">
                <h2>Our Lipsmacking Culinary Creations</h2>
            </div>
            <div className='col col-sm col-md order-sm-first'>
                <h2>Uthappizza</h2>
                <p>A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.</p>
            </div>
        </div>


        <div className="row row-content align-items-center ">
            <div className="col-12 col-sm-4 col-md-3 order-sm-last">
                <h2>This Month's Promotions</h2>
            </div>
            <div className='col col-sm col-md order-sm-first'>
                <h2>Weekend Grand Buffet</h2>
                <p>Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person </p>
            </div>
        </div>

        <div className="row row-content align-items-center">
            <div className="col-12 col-sm-4 col-md-3 order-sm-last">
                <h2>Meet our Culinary Specialists</h2>
            </div>
            <div className='col col-sm col-md order-sm-first'>
                <h2>Alberto Somayya</h2>
                <h3>Executive Chef</h3>
                <p>Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. </p>
            </div>
        </div>
    </div>
   
    </div>
  )
}

export default Sample1
