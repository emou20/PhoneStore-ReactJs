import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

export default class CarrouselHome extends Component {
    render() {
        return (
            <Carousel>
            <img alt="" src="https://cdn.shopify.com/s/files/1/0079/4604/3456/files/Tendance_3_1920x.png?v=1547136408"/>
            <img alt="" src="https://cdn.shopify.com/s/files/1/0079/4604/3456/files/Nouveautes_1920x.png?v=1547722170"/>
            <img alt="" src="https://cdn.shopify.com/s/files/1/0079/4604/3456/files/reso_f1fc1fcc-5eb6-48a0-95f3-cfa0c88932e0_1920x.png?v=1547724154"/>
          </Carousel>
        )
    }
}
