import React, { Component } from 'react';
import BestSellers from "./BestSellers";
import PromotionHome from "./PromotionHome";
import CarrouselHome from "./CarrouselHome"

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="mainContainer">
                    <CarrouselHome />
                    <BestSellers />
                    <PromotionHome />
                </div>
            </div>
        )
    }
}
