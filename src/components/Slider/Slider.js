import 'rc-tooltip/assets/bootstrap.css';
import React, { useState } from 'react';
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './slider.css'

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);


const wrapperStyle = {
    width: '100%',
    margin: 'auto',
    color: '#717171'
};



export default () => (

    <div className="slider-valores-div">
        <div style={wrapperStyle}>
            <div className="values-slider">
                <p className="values-slider-title">Valores</p>
            </div>
            <Range
                min={0}
                max={5000}
                defaultValue={[1250, 4098]}
                tipFormatter={value => `R$ ${value}`}
                railStyle={{ backgroundColor: '#EDEDED', height: 6 }}
                handleStyle={{ backgroundColor: '#606060' }}
                dotStyle={{ backgroundColor: '#606060' }}
                activeDotStyle={{ backgroundColor: '#606060' }}
                
            />
        </div>
    </div>
    
);