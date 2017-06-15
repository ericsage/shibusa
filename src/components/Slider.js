import React from 'react';
import './Slider.css'

function onChange(ev, handleChange){
  const el = ev.target.parentElement.getElementsByClassName('Shibusa-Slider-fill')[0]
  const ma = ev.target.max || 100;
  const mi = ev.target.min || 0;
  const va = parseInt(ev.target.value);
  const perc = 100 * (va - mi) / (ma - mi);
  el.style.width = perc + "%";
  handleChange && handleChange(ev)
}

export default function Slider(props) {
  const css = {width: (props.value || 50) + '%'}
  return (
    <div className='Shibusa-Slider' style={{display: "flex"}} >
    <div className="Shibusa-Slider">
    {!props.disabled &&
      <div
        className="Shibusa-Slider-fill"
        style={css}
      />}
      <input
        className="Shibusa-Slider-control"
        onChange={(e) => onChange(e, props.onChange)}
        type="range"
        {...props}
        />
    </div>
    </div>
  )
}

