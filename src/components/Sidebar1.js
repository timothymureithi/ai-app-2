import React from 'react';
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { data } from "./data";


function Sidebar1() {
    const [selected, setSelected] = useState(null);
    const [selectedSlide, setSelectedSlide] = useState(0);
  
    const handleClick = e => {
      let value = e.target.getAttribute('data-value')
      if (value !== null) {
        setSelectedSlide(value);
      }
    };
  
    const style =
      selectedSlide >= 1
        ? { transform: `translateX(-${selectedSlide * 300}px)` }
        : {};
  
    const renderIndicator = []
    for(let i=0; i<3; i++) {
      renderIndicator.push(
        <li data-value={i} key={i} className={selectedSlide === i ? 'active' : ''}></li>
      )
    }
  
  //
    const toggler = (id) => {
      if (selected === id) {
        return setSelected(null);
      }
      setSelected(id);
    };
  return (
    <div className="hg-sidebar hg-sidebar-1">
         <div className='nav-header'>
          <h2>How can I help you</h2>
          <div className="container">
        <div className="accordion">
          {data.map((item, index) => (
            <div key={item.question} className="accordion-item">
              <div className="accordion-header" onClick={() => toggler(index)}>
                <h3>{item.question}</h3>
                <div>
                  {selected === index ? (
                    <BsChevronDown className="rotate-down" />
                  ) : (
                    <BsChevronDown className="rotate-up" />
                  )}
                </div>
              </div>
              <div className={selected === index ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <div className="slider">
        <div className="slide-items" style={style}>
          <div className="item">Lorem ipsum dolor sit amet, consectetur</div>
          <div className="item">Lorem ipsum dolor sit amet, consectetur</div>
          <div className="item">Lorem ipsum dolor sit amet, consectetur</div>
        </div>
        <ul onClick={handleClick} className="indicators">
          {renderIndicator}
        </ul>
      </div>
      
          </div> 
     </div>
  );
}

export default Sidebar1;
