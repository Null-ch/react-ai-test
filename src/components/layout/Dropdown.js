import React from 'react';
import './Dropdown.css';

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button 
        className="btn btn-primary dropdown-toggle" 
        onClick={toggleDropdown}
      >
        {title}
      </button>
      {isOpen && (
        <div className="dropdown-menu show">
          {items.map((item, index) => (
            <a key={index} className="dropdown-item" href={item.href}>
              {item.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown; 