import React, { useState } from 'react';
import './Header.css';

function Header({ toggleTheme, isDarkTheme }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    // Если кликнули по тому же меню - закрываем его
    // Если по другому - закрываем предыдущее и открываем новое
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="brand">ИИ - убийца фронтов</h1>
        </div>
        
        <nav className="header-nav">
          <div className="dropdown">
            <button 
              className="btn btn-primary dropdown-toggle" 
              onClick={() => toggleDropdown('products')}
            >
              Продукты
            </button>
            {activeDropdown === 'products' && (
              <div className="dropdown-menu show">
                <a className="dropdown-item" href="#">Продукт 1</a>
                <a className="dropdown-item" href="#">Продукт 2</a>
                <a className="dropdown-item" href="#">Продукт 3</a>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button 
              className="btn btn-primary dropdown-toggle" 
              onClick={() => toggleDropdown('navigation')}
            >
              Навигация
            </button>
            {activeDropdown === 'navigation' && (
              <div className="dropdown-menu show">
                <a className="dropdown-item" href="#">Ссылка 1</a>
                <a className="dropdown-item" href="#">Ссылка 2</a>
                <a className="dropdown-item" href="#">Ссылка 3</a>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button 
              className="btn btn-primary dropdown-toggle" 
              onClick={() => toggleDropdown('news')}
            >
              Новости
            </button>
            {activeDropdown === 'news' && (
              <div className="dropdown-menu show">
                <a className="dropdown-item" href="#">Новость 1</a>
                <a className="dropdown-item" href="#">Новость 2</a>
                <a className="dropdown-item" href="#">Новость 3</a>
              </div>
            )}
          </div>
        </nav>

        <div className="header-right">
          <div className="theme-switch">
            <label className="switch">
              <input
                type="checkbox"
                checked={isDarkTheme}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <button className="btn btn-success">Создать аккаунт</button>
        </div>
      </div>
    </header>
  );
}

export default Header; 