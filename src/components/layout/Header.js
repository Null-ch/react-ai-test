import React from 'react';
import Dropdown from './Dropdown';
import './Header.css';

function Header({ toggleTheme, isDarkTheme }) {
  const dropdownItems = {
    products: [
      { text: 'Продукт 1', href: '#' },
      { text: 'Продукт 2', href: '#' },
      { text: 'Продукт 3', href: '#' }
    ],
    navigation: [
      { text: 'Ссылка 1', href: '#' },
      { text: 'Ссылка 2', href: '#' },
      { text: 'Ссылка 3', href: '#' }
    ],
    news: [
      { text: 'Новость 1', href: '#' },
      { text: 'Новость 2', href: '#' },
      { text: 'Новость 3', href: '#' }
    ]
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="header-left">
          <h1 className="brand">ИИ - убийца фронтов</h1>
        </div>
        
        <nav className="header-nav">
          <Dropdown title="Продукты" items={dropdownItems.products} />
          <Dropdown title="Навигация" items={dropdownItems.navigation} />
          <Dropdown title="Новости" items={dropdownItems.news} />
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