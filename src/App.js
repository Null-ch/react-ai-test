import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8076/api/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme' : ''}`}>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <main className="container">
        {error && (
          <div className="error">
            Ошибка: {error}
          </div>
        )}

        <div className="data-grid">
          <div className="card">
            <h2>Данные с API</h2>
            {loading ? (
              <div className="loading">Загрузка данных...</div>
            ) : (
              <div className="data-block">
                <pre>
                  {JSON.stringify(data, null, 2)}
                </pre>
              </div>
            )}
            <button className="button" onClick={fetchData}>
              Обновить данные
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App; 