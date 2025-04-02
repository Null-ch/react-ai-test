# React Docker App

Это простое React приложение, упакованное в Docker контейнер.

## Требования

- Node.js (версия 16 или выше)
- Docker
- Docker Compose
- npm или yarn

## Установка и запуск

### Локальный запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите приложение:
```bash
npm start
```

Приложение будет доступно по адресу http://localhost:3000

### Запуск в Docker

#### Вариант 1: Использование Docker Compose (рекомендуется)

1. Запустите приложение:
```bash
docker-compose up -d --build
```

Приложение будет доступно по адресу http://localhost

#### Вариант 2: Использование Docker напрямую

1. Соберите Docker образ:
```bash
docker build -t react-docker-app .
```

2. Запустите контейнер:
```bash
docker run -p 80:80 react-docker-app
```

Приложение будет доступно по адресу http://localhost

## Функциональность

- Загрузка данных с API
- Отображение данных в карточке
- Возможность обновления данных
- Адаптивный дизайн
- Отслеживание производительности (Web Vitals)

## Технологии

- React
- Docker
- Docker Compose
- nginx
- Web Vitals #   r e a c t - a i - t e s t  
 #   r e a c t - a i - t e s t  
 