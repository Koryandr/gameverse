// src/data/gameData.js

// --- Колонка "New Release" (4 игры) ---
const newRelease = [
    { id: 1, title: 'Lego StarWars Skywalker Saga', status: '$59.99', image: '/image/image 4.png' },
    { id: 2, title: 'Ghost Wire Tokyo', status: '$30.00', image: '/image/image 5.png' },
    { id: 3, title: 'SIFU', status: '$29.00', image: '/image/image 6.png' },
    { id: 4, title: 'Horizon: Forbidden West', status: '$65.00', image: '/image/image 7.png' },
];

// --- Колонка "Free Games" (4 игры) ---
const freeGames = [
    { id: 5, title: 'Dota 2', status: 'Free', image: '/image/image 8.png' },
    { id: 6, title: 'Fortnite', status: 'Free', image: '/image/image 9.png' },
    { id: 7, title: 'Apex Legends', status: 'Free', image: '/image/image 10.png' },
    { id: 8, title: 'Valorant', status: 'Free', image: '/image/image 11.png' },
];

// --- Колонка "Coming Soon" (4 игры) ---
const comingSoon = [
    { id: 9, title: 'Evil Dead The Game', status: 'Coming Soon', image: '/image/image 12.png' },
    { id: 10, title: 'Gotham Knights', status: 'Coming Soon', image: '/image/image 13.png' },
    { id: 11, title: 'Hogwarts Legacy', status: 'Coming Soon', image: '/image/image 14.png' },
    { id: 12, title: 'God of War: RAGNAROK', status: 'Coming Soon', image: '/image/image 15.png' },
];

// ВАЖНО: Экспортируем все три массива!
export { newRelease, freeGames, comingSoon };