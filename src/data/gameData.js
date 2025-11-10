// src/data/gameData.js

// --- Колонка "New Release" (4 игры) ---
const newRelease = [
    { id: 1, title: 'Lego StarWars Skywalker Saga', status: '$59.99', image: '/images/lego.jpg' },
    { id: 2, title: 'Ghost Wire Tokyo', status: '$30.00', image: '/images/ghostwire.jpg' },
    { id: 3, title: 'SIFU', status: '$29.00', image: '/images/sifu.jpg' },
    { id: 4, title: 'Horizon: Forbidden West', status: '$65.00', image: '/images/horizon.jpg' },
];

// --- Колонка "Free Games" (4 игры) ---
const freeGames = [
    { id: 5, title: 'Dota 2', status: 'Free', image: '/images/dota.jpg' },
    { id: 6, title: 'Fortnite', status: 'Free', image: '/images/fortnite.jpg' },
    { id: 7, title: 'Apex Legends', status: 'Free', image: '/images/apex.jpg' },
    { id: 8, title: 'Valorant', status: 'Free', image: '/images/valorant.jpg' },
];

// --- Колонка "Coming Soon" (4 игры) ---
const comingSoon = [
    { id: 9, title: 'Evil Dead The Game', status: 'Coming Soon', image: '/images/evildead.jpg' },
    { id: 10, title: 'Gotham Knights', status: 'Coming Soon', image: '/images/gotham.jpg' },
    { id: 11, title: 'Hogwarts Legacy', status: 'Coming Soon', image: '/images/hogwarts.jpg' },
    { id: 12, title: 'God of War: RAGNAROK', status: 'Coming Soon', image: '/images/gow.jpg' },
];

// ВАЖНО: Экспортируем все три массива!
export { newRelease, freeGames, comingSoon };