const addressLat = 40;
const addressLong = 60;
const positionLat = 10;
const positionLong = 10;

const distance =  Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
console.log ("Расстояние между точками: ", distance);
