function luna(card) {
  const cardClean = card.replaceAll("-", "");
  if (cardClean.length !== 16 || isNaN(cardClean)) return false;

  const arrCard = cardClean.split("");
  const sum = arrCard
    .map((el, i) => {
      if (i % 2 === 0) return el * 2 > 9 ? el * 2 - 9 : el * 2;
      return Number(el);
    })
    .reduce((acc, el) => acc + el, 0);

  if (sum % 10) return false;
  return true;
}

console.log(luna("4561-1213-4367-2612"));
console.log(luna("4561-2612-1234-5467"));
