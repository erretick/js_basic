const data = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

function sort(arr) {
  const arrResult = [];

  arr.forEach((el) => {
    if (el.length !== 10) return;
    let arrDate = el.split("-");
    if (arrDate.length !== 3) {
      arrDate = el.split("/");
      if (arrDate.length !== 3) return;
      const tmp = arrDate[1];
      arrDate[1] = arrDate[0];
      arrDate[0] = tmp;
    }
    if (arrDate[0] < 1 || arrDate[0] > 31) return;
    if (arrDate[1] < 1 || arrDate[1] > 12) return;
    arrResult.push(arrDate.join("-"));
  });

  return arrResult;
}

console.log(sort(data));
