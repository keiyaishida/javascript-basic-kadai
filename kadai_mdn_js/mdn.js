const date = new Date();
const [month, day, year] = [
date.getFullYear(),
date.getDate(),
date.getMonth(),
];

console.log(year + '年'+ month + '月' + day  + '日');