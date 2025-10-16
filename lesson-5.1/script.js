let str = '';
for (let i = 20; i <= 30; i += 0.5) {
    str += i;
    if (i < 30) {
        str += ' ';
    }
}
console.log(str);