let output = document.querySelector('.output');

function clock() {
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    m = timeFormate(m);
    s = timeFormate(s);
    let time = h + ':' + m + ':' + s;
    output.innerHTML = time;
    setInterval(clock, 1000);
};

function timeFormate(value) {
    if (value <= 9) {
        value = '0' + value;
    };
    return value;
};
clock();