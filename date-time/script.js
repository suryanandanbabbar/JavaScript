let d;

// Date
d = new Date();

d = new Date(2021, 6, 10);

d = new Date('2021-07-10');

d = new Date('2021-07-10T12:30:00');

d = new Date('07/10/2021 12:30:00');

d = new Date('07/10/2022');

// Time
d = Date.now(); // milli-seconds

d = new Date('07-10-2022 12:30:00');

d = d.getTime();

d = d.valueOf();

d = new Date(1698218368712);

d = Math.floor(Date.now() / 1000);

console.log(d);
