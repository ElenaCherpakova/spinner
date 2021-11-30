process.stdout.write('hello from spinner1.js... \rheyyy\n');
const symbol  = ['\r| ', '\r/ ','\r- ', '\r\\ ', '\r| '];


let delay = 100;
let increment = 200;

for (let i of symbol) {
  setTimeout(() => {
    process.stdout.write(i);
  }, delay);
  delay += increment;
}
