export function konamiCodeListener(callback) {
  const sequence = ['up','up','down','down','left','right','left','right','b','a'];
  let index = 0;
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', (key) => {
    if (key === '\u0003') process.exit();
    if (key.toLowerCase() === sequence[index]) {
      index++;
      if (index === sequence.length) {
        callback();
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
