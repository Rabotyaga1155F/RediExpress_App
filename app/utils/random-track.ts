export function generateTrack() {
  const randomNumber = () => Math.floor(Math.random() * 10);
  let number = 'R-';
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      number += randomNumber();
    }
    if (i < 3) {
      number += '-';
    }
  }
  return number;
}
