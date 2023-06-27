export const createArray = (num) => {
    let array = [];
    while (array.length < num) {
      array.push(Math.floor(Math.random() * 450) + 10)
    }
    return array;
}