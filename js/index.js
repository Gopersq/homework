// Первая задача

const func = (a) => {
   return (b) => {
      return (c) => {
         return a + b + c
      }
   }
};

console.log(func(2)(3)(5))

// Вторая задача

const array = [5, 2, 7, 1, 3, 20];

const a = array.sort((a, b) => a - b);

console.log(a)

const sortArray = (a, b) => {
   if (a > b) {
      return 1;
   } else if (a < b) {
      return -1;
   } return 0;
}

console.log(array.sort(sortArray))


// Третья задача

const logo = document.querySelector('.logo')

 setTimeout(() => {
   Promise.resolve().then(() => {
      console.log('1');
    });
   logo.style.color = 'green';
}, 0)

 setTimeout(() => {
   Promise.resolve().then(() => {
      console.log('2');
    });
    Promise.resolve().then(() => {
      console.log('3');
    });
 }, 0)

 setTimeout(() => {
   Promise.resolve().then(() => {
      console.log('4');
    });
   logo.textContent = "Digital league"
 }, 0)

