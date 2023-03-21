// Первая задача

const func = (a) => {
   function sum(b) {
     a += b;
     return sum;
   }
    
   sum.toString = () => {
      console.log(a)
     return (a);
   };
 
   return sum;
 };
 
 console.log(func(2)(3)(5))

// Вторая задача

const array = [5, 2, 7, 1, 3, 20];

const sort = (shuffleArray) => {

for (let i = 0; i <= shuffleArray.length - 2; i++) {
  let minValue = shuffleArray[i];

  for (let j = i + 1; j <= shuffleArray.length - 1; j++) {
    if (shuffleArray[j] < minValue) {
      minValue = shuffleArray[j];
      let swap = shuffleArray[i];
      shuffleArray[i] = minValue;
      shuffleArray[j] = swap;
    }
  }
}

return shuffleArray;
};

console.log(sort(array));


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

