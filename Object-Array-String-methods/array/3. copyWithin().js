//3. copyWithin()

//syntax copyWithin(a,b,c)

//a - target ; b - start (0 by default) ; c- end (length of array by default)

let array = [1, 2, 3, 4, 5, 6];

let arr = array.copyWithin(2);

console.log(arr);

/* this is happening here basically 
[1, 2, 3, 4, 5, 6]
      [1, 2, 3, 4, 5, 6]



*/

//why is it starting from 1 , because default starter is 0th index
//5 and 6 get ignored bc array length is the same

//what if i wanted to do [1,2,3,1,2,3]

let sameArray = [1, 2, 3, 4, 5, 6];
let result = sameArray.copyWithin(3, 0);
console.log(result);

//LETS GOOOOOO

let anotherArray = [10, 20, 30, 40, 50];
console.log(anotherArray.copyWithin(2));
console.log(anotherArray.copyWithin(1, 3));
