let numbers = [24, 12, 4, 6];

console.log(numbers.length);           

console.log(numbers.pop());             

console.log(numbers);                  

let new_arr = numbers.slice(1, 5);      

console.log(new_arr);                    

console.log(new_arr.sort((a, b) => a - b)); 

let des = ['html', 'css', 'js'];         

des.unshift('one team');                 
console.log(des);                       

des.push('python');                      
console.log(des);                       

des.splice(2, 3, 'kochi');               
console.log(des);                        

des.shift();                             
console.log(des);                        

const moreNumbers = [5, 3, 6, 8, 12];
let squares = moreNumbers.filter(num => num % 2 === 0); 
console.log(squares); // [6, 8, 12]
