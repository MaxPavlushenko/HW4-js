"use strict"

// Task 1

/*{

  let arr = [1,2,3,4,5];

  for (let i = 0 ; i < arr.length; i++){
    document.write(arr [i]);
  }

}*/


// Task 2


/*{

  let arr= [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

  for(let i = 0 ; i < arr.length; i ++){
    if( arr[i] > -10 && arr[i]<-3 ){
      document.write(arr [i]);
    }

  }

}*/


// Task 3

/*{

  let arr = [];
  let a = 23;

  for (let i = 0; i < 35; i++) {
    arr.push(a);
    a++;
  }
  console.log(arr);
  let j = 0;
  let result = 0;
  while (j < arr.length) {
    result += arr[j];
    j++;
  }
  console.log(result);
}*/



// Task 4


/*{let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {

  let num = String(arr[i]);

  let char = num[0];
  
  if (char == 1 || char == 2 || char == 5) {
    console.log(num);
  }
}

}*/



// Task 5

/*{

  let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

  for (let i = 0; i < days.length; i++) {
    if (days[i] == 'СБ' || days[i] == 'ВС') {
      document.write(days[i].bold(), " ");
    }
    else {
      document.write(days[i], " ");
    }
  }
}*/




// Task 6


/*{
  let fruits = ['Яблоки', 'Киви', 'Груши'];

  fruits[fruits.length] = 'Сливы';
  console.log(fruits);
}*/



// Task 7

/*{
  let arr = [];
  let check = true;
  while(check){
    let num = prompt ('Введите число');
    if(num === ''){
      check = false;
    }
    else{
      arr.push(Number(num));
    }
  }
  document.write(arr,' ');
document.write("<br>");
  document.write(arr.sort(),' ');
  
  
}*/


//Task 8


/*{

  let arr = [12, false, 'Текст', 4, 2, -5, 0];
  let i=0;
  let rev=[];
 console.log(arr);
 while(i<arr.length){
  rev[i]= arr.reverse();
  i++;
 }
  console.log(rev);
  
}*/

// Task 9


/*{
let arr = [5, 9, 21, , , 9, 78, , , , 6];

 let r =0;
 
 for (r  of arr){
  if(r === undefined) [r ++];
 }

 console.log(r);


}*/


// Task 10


/*{
  let arr = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];

  let ind = arr.indexOf(0);
  let lastInd = arr.lastIndexOf(0);
  let count = 0;

  for ( let i = ind; i < lastInd; i ++){
    if(lastInd < 0) break;

    count += arr[1];

  }
  console.log(count);
}*/


// Task 11


/*{


  let height = Number(prompt('Введите высоту'));
   let i = 0 ;
   let j = 0 ;

  let space = " " ;

  let star = " " ;

  while(i < height){
    space = " " ;
    star = " " ;

    for( j = 0; j < height - i; j ++) space += " ";
    
    for( j = 0; j < 2 * i + 1; j ++) star += "^";
    console.log(space+star);
    i ++;
  }

  
}*/

