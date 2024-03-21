//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3, 7, 34, 90, 12];
let arr2 = new Array (true, 'green', 'where', 12,56);
console.log ('last item:' ,arr1[arr1.length-1]);
console.log ('last item:' ,arr2[arr2.length-1]);

//Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
stringmyPets = ["Cows", "Bird","Snake", "Dog"];
console.log(stringmyPets.join());

//Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
console.log(arr3.sort());

//Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
let arr = ["boy", "man", "girl",            "school", "girl", "woman"];

function removeDuplicate(data){
    return data.filter((value, index) => data.indexOf(value) ===index);
}
console.log(removeDuplicate(arr));

function getDuplicates(data){
    return data.filter((value, index) => data.indexOf(value)!==index);
}
console.log(getDuplicates(arr));

//Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the","way","x","4"];
let text = "food";
let textIndex = arr5.indexOf(text);
if(text==arr5[1]){
    console.log({text})
}
else{
    console.log("the search was not found");
}


//Write a JS script to sort the following string:let word = "renniw"
let word = 'renniw';
let newSort= word.split("")
                .sort()
                .join("")
;
console.log(newSort);


//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
let fruits = ["Pineapple", "Mango", "Watermelon", "Grapes", "Lemons", "Kiwi", "Banana", "Guava", "Pears", "Apple"];
fruits[5] = "Tomato";
console.log({fruits});
