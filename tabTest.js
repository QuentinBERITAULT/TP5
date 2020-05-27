function test1(){
    let numbers = [-42, 3, 0, -1, 100];
    let absNumbers = abs(numbers);  
    console.log(absNumbers); 	// => [42, 3, 0, 1, 100]
    console.log(numbers);    	// => [-42, 3, 0, -1, 100]
}
function test2(){
    console.log( evenOnly([0,1,2,3,4]) );  // => [0, 2, 4] 
}

function test3(){
    console.log(sum([1,2,3,4]));
    console.log(sum([1,2,3,4,5,6,7,8,9]));
}

function test4(){
    console.log(flatten2D([1,2],[3,4]));
    console.log(flatten2D([1,2,3],[4],[5,6,7,8]));
}

function test5(){
    console.log( removeDuplicates([]) );                  // => []
    console.log( removeDuplicates([1,2,3,4]) );           // => [1,2,3,4]
    console.log( removeDuplicates([1,2,3,2,4,3,1,1]) );   // => [1,2,3,4]
}

function repeatTests(){
    test1();
    console.log("--------------------------------");
    test2();
    console.log("--------------------------------");
    test3();
    console.log("--------------------------------");
    test4();
    console.log("--------------------------------");
    test5();
    console.log("--------------------------------");
}