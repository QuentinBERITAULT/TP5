function abs(numbers){
    let abs = numbers.map(
        function (number) {
            return Math.abs(number);
        }
    );
    return abs;
}

function evenOnly(numbers){
    let even = numbers.filter(
        function(number){
            if(number % 2 == 0){
                return number;
            }
        }
    );
    return even;
}
function sum(numbers) {
    let sum = numbers.reduce(
        function(a, b) {
        return a + b;
        }
    );
    return sum;
}

function flatten2D(numbers) {
    let flatten = numbers.reduce(
        function(a, b) {
        a = a.concat(b);
        return a;
        },
        []);
    return flatten;
}

function removeDuplicates(values) {
    let remove = values.reduce(
        function(a, b) {
        if (a.indexOf(b) == -1) {
            a.push(b);
            return a;
        } 
        else return a;
        }, 
        [])
    return remove;
}