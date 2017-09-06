/* Exercise 1: Add two variables together, output the result to
the console. */

//Part 1: Numbers
var num1 = 3;
var num2 = 23;
console.log(num1 + num2);

//Part 2: Strings
var string1 = 'base';
var string2 = 'ball';
console.log(string1 + string2);


/* Exercise 2: Create multidimensional array, output 2 items from
the sub-arrays to the console. */

var interests = [['Math', 'Science', 'Cryptology'] , ['Mint Choloate Chip ice cream', 'Black Raspberry ice cream', 'Cookie Dough ice cream', 'Moose Tracks ice cream'], ['Jigsaw Puzzles', 'Sudoku', 'Cryptograms']];

console.log('I like '+ interests[1][3] + ' and ' + interests[2][2] + '!');


/*Exercise 3: Check if variable is less than 100. If yes: alert
user that variable is less than 100. If no: alert user of what
the value was and that it was greater than 100. */
var ex3Button = document.getElementById('ex3-btn');

ex3Button.addEventListener('click', function(){
    var number = document.getElementById('ex3').value;

    if (number !== '') {
        if (number < 100) {
            alert('This number is less than 100.');
        }  else {
            alert(number + ' is greater than 100.');
        }
    }
}) ;


/*Exercise 4: Declare a function that takes a name as an
argument and tells the user what name they've entered. Try
running it after it has been declared.*/
var ex4Button = document.getElementById('ex4-btn');


function userName(name) {
    if (name !== '') {
        alert('The name you have entered is: ' + name);
    }
}

ex4Button.addEventListener('click', function(){
    userName(document.getElementById('ex4').value);
});

/*Exercise 5: Declare a function that depending upon which virtual 'door' was entered tells the user they've received a differnt 'prize' in an alert. After declaring the function, try running it with diiferent options. At least 3 doors*/

//Door One Button
document.getElementById('door-one').addEventListener('click', function(){
    prize(document.getElementById('door-one').innerText);
});

//Door Two Button
document.getElementById('door-two').addEventListener('click', function(){
    prize(document.getElementById('door-two').innerText);
});

//Door Three Button
document.getElementById('door-three').addEventListener('click', function(){
    prize(document.getElementById('door-three').innerText);
});

//Door Four Button
document.getElementById('door-four').addEventListener('click', function(){
    prize(document.getElementById('door-four').innerText);
});


function prize(door) {
    switch (door) {

        case 'One':
            alert('You\'ve won a new toaster!!');
            break;
        case 'Two':
            alert('Congrats! You\'ve won the grand prize...a new CAR!!');
            break;
        case 'Three':
            alert('You have won a brand new patio set!');
            break;
        case 'Four':
            alert('You\'ve won a $200!');
            break;
    }
}
