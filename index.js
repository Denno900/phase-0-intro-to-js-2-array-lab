// Write your solution here!

const cats =["Milo", "Otis", "Garfield"];

let name = ""

function destructivelyAppendCat(name){
    cats.push("Ralph");
};

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(){
    cats.slice
}