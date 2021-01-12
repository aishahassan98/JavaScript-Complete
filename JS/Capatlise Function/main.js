function capitalise (myName){
    return myName.charAt(0).touppercase() + 
    myName.slice(1);
}

let myName = capitalise("aisha will get better as javascript");
console.log(myName);