
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
/* possible solution */
const main = () => {
    let myArr = [];
    for(let props in student){
        myArr.push(props);
    }
    console.log(myArr.toString());
}

main();