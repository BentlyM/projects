
function capitalize(s , num){
  let randomIndex = Math.floor(Math.random() * s.length);
  if(num === 1){
    return s.toUpperCase();
  }else if(num === 2){
    return s.substring(0, randomIndex) + s.charAt(randomIndex).toUpperCase() + s.substring(randomIndex + 1);
  }else{
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}

console.log(capitalize('sentence' , 2));