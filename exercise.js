class Person {
  constructor(name,age,country){
    this._name = name;
    this._age = age;
    this._country = country;
  }

  get name(){
    return this._name;
  }

  get age(){
    return this._age;
  }

  get country(){
    return this._country;
  }
}

const recruit = new Person('Todd', 20, 'mexico');

for(let props in recruit){
  console.log(recruit[props]);
}