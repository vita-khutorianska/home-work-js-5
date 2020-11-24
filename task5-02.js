// Напиши класс User для создания пользователя со следующим свойствами:
const User = function (name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
    this.getInfo = function () {
        return `User ${name} is ${age} years old and has ${followers} followers`;
      
    }
}
   



// Добавь метод getInfo(),
// который, выводит строку: User ${ имя } is ${ возраст } years old and has ${ кол - во фоловеров } followers
 console.log(typeof User);
// 'function'

 const mango = new User('Mango', 2, 20);
 console.log(mango.getInfo()); 
// 'User Mango is 2 years old and has 20 followers'

// console.log(typeof mango.getInfo); 
// 'function'  

// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'