literal Notation 
Constructor Notation

//literal Notation 
var movie = {
    name:'Avengers',
    rating:4.4
}
undefined
typeof(movie)
"object"
movie.name
"Avengers"
movie.rating
4.4
movie
{name: "Avengers", rating: 4.4}
movie.language="English"
"English"
movie
{name: "Avengers", rating: 4.4, language: "English"}
movie.rating = 4.5
4.5
movie
{name: "Avengers", rating: 4.5, language: "English"}
movie.gener="Action"
"Action"
movie
{name: "Avengers", rating: 4.5, language: "English", gener: "Action"}
delete movie.language
true
movie
{name: "Avengers", rating: 4.5, gener: "Action"}

var movie = {
    name:'Avengers',
    rating:4.4
}
undefined
movie["name"]
"Avengers"
movie["rating"]
4.4
movie["language"]="English"
"English"
delete movie['rating']
true

//Constructor Notation
var car = new Object()
car.color="red"
car.barnd="BMW"
"BMW"
car
{color: "red", barnd: "BMW"}
car.price = 899098
899098
car
{color: "red", barnd: "BMW", price: 899098}

var firstname = "Jackson";
var lastname = "Zoe";

var sayhi = {
    firstname:"John",
    lastname:'Ammy',
    greet:function(){
        return `Say Hi to JS to ${firstname} ${lastname}`
    }
}

sayhi.greet()
"Say Hi to JS to Jackson Zoe"

sayhi
{firstname: "John", lastname: "Ammy", greet: ƒ}
sayhi.greet()
"Say Hi to JS"


var firstname = "Jackson";
var lastname = "Zoe";

var sayhi = {
    firstname:"John",
    lastname:'Ammy',
    greet:function(){
        return `Say Hi to JS to ${this.firstname} ${this.lastname}`
    }
}

var calc={
    sum:(a,b)=>{return a+b},
    sub:(a,b)=>{return a-b}
}
undefined
calc.sum(1,2)
3
calc.sub(1,2)
-1


var dbquery ={
    find:(table)=>{return `Select * from ${table}`},
    insert:(table,data) => { return `insert into ${table} name, city VALUES(${data.name},${data.city})`}
}

dbquery.find('Emp')
"Select * from Emp"
dbquery.insert('Emp',{name:'abc',city:'delhi'})
"insert into Emp name, city VALUES(abc,delhi)"