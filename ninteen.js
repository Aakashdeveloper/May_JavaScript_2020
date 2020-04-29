var a =10

/*function add(a){
    var b = 20
    return a+b
}
*/

for(i=0;i<10;i++){
    let b = 20 
    console.log(i)
}

console.log(">>>>a ",a)
console.log(">>>>b ",b)

var myvar = []

for(var i=0;i<3;i++){
    myvar[i]=function(){
        console.log("I m in function ",i)
    }
}

for(j=0;j<3;j++){
    myvar[j]()
}