var myvar = []

var i
for(var i=0;i<3;i++){
    myvar[i]=function(){
        console.log("I m in function ",i)
    }
}

for(j=0;j<3;j++){
    myvar[j]()
}