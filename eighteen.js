var a = ["a","b","c"]
a.map((data) => { return data}) 

var b = [10,34,52,20,25,36,24]
b.filter((data) => { return data>24 })
[34, 52, 25, 36]


b.map((data) => { return data>24 })


var a = [0,1,2,3]
a.map((data) => { return data*2 })
a.filter((data) => { return data*2 })

var a = [0,1,2,3]
a.map((data) => { return data*2 })
(4) [0, 2, 4, 6]
a.filter((data) => { return data*2 })
(3) [1, 2, 3]