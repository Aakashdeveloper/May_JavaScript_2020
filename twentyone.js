^$

^[0-9]{10}$

^([a-zA-Z]+)$

^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$


var a = "a@a.com"

a.match(^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$)

var a = "a@a.com"

a.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var a = "a.com"
undefined
a.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null
var phn = 923895734897
undefined
phn.match("^[0-9]{10}$")
VM243:1 Uncaught TypeError: phn.match is not a function
    at <anonymous>:1:5
(anonymous) @ VM243:1
var phn = "923895734897"
undefined
phn.match("^[0-9]{10}$")
null
var phn = "9238957348"
undefined
phn.match("^[0-9]{10}$")
["9238957348", index: 0, input: "9238957348", groups: undefined]