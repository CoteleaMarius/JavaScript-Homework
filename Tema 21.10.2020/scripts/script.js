//Exercitiul nr.1
var nume=prompt("Introduceti numele si prenumele");
alert("Salut, "+nume)
//Exercitiul nr.2
const anul_curent=2020
var anul_nasterii=prompt("Introduceti anul nasterii:")
var varsta=anul_curent-anul_nasterii
alert("Varsta dumneavoastra este de: "+varsta+" ani")
//Exercitiul nr.3
var a=prompt("Introdu lungimea unei laturi:")
var b=4*a;
alert("Perimetrul patratului este: "+b)
//Exercitiul nr.4
const pi=3.14
var r=prompt("Introduceti raza cercului:")
var a=pi*r*r
alert("Aria cercului este: "+a)
//Exercitiul nr.5
var d=prompt("Introdu distanta:")
var t=prompt("Introdu timpul:")
var v=d/t
alert("Trebuie sa va deplasati cu "+v+" km/ora")
//Exercitiul nr.6
const curs=0.84
var d=prompt("Introdu suma pe care sa o convertim:")
var e=d*curs
alert("Suma in euro: "+e)
//Exercitiul nr.7
const f=820
var USB=prompt("Introdu dimensiunea USB-ului:")
var n=USB/f
alert("In acest USB pot incapea: "+n+" fisiere")
//Exercitiul nr.8
var p=prompt("Introdu suma de bani din portofel:")
var b=prompt("Introdu pretul unei bomboane:")
var bm=p/b
if(bm<1){
	alert("Nu aveti destui bani")
}
else{
	var br = Math.floor(bm)
	alert("Puteti sa cumparati: "+br+" bomboane")
	var rest=p-(br*b)
	alert("Aveti atata rest: "+rest)
}
//Exercitiul nr.9
var num1=prompt("Introduceti un numar de 3 cifre")
if(num1<1000 && num1>99){
	var prim=num1%10
	var duos=num1/10 % 10
	var tres=num1/100 % 10
	alert("Numarul invers este: "+Math.floor(prim)+Math.floor(duos)+Math.floor(tres))
}
else{
	alert("Numarul introdus nu este de 3 cifre")
}
//Exercitiul nr.10
var n=prompt("Introduceti un numar:")
n%2==0 ? alert("Numarul este par") : alert("Numarul este impar")