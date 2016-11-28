{
	(function(){
		var F1 = function(){
			console.log(arguments[1]);
		}
		F1(1,2,3);
	}());
}


// Arrow Function do not has `arguments` param 
{	
	(function(){
		var F2 = () => {console.log(arguments[1])}
		F2(1,2,3);
	}());
}

// Arrow Function do not has `arguments` param, it can be solve by adding "...n"
{	
	(function(){
		var F2 = (...n) => {console.log(n[1])}
		F2(1,2,3);
	}());
}

//  spread operator
var n = [1,2,3];
var f1 = (a,b,c,...n) => {console.log(n);}
f1(9,8,7,n,0);


var haveFun = ["has fun","has more fun"];
var life = ["born","walk", ...haveFun,"die"];
console.log(life);

var a = [1,2,3];
var b = [4,5,6];
//[].push.apply(a,b);  // a.push(4,5,6);
a.push(...b);

console.log(a);