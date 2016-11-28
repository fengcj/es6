function X(){
	this.val = 1;

	setTimeout(function(){
		console.log(this);  /*  this === window  */
		this.val++;
		console.log(this.val);
	},1000);
}
var x = new X();

// arrow function do not has its own `this`, it is bind to it's parent `this`
function Y(){
	this.val = 1;
	setTimeout(() => {
		console.log(this === y);
		this.val++;
		console.log(this.val);
	},1000);
}

var y = new Y();


