// es5
function Person (name, age){
	this.name = name;
	this.age = age;
}

Person.prototype.showName = function (){
	console.log(this.name)
}

Person.prototype.showAge = function (){
	console.log(this.age)
}

let p = new Person()

p.showAge()


// es6 

class A{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	showName(){
		console.log(this.name)
	}
	showAge(){
		console.log(this.age)
	}
}

class B extends A{
	constructor(name,age,job){
		super(name,age) // 继承父类的参数 === call,apply(等价)
		this.job = job
	}
	showJob(){
		console.log(this.job)
	}
}