function hello() {
    console.log(this);
    console.log(this === global);
}

hello();

console.log(' ');
console.log(' ');

class A{
    constructor(num){
        this.num = num;
    }

    memberFuncion(){
        console.log('--------class-------');
        console.log(this);
        console.log(this === global);
    }
}

const a = new A(1);
 a.memberFuncion();

 console.log(' ');
 console.log(' ');
 

 console.log('---- global scope ---');
 console.log(this);
 console.log(this === module.exports);

 