console.log('logging.....');
console.clear();

//log level
console.log('log');     //개발
console.info('info');   // 중요한 정보
console.warn('warn');   // 경보: 발생하면 안되는 일이지만 치명 X
console.error('error'); // 에러: 사용자 에러, 시스템 에러

//assert
console.assert( 2 === 3, 'not same!' );
console.assert( 2 === 2, 'same!' );

//print object
const student = { name: 'boogie', 
                  age: 3 , 
                  school: { kind : 'elementary' , grade :{
                        math : 'A',
                        english : 'B'
                  } 
                }
             };
console.log(student);
console.table(student);
console.dir(student,{showHidden: true, colors: false, depth: 1 });

console.log(' ');
console.log(' ');

//measuring time
console.time('for loop');
for( let i = 0; i < 10; i++){
    i++;
}
console.timeEnd('for loop');

console.log(' ');
console.log(' ');


//counting
function a(){
    console.count('a function');
}

a();
console.countReset('a function');
a();


console.log(' ');
console.log(' ');

//trace
function f1(){
    f2();
}
function f2(){
    f3();
}
function f3(){
    console.log('f3');
    console.trace();
}
f1();

