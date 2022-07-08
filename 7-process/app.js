const process = require('process');

console.log(process.exePath);
//실행되는 경로
console.log(process.version);
//실행되는 버전
console.log(process.pid);
//프로세스 id
console.log(process.ppid);
//프로세스 부모의id
console.log(process.platform);
//플랫폼에 대한 정보
console.log(process.env);
//현재 컴퓨터에 저장된 환경변수에 대한 모든 정보
console.log(process.uptime());
//얼마나 실행되고 있었는지
console.log(process.cwd());
//현재 실행되고 있는 node의 경로
console.log(process.cpuUsage());
//cpu 사용량


setTimeout(() =>{

    
})

process.nextTick(()=>{
    console.log('nextTick');
})

