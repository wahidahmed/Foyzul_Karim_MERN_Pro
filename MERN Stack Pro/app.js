

const isPrime=(num)=>{
    if(num<2){
        return false;
    }
    for (let index = 2; index < num; index++) {
       if(num%index==0){
        return false;
       }
    }

    return true;
}

const syncCallbackFunction=(number,start)=>{
    const numIsPrime=isPrime(number);
    console.log('isPrime:',number,' result: ',numIsPrime,' start: ',start,' End: ',new Date());
}

const sleepWithCallback=(num,callBack)=>{
    const start=Date.now();
    const sleep=num*1000;
    while (true) {
        if(Date.now()-start>sleep){
            break;
        }
        callBack(num,new Date(start));
    }
}
const syncWithCallback=()=>{
    for (let index = 0; index < 10; index++) {
       console.log('looping:',index,new Date());
       sleepWithCallback(index,syncCallbackFunction);
    }
}
syncWithCallback();
console.log('all done');



function name(params) {
   alert('hi');
}
