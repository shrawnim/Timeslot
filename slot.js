//scheduler

var ca=[true,true,true,false,false,false,true,false,false,true,true,false,true,true,false,false,true,true,false,false,true,true,true,true,true,true,false,false,false,true,false,false,true,true,false,true,true,false,false,true,true,false,false,true,true,true,false,false];

let tt=2;
let count=0;
var T1='GMT +05:30';
var T2='GMT -06:00';


T1=timez(T1);
T2=timez(T2);

let time1=730;
let time2 = timeconver(time1);
 console.log(time2);
let n=num(time2);
console.log(n);
for(let i=n;i<=48;i++){
    if(ca[i]===true){
        count++;
        if(count==tt &&  i<=43 && i>=9){
             let fre=i;
            console.log("Student free at:");
            console.log(rnum(fre));
        }
    }
}
if(count < tt){
    console.log("no comman slot found negotiate");
}

function timez(str){
    let num=0;
    var matches;
    if(str[4]=='-'){
         matches = (str.match(/\d+/g));
         matches[0]= parseInt(matches[0]);
         matches[1]= parseInt(matches[1]);
         num = matches[0]*100 + matches[1];
         num =-1*num;
         return num;
    }
    else{
        var matches = (str.match(/\d+/g));
        matches[0]= parseInt(matches[0]);
         matches[1]= parseInt(matches[1]);
         num = matches[0]*100 + matches[1];
         return num;
    }
}
function num(nu){ 
    let ind=nu;
    let three=ind%100
     let rem=ind/100;
     if(three==30){
        index= (rem*2)+1;
    }
    else{
      index = rem*2;
    }
    if(index<0){
        index=index*-1;
    }
    return index;
}
function rnum(index){
    if(index%2!=0){
        time=parseInt((index/2));
        time=(time*100)+30;
            }
    else{
        time=index/2;
        time=(time*100);
    }
    return time;
}

function timeconver(time){
    let buf;
 let time2= time+T2-T1;
 if(time2%100 > 60){
     buf=100-(time2%100);
     time2=time2+buf;
 }
 return time2;
}




