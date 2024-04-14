const add= a=>b=>c=>d=>e=>f=>g=>h=>i=>j=>a+b+c+d+e+f+g+h+i+j;

const add1=add(1);
const add2=add1(2);
const add3=add2(3);
const add4=add3(4);
const add5=add4(5);
const add6=add5(6);
const add7=add6(7);
const add8=add7(8);
const add9=add8(9);

console.log(add9(10));

//a function that takes 10 arguments;
function addTotal(a,b,c,d,e,f,g,h,i,j){
    return a+b+c+d+e+f+g+h+i+j;
}

//curried version of addTotal
function curriedAddTotal(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return function(f){
                        return function(g){
                            return function(h){
                                return function(i){
                                    return function(j){
                                        return  a+b+c+d+e+f+g+h+i+j;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}