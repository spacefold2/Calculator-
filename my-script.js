
var exOne =[];
var a1 = [];
var o1 = [];
var b1 =[];
var exTwo = [];
var a2 = [];
var o2 = [];
var b2 = []; 
//display 

function showMe() { 
    
    document.getElementById('screen').innerHTML = '0';

    if (o1.length < 1) {
        document.getElementById('screen').innerHTML = a1.join('');
        
    }
    else if (a1.length >= 1 && b1.length < 1 && o1.length <= 1) {
        document.getElementById('screen').innerHTML = o1[0];
    }
    else if (a1.length >= 1 && b1.length < 1 && o1.length > 1) { 
        document.getElementById('screen').innerHTML =  o1[1];


    }
    else if ( o1.length >= 1 ) {
        document.getElementById('screen').innerHTML = b1.join('');
    }
    
}




// should i combine the three touch functions into one function? 
//will loop allow me to chain operations? recursive loop? 
//Event listner A
function touchA() { 
    document.getElementById("calcKey1").addEventListener( "click", function(){
    if ( o1.length < 1) {
        a1.push(1);
        console.log(a1);
        showMe();
        
}
})

document.getElementById("calcKey2").addEventListener( "click", function(){
    if ( o1.length < 1) {
    a1.push(2);
    console.log(a1);
    showMe();

   
}})

document.getElementById("calcKey3").addEventListener( "click", function(){
    if ( o1.length < 1) {
    a1.push(3);
    console.log(a1);
    showMe();
}})

document.getElementById("calcKey4").addEventListener( "click", function(){
    if ( o1.length < 1) {
    a1.push(4);
    console.log(a1);
    showMe();
}})

document.getElementById("calcKey5").addEventListener( "click", function(){
    if ( o1.length < 1) {
    a1.push(5);
    console.log(a1);
    showMe();
}})

document.getElementById("calcKey6").addEventListener( "click", function(){
    if ( o1.length < 1) {
    a1.push(6);
    console.log(a1);
    showMe();
}})

document.getElementById("calcKey7").addEventListener( "click", function(){
    if ( o1.length < 1) {
    a1.push(7);
    console.log(a1);
    showMe();

    
}})

document.getElementById("calcKey8").addEventListener( "click", function(){
    if ( o1.length < 1) {
    a1.push(8);
    console.log(a1);
    showMe();
}})

document.getElementById("calcKey9").addEventListener( "click", function(){
    if ( o1.length < 1) {
    a1.push(9);
    console.log(a1);
    showMe();

    
}})

document.getElementById("calcKey0").addEventListener( "click", function(){
    if ( o1.length < 1) {
    a1.push(0);
    console.log(a1);
    showMe();

    
}})

}



//touchA();

// event listner o 
// store operators

function touchO() { 


//    a.push(1);
//})
document.getElementById("calcKeyPlus").addEventListener( "click", function(){
    if (a1.length >= 1 && o1.length < 1) {
    o1.push('+');
    console.log(o1);
    showMe();
   
}
else if (b1.length >= 1 ) {
    o2.push('+');
        showMe();
    console.log(exOne);
    console.log(a2);
    console.log(o2);



}
else if (o2.length >= 1) {
    o1.push('+');
    showMe();
    console.log(o2);
    console.log(o1);
}
})
document.getElementById("calcKeyMinus").addEventListener( "click", function(){
    if (a.length >= 1 && o.length < 1)  {
    o.push('-');
  console.log(o);
  showMe();
 
}
else if (a.length >= 1 && o.length >= 1 ) {
    o.splice (1, o.length, '-');
        showMe();
    console.log(o);
    console.log(answr);
    console.log(stringA)

}})
document.getElementById("calcKeyTimes").addEventListener( "click", function(){
    if (a.length >= 1 && o.length < 1) {
    o.push('*');
console.log(o);
showMe();

}
else if (a.length >= 1 && o.length >= 1 ) {
    o.splice (1, o.length, '*');
    showMe();
    console.log(o);
    console.log(answr);
    console.log(stringA);


}})
document.getElementById("calcKeyDivide").addEventListener( "click", function(){
    if (a.length >= 1 && o.length < 1)  { 
o.push('/');
console.log(o);
showMe();
console.log(o);


}
else if (a.length >= 1 && o.length >= 1 ) {
    o.splice (1, o.length, '/');
    showMe();
    console.log(o)
    console.log(answr);
    console.log(stringA)


}})
}

//Event Listener B
function touchB() { 
     
    document.getElementById("calcKey1").addEventListener( "click", function(){
        if (o1.length >= 1){
        b1.push(1);
        console.log(b1);
        showMe();
       
    }

else if (a2.length >= 1){ 
    b2.push(1);
    console.log(b2); 
    showMe();
} })
    
    document.getElementById("calcKey2").addEventListener( "click", function(){
        if (o1.length >= 1) {
        b1.push(2);
        console.log(b1);
        showMe();
        

    }
    else if (a2.length >= 1){ 
        b2.push(2);
        console.log(b2); 
        showMe();}})
    
    document.getElementById("calcKey3").addEventListener( "click", function(){
        if (o1.length >= 1) {
        b1.push(3);
        console.log(b1);
        showMe();
       

    }
    else if (a2.length >= 1){ 
        b2.push(3);
        console.log(b2); 
        showMe();}})
}
    
    document.getElementById("calcKey4").addEventListener( "click", function(){
        if (o1.length >= 1) {
        b1.push(4);
        console.log(b1);
        showMe();
      

    } else if (a2.length >= 1){ 
        b2.push(4);
        console.log(b2); 
        showMe();}})

    document.getElementById("calcKey5").addEventListener( "click", function(){
        if (o1.length >= 1) {
        b1.push(5);
        console.log(b1);
        showMe(); }

        else if (a2.length >= 1){ 
            b2.push(5);
            console.log(b2); 
            showMe();}})
    
    document.getElementById("calcKey6").addEventListener( "click", function(){
        if (o1.length >= 1) {
        b1.push(6);
        console.log(b1);
        showMe(); 
        }

        else if (a2.length >= 1){ 
            b2.push(6);
            console.log(b2); 
            showMe();}})
    
    document.getElementById("calcKey7").addEventListener( "click", function(){
        if (o1.length >= 1) {
        b1.push(7);
        console.log(b1);
        showMe();
        }
        else if (a2.length >= 1){ 
            b2.push(7);
            console.log(b2); 
            showMe();}})

    document.getElementById("calcKey8").addEventListener( "click", function(){
        if (o1.length >= 1) {
        b1.push(8);
        console.log(b1);
        showMe();} 


     else if (a2.length >= 1){ 
        b2.push(8);
        console.log(b2); 
        showMe();}})
    
    document.getElementById("calcKey9").addEventListener( "click", function(){
        if (o1.length >= 1) {
        b1.push(9);
        console.log(b1);
        showMe();} 

        else if (a2.length >= 1){ 
            b2.push(9);
            console.log(b2); 
            showMe();}})

    document.getElementById("calcKey0").addEventListener( "click", function(){
        if (o1.length >= 1) {
        b1.push(0);
        console.log(b1);
        showMe();
    } 

    else if (a2.length >= 1) { 
        b2.push(0);
        console.log(b2); 
        showMe();}})
    

function operator() {                                               //does not activate touchA once answr is populated
    document.querySelectorAll('.op').forEach( item => { 
        item.addEventListener('click', event => {
    
   if ( b1.length >= 1 && o1 == "+") { 
    a1.splice(0, a1.length, (a1.join('')));
   console.log(a1);
   b1.splice(0, b1.length, (b1.join('')));
   console.log(b1);
    exOne.splice(0, exOne.length, ((parseInt(a1,10)) + (parseInt(b1, 10)))); 
    a2.splice(0, a2.length, ...exOne);
    a1.splice(0, a1.length);
    o1.splice(0, o1.length);
    b1.splice(0, b1.length);
    console.log(a1);
    console.log(exOne)
    console.log(b1);
    console.log(o1);
    console.log(o2);
    console.log(a2)

    document.getElementById('screen').innerHTML = exOne;

}

else if (b2 >= 1 && o2 == "+") {

    a2.splice(0, a1.length, (a2.join('')));
   console.log(a2);
   b2.splice(0, b2.length, (b2.join('')));
   console.log(b2);
    exTwo.splice(0, exTwo.length, ((parseInt(a2,10)) + (parseInt(b2, 10)))); 
    a1.splice(0, a1.length, ...exTwo);
    a2.splice(0, a2.length);
    o2.splice(0, o2.length);
    b2.splice(0, b2.length);
    console.log(a2);
    console.log(exTwo)
    console.log(b2);
    console.log(o2);
    console.log(o1);
    console.log(a1)

    document.getElementById('screen').innerHTML = exTwo;

}

else if (b.length > 0 && o[1] == "+" && o.length > 1) { 
    o.splice (1, o.length, '+')
    stringA.push(a.join(''));

    console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.splice(0, answr.length, ((parseInt(stringA,10)) + (parseInt(stringB, 10)))); 
    stringA.splice(0, stringA.length, ...answr);
    stringB.splice(0, stringB.length);
    o.splice(0, o.length);
    b.splice(0, b.length);
    console.log(stringA);
    console.log(a);
    console.log(answr)
    console.log(b);
    console.log(o);

    document.getElementById('screen').innerHTML = answr;


}
   else if ( b.length > 0 && o[0] == "-" && o.length < 2) {

    stringA.push(a.join(''));

    console.log(stringA);
   console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.splice(0, answr.length, ((parseInt(stringA,10)) - (parseInt(stringB, 10)))); 
    stringA.splice(0, stringA.length, ...answr);
    stringB.splice(0, stringB.length);
    b.splice(0, b.length);
    console.log(a);
    console.log(answr)
    console.log(b);
    console.log(o);

    document.getElementById('screen').innerHTML = answr;

}                  // stringA and stringB not clearing when different operator is used
                // operator is switching to next operator key before the first stored operator can perform its operation 
                // ex 3 + 3 - 2 = -2
else if (b.length > 0 && o[1] == "-") { 
    o.splice (1, o.length, '-')
    stringA.push(a.join(''));

    console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.splice(0, answr.length, ((parseInt(stringA,10)) - (parseInt(stringB, 10)))); 
    stringA.splice(0, stringA.length, ...answr);
    stringB.splice(0, stringB.length);
    b.splice(0, b.length);
    console.log(a);
    console.log(answr)
    console.log(b);
    console.log(o);

    document.getElementById('screen').innerHTML = answr;
}

   else if ( b.length > 0 && o[0] == "*"  && o.length < 2) {
    stringA.push(a.join(''));

    console.log(stringA);
   console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.splice(0, answr.length, ((parseInt(stringA,10)) * (parseInt(stringB, 10)))); // string keeps repeating so answer does nto change from first operation
    a.splice(0, a.length, ...answr)
    stringA.splice(0, stringA.length, ...answr)
    stringB.splice(0, stringB.length);
    b.splice(0, b.length);
    console.log(a);
    console.log(answr)
    console.log(b);
    console.log(o);

    document.getElementById('screen').innerHTML = answr;


}

else if (b.length > 0 && o[1] == "*") { 
    o.splice (1, o.length, '*')
    stringA.push(a.join(''));

    console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.splice(0, answr.length, ((parseInt(stringA,10)) * (parseInt(stringB, 10)))); 
    stringA.splice(0, stringA.length, ...answr);
    stringB.splice(0, stringB.length);
    b.splice(0, b.length);
    console.log(a);
    console.log(answr)
    console.log(b);
    console.log(o);

    document.getElementById('screen').innerHTML = answr;
}

   else if ( b.length > 0 && o[0] == "/" && o.length < 2) { 
    stringA.push(a.join(''));
   console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.splice(0, answr.length, ((parseInt(stringA,10)) / (parseInt(stringB, 10)))); 
    stringA.splice(0, stringA.length, ...answr);
    stringB.splice(0, stringB.length);
    b.splice(0, b.length);
    console.log(a);
    console.log(answr)
    console.log(b);
    console.log(o);

    document.getElementById('screen').innerHTML = answr;

}
else if (b.length > 0 && o[1] == "/") { 
    o.splice (1, o.length, '/')
    stringA.push(a.join(''));

    console.log(stringA);
   stringB.push(b.join(''));
   console.log(stringB);
    answr.splice(0, answr.length, ((parseInt(stringA,10)) / (parseInt(stringB, 10)))); 
    stringA.splice(0, stringA.length, ...answr);
    stringB.splice(0, stringB.length);
    b.splice(0, b.length);
    console.log(a);
    console.log(answr)
    console.log(b);
    console.log(o);

    document.getElementById('screen').innerHTML = answr;
}
})
    })
}

touchA();
touchO();
touchB();
operator();

//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})
//document.getElementById().addEventListener( "click", function(){
  //  a.push(1);
//})







//function operate {
 
//}

//function multiply {

//}

//function divide { 

//}

//function add {

//}

//function subtract {

//}