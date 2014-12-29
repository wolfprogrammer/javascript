
//  Return the last element of an array
//  >
//  > end([1,2,3,4,5])
//  5
//
function end(x){ 
  return x[x.length-1] ;
} 

function start(x){
  return x[0] ;
}


function logger1(message){
 console.log(message)

}


function logger2(object){
 console.dir(object)
}



function map(fun, x){
 
  results = []

  for (i = 0; i < x.length; i++) {
           
    results.push(fun(x[i]));
   }

return results
  
}// End of MAP


function length(List){
   return List.length   
}

function take(n, List){
    return List.slice(0, n) 
}

function take_(n){
    function f(List){
        return List.slice(0, n) 
    }
    return f
}



function reverse(List){     
  return List.reverse()
}

function compose(functions){

   var function2 = functions.reverse() ;
   var N = functions.length ;
   
   function composed(){
       
       for (i = 0; i < N; i++) {
               
        result = result(functions2[i])  ;
       }
        
      return result ;
    };
    
    return composed ;
}


//  Equivalent to python dict(zip(['AB', 'CD', 'EF', 'GH'],[1, 2, 3, 4])) in javascript
//  https://gist.github.com/ThomasG77/2186830  
//
//  var first = ['AB', 'CD', 'EF', 'GH'];
//  var second = [1, 2, 3, 4];
//  var test = dict_zip(first, second)
//  console.dir(test);
//
// Equivalent to python dict(zip(['AB', 'CD', 'EF', 'GH'],[1, 2, 3, 4])) in javascript
var dict_zip = function (key_array, val_array) {
    if (key_array.length === val_array.length) {
        var obj = {};
        var len = first.length;

        for (var i = 0;i<len;i++) {
            obj[first[i]] = second[i];
        }
    return obj;
    }
}

function range(start, stop, step){
    if (typeof stop=='undefined'){
        // one param defined
        stop = start;
        start = 0;
    };
    if (typeof step=='undefined'){
        step = 1;
    };
    if ((step>0 && start>=stop) || (step<0 && start<=stop)){
        return [];
    };
    var result = [];
    for (var i=start; step>0 ? i<stop : i>stop; i+=step){
        result.push(i);
    };
    return result;
};




//linspace.js Generate linearly spaced vectors
//Helena F. Deus (helenadeus@gmail.com)
//200809
//
//  > linspace(0, 8, 4)
//  [0, 2.6667, 5.3334, 8]
//
function linspace(d1,d2,n) {
               
        j=0;
        var L = new Array();
       
        while (j<=(n-1)) {
       
                var tmp1 = j*(d2-d1)/(Math.floor(n)-1);
                var tmp2 = Math.ceil((d1+tmp1)*10000)/10000;
                L.push(tmp2);
                j=j+1;
        }
       
        return L;
 }


//  Get the maximum number in a array
//
function max(x) {
    var i;
    var mmax = x[0];

    for (i = 0; i < x.length; i++) {
        if (x[i] > mmax) {
            mmax =x[i];
        }
    }
    return mmax;
}


//  Get the maximum number in a array
//
function min(x) {
    var i;
    var mmin = x[0];

    for (i = 0; i < x.length; i++) {
        if (x[i] < mmin) {
            mmin =x[i];
        }
    }
    return mmin;
}

//
// Javascript Clousure ( Functional Programming)
//
function makepower(power){
  function powerfn(base){
     return Math.pow(base, power) ;
  }
  return powerfn
}


function  get(property){
    function get_property(object){
        return object[property]   
    }
    
    return get_property
}

function pluck(property){
    
    function get_property(List_of_objects){
        return map(get(property), List_of_objects)
    }
    
    return get_property
}



function sum(List){
    
    var S = 0 
    for (i = 0; i < List.length; i++) {
       S = S + List[i]
    }
    return S 
}

function product(List){
    
    var S = 1 
    for (i = 0; i < List.length; i++) {
       S = S*List[i]
    }
    return S 
}


function fibonacci(n) {
   if (n < 2){
     return 1;
   }else{
     return fibonacci(n-2) + fibonacci(n-1);
   }
}


function redirect_url(url){
    window.location.replace(url);
}

function reload_page(){
    window.location.reload()
}

function open_window(url){
    window.open(url , '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
}


//   Create Version of a function
//   ( a function that accepts an array instead 
//     of a single argument)
//
//   Example:
//   > sqrt = vectorize(Math.sqrt)
//   > sqrt([1, 2, 3])
//     [1, 1.4142135623730951, 1.7320508075688772]
//
function vectorize(fun){
  function fun_vectorized(x){
    return map(fun, x)
  }
  
  return fun_vectorized  
}

// PAR
function even(n){
   return n % 2 == 0
}

// IMPAR
function odd(n){
   return n % 2 == 1
}



//
// 
//  zip([1,2, 3], [33, 55, 44], range(10))
//  [[1, 33, 0], [2, 55, 1], [3, 44, 2]]
//
function zip(){
   
  N = min(map(length, arguments))
  
  //logger1(N)  
   //takeN = take_(N)
  
  var List2 = []
            
  for (var i = 0; i < N; i++) {
      
      var Listrow = []
      
      for (var j = 0; j < length(arguments); j++) {
      
       Listrow.push(arguments[j][i])
             
  //# alert(arguments[i]);
       }   
      
      //logger1(Listrow)
      List2.push(Listrow)
  //# alert(arguments[i]);
  }
  
  return List2   
}


// Create dynamic popup window
//
function popup_window(content){
  var w = window.open('', '', 'width=400,height=400,resizeable,scrollbars');
  w.document.write(content);
  w.document.close(); // needed for chrome and safari
}



sin = vectorize(Math.sin)
cos = vectorize(Math.cos)
exp = vectorize(Math.exp)


people = [{ 'name': 'moe', 'age': 40}, {'name': 'larry', 'age': 50}, {'name': 'curly', 'age': 60}]

