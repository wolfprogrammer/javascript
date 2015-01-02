
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


function logdir(object){
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


//  Modify a List of Objects
//
//  For each obj[i][property] = values[i]
//
//  :parma property : Property of Each Object to be assigned
//  :param objs     : A list of DOM objects
//  :param values   : A list of values to be assigned
//
//
function assign_objs(property, objs, values){
  
  //console.log(objs.length)
  //console.log(values.length)
  
  var N = min([objs.length, values.length])
  //console.log("N =")
  //console.log(N)
  
  for (var i = 0; i < N; i++) { 
     objs[i].setAttribute(property, values[i]) ;
     //console.log(values[i]) ;
     
     
  }// End for
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
  return w
}


function str(object){
    return object.toString()
}

// var str = "My Name is %NAME% and my age is %AGE%.";
// var replaceData = {"%NAME%":"Mike","%AGE%":"26","%EVENT%":"20"};
// var output = substitute(str, replaceData);
// console.log(output)
function format(str, data) {
    var output = str.replace(/%[^%]+%/g, function(match) {
        if (match in data) {
            return(data[match]);
        } else {
            return("");
        }
    });
    return(output);
}


function image_template(image_src, alt="", height=500, width=500){
      
      //var template = '<img style="max-width: 100px; height: auto; " src="%SRC%" />'
      //return format(template)
      
      var template = '<img src="%SRC%" alt="%ALT%" width="%W%" height="%H%">'
      return format(template, {"%SRC%" : image_src, "%ALT%" : alt, "%W%" : width, "%H%" : height});
}


// Open a new Window in the Slideshare website with
// all slides images.
//////////////////////////////
function scrape_slideshare(){
    
    elements = document.getElementsByClassName("slide_image")
    urls = pluck("full")(pluck("dataset")(elements))
    codelst = map(image_template, urls)
    code = codelst.join("\n <br>")  
    return popup_window(code)

}

//
//
function find_class(classname){
    
    return document.getElementsByClassName(classname)
}


function find_tag(classname){
    
    return document.getElementsByTagName(classname)
}




//-----------------------------------//
//  Eval an base64 encoded string    //
//  
// Example: evalb64("YWxlcnQoJ2xvcmVtIGlwc3VtJyk=")
// will run alert  alert('lorem ipsum')!
//
function evalb64(b64string){  
    eval(atob(b64string))
}


function injectscript(script_url){
    document.body.appendChild(document.createElement('script')).src= script_url
}

function inject_jquery(){
    injectscript("http://code.jquery.com/jquery-1.7.2.min.js")
}
inject_jquery()

sin = vectorize(Math.sin)
cos = vectorize(Math.cos)
exp = vectorize(Math.exp)


//  // Encode the String
// var encodedString = Base64.encode(string);
// console.log(encodedString); // Outputs: "YWxlcnQoJ2hlbGxvIHdvcmxkJykgOyA="
//
// Decode the String
//
// var decodedString = Base64.decode(encodedString);
// console.log(decodedString); // Outputs: "Hello World!"
// Create Base64 Object
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

// Dynamically removing an external JavaScript or CSS file
// removejscssfile("somescript.js", "js") //remove all occurences of "somescript.js" on page
// removejscssfile("somestyle.css", "css") //remove all occurences "somestyle.css" on page
// 
// http://www.javascriptkit.com/javatutors/loadjavascriptcss2.shtml
//
//
function removejs(filename, filetype="js"){
 var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
 var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
 var allsuspects=document.getElementsByTagName(targetelement)
 for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
   allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
 }
}https://raw.githubusercontent.com/wolfprogrammer/javascript/master/functional.js

function remove_alljs(){
        var url = ""
        map(removejs ,pluck("src")(document.scripts))
        document.body.appendChild(document.createElement('script')).src = "https://raw.githubusercontent.com/wolfprogrammer/javascript/master/functional.js"
        
}


function shell(){
// Open Interactive Shell
//
    injectscript('http://www.billyreisinger.com/jash/source/latest/Jash.js')    
}


function user_guide(){
    console.log("Functional.js - A functional programming Library for Javascript ")
    
    console.log("Higher Order functions ")
    console.log("map(func, list), filter(func, list), zip(*list), compose(func1, func2) ")
    console.log("")
    console.log("List Manipulation Utilities")
    console.log("")
    console.log("reverse(list), sort(list), max(list), sum(list), product(list),")
}



//
//////////////////////////////////////////////////
//    S C R A P I N G   F U N C T I O N S       //
//////////////////////////////////////////////////


//
//  http://cdn.slidesharecdn.com/iit-2010-11-02-101130075324-phpapp02-slide-1.swf?ver=1291125269
//  
function scrape_slideshare2(){
    
    elements = document.getElementsByClassName("slide_image")
    urls = pluck("full")(pluck("dataset")(elements))
    codelst = map(image_template, urls)
    code = codelst.join("\n <br>")  
    document.write(code)

}


//
//  Function to modify the links of the site:
//
//  http://rosettacode.org/wiki/Category:Scheme
//
function patch_roseta_code(language){
    c = find_class("mw-content-ltr")
    links = c[0].getElementsByTagName("a")
    hrefs = pluck("href")(links)
    newhrefs = map(function(x){ return x + "#" + language}, hrefs)
    assign_objs(links, newhrefs, "href")
}


