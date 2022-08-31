var myFuntion = function() {
    console.log(this);
};
myFuntion();

var myObject = {};
myObject.myMethod = function() {
    console.log(this);
};

//////////////////////////////////////////

et myFunction = function(){
    console.log(this);
    }
    
    myFunction();
    
    let myObject = {};
    
    myObject.myMethod = function(){
    console.log(this);
    }
    
    /*
    let nav = document.querySelector('.nav');
    
    let toggleNav = function(){
    console.log(this);
    };
    
    nav.addEventListener('click', toggleNav, false);
    */
    
    
    var nav = document.querySelector('.nav');
    
    var toggleNav = function(){
    console.log(this);
    setTimeout(function(){
    console.log(this);
    },1000)
    }
    
    nav.addEventListener('click', toggleNav, false);
    