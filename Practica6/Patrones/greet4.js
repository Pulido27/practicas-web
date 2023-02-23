module.exports =  function Greetr(){
    this.greeting= "Hello form the function constructor"
    this.greet = function () {
        console.log(this.greeting);
    }
}