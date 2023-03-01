function Emitter(){
    this.events = {};
}

 //la palabra prototype se refiere a una modificacion a un objeto
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);  
}


Emitter.prototype.emit = function(type){ 
    if(this.events[type]){
       this.events[type].forEach(function(listener){
        listener();
        });
    }
}//parte del codigo dond se emite lo que se guardo

module.exports = Emitter;//Habia olvidado que se debia exportar el modulo
