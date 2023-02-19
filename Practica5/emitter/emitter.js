function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener){ 
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);  //en esta parte me costo un poco entender lo que hacia este codigo pero al final lo entendi
}


Emitter.prototype.emit = function(type){ 
    if(this.events[type]){
       this.events[type].forEach(function(listener){
        listener();
        });
    }
}//parte del codigo dond se emite lo que se guardo

module.exports = Emitter;//Habia olvidado que se debia exportar el modulo
