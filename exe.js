class Grupo {
    constructor() {
      this.primero = null;
    }
    agregar(nombre, edad) {
      if (this.primero == null) {
        this.primero = {nombre, edad, siguiente: null};
      } else {
        let temp = this.primero;
        while (temp.siguiente != null) {
          temp = temp.siguiente;
        }
        temp.siguiente = {nombre, edad, siguiente: null};
      }
    }
    listar() {
      let temp = this.primero;
      while (temp != null) {
        console.log(temp.nombre);
        temp = temp.siguiente;
      }
    }
    
    largo(){
      let temp = this.primero;
      let cont = 0;
      if(temp!=null){
        while (temp != null) {
          cont++;
          temp = temp.siguiente;
        }
        return cont;
      }else{return 0};
    }

    Posicion(nodo){
      let temp = this.primero;
      let pos = 0
      if(temp!=null){
        while (temp != null ){
          pos++;
          if(temp==nodo){
            return pos;
          }
          temp = temp.siguiente;
        }
        
      }else{console.log("lista vacia")};
    }


    listarEdadA(){
      let temp = this.primero;
      let aux = this.primero
      let aux2= {nombre: "x2", edad:200, siguiente: null};
      let cont = 0;
      if(temp!=null){
        if(temp.siguiente!=null){
          while(cont<this.largo()){
            while(temp.siguiente!=null){
              if(aux.edad>temp.siguiente.edad){
                console.log("a1")
                if(aux!=aux2){
                  console.log("b1")
                  if(aux.edad<aux2.edad){
                    console.log("c1")
                    temp= temp.siguiente;
                  }else{
                    console.log("c2")
                    if(aux.edad==aux2.edad){
                      console.log("d1")
                      if(this.Posicion(aux)<this.Posicion(aux2)){
                        console.log("e1")
                        temp= temp.siguiente;
                      }else{
                        console.log("e2")
                        temp = temp.siguiente;
                        aux = temp;                            
                      }
                    }else{
                      console.log("d2")
                      temp = temp.siguiente;
                      aux = temp;                      
                    }
                  }
                }else{
                  console.log("b2")
                  temp = temp.siguiente;
                  aux = temp;               
                }                
  
              }else{
                console.log("a2")
                if(temp.siguiente!=aux2){
                  if(temp.siguiente.edad<aux2.edad){
                    temp= temp.siguiente;
                    aux=temp;
                  }else{
                    if(temp.siguiente.edad==aux2.edad){
                      if(this.Posicion(temp.siguiente)<this.Posicion(aux2)){
                        temp= temp.siguiente;
                        aux=temp;
                      }else{
                        temp = temp.siguiente;                            
                      }
                    }else{
                      temp = temp.siguiente;                      
                    }
                  }
                }else{
                  temp = temp.siguiente;               
                }  
              }

                          
            }
            let error = {nombre: "x3", edad:200, siguiente: this.primero};
            temp=error;
            aux2=aux
            console.log(aux2.nombre)  
            cont++
          }
          

        }else{
          console.log(temp);
        }
        
      }else{console.log("No hay elementos")}

  }
}
  

  
  let g2b = new Grupo();
  g2b.agregar("Rafa", 25);
  g2b.agregar("Ana", 30);
  g2b.agregar("Karen", 30);
  g2b.agregar("Julian", 23);
  g2b.agregar("Fercho", 30);
  //g2b.agregar("Jesus", 28);
  //g2b.agregar("Luis", 31);
  //g2b.agregar("Henry", 26);
  
  g2b.listar(); // imprimirá los nombres de las personas en el grupo
  g2b.listarEdadA();
