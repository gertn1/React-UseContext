import React, {createContext,useContext} from 'react';


//Criar contexto

const Contexto = createContext();


function Principal(){

let texto = 'Hooks UseContext'


//provider = providenciar
    return( 
    
    <Contexto.Provider value={{texto}}>
    <Camada1/>
    </Contexto.Provider>

    );
}

// Componente 1 
function Camada1(){
    return(
        <div style ={{backgroundColor: "red", width: "500px", height: "500px",display:'inline-block'}}>
        <Camada2/>
        </div>
        );

}

// Componente 2 
function Camada2(){
    return(
        <div style ={{backgroundColor: "green", width: "400px", height: "400px",margin:"50px", display:"inline-block"}}>
             <Camada3/>
        </div>
    );

}
// Componente 3 
function Camada3(){ // chaves texto

    const {texto} = useContext(Contexto);

    return(
        <div style ={{backgroundColor: "yellow", width: "300px", height: "300px",margin:"50px"}}>

        <p>{texto}</p>
        </div>
    );

}

export default Principal;