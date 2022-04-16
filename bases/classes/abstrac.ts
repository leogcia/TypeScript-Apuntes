(()=>{

    //Las clases abstractas sirven para crear nuevas clases o que estas clases se extiendan de ellas
    //O asegurarme de que un argumento puede ser de cualquier otro tipo, siempre y cuando implemente las caracteristicas de su clase abstracta
    
    abstract class Mutante {   
        constructor(
            public name:string,
            public realName:string
        ){}
    }


    class Xmen extends Mutante {

        salvarMundo(){
            return 'Mundo a salvo'
        }
    }

    class Villian extends Mutante {

        conquistarMundo(){
            return 'conquistar el mundo'
        }
    }

    
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());
    
    // const printName = (character:Mutante) => {
    //     console.log(character.realName);
        
    // }

    // printName(wolverine)
    

})()