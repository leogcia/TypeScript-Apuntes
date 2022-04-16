(()=>{

    class Avenger {
        constructor(
            public name: string,
            public realName:string
        ){
            console.log('Constructor Avenger llamado');
        }

        protected getFullName() {                     //* Protected: se puede acceder a metodos dentro de clases que "extiendan" a la clase
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean
        ){
            super(name, realName)
            console.log('constructor xmen llamado');
        }

        get fullName(){
            return `${this.name} - ${this.realName}`
        }

        set fullName(name:string) {

            if(name.length < 3) {
                throw new Error('El nombre debe tener más letras')
            }
            this.name = name;
        }


        getFullNamefromXmen(){
            console.log(super.getFullName());            //*usando protected de getFullName
            
        }
    }

    //const wolverine = new Xmen('Wolverine', 'Logan', true)
    
    // wolverine.fullName = 'Leonardo';
    
    // console.log(wolverine.fullName);
    //wolverine.getFullNamefromXmen();
    
})()