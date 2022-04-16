(()=>{

    class Avenger {

        //private name:String;                 //?con "private" solo podré tener acceso a estas propiedades dentro de la clase
        //private team: string;
        //public realName?: string;
        static avgAge: number = 35;          //?se mantienen iguales, osea que se pueden accesar a ella refiriendonos a la clase...
                                             //?...N0 a la instancia y seguido de la propiedad static 
        static getAvgAge(){
            return this.name
        }


        constructor(
            private name:string, 
            private team:string, 
            public realName?:string) {}      
            
        bio() {
            return `${this.name} (${this.team})!!!`
        }


    }

    // const antMan:Avenger = new Avenger('AntMan', 'TeamCapitan', 'Scott Lang');
    // console.log(antMan);
    // //console.log(Avenger.avgAge);              //?forma de usar una propiedad static

    // console.log(Avenger.getAvgAge());
    
    
})()