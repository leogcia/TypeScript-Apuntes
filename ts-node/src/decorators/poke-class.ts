
function printToConsole (constructor:Function) {
    console.log(constructor);
    
}

const printToConsoleConditional = (print:boolean=false):Function => {
    if(print) {
        return printToConsole
    } else {
        return ()=> {}
    }
}

const bloquearPrototipo = function(constructor:Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokeId() {
    return function(target:any, propertyKey:string, descriptor:PropertyDescriptor){
        
        const originalMetod = descriptor.value;
        descriptor.value = (id:number) => {
            if(id < 1 || id > 800) {
                return console.log('El id debe ser entre 1 y 800');
            } else {
                return originalMetod(id)
            }
        }
        //descriptor.value = () => console.log('Hola Mundo');
        
        
    }
}

function readOnly(isWritable:boolean=true) {
    return function(target:any, propertyKey:string){
        const descriptor:PropertyDescriptor = {
            get(){
                console.log(this);   
                return 'Leonardo';
            },
            set(this, val){
                // console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;

    }
}


@bloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {

    //@readOnly(true)    no encuentro el error
    public publicApi:string = 'https://pokeapi.co';

    constructor (
        public name:string
    ) {}

    @CheckValidPokeId()   
    savePokemonToDb(id:number) {
        console.log(`Pokemon guardado en Base de datos ${id}`);
        
    }
}