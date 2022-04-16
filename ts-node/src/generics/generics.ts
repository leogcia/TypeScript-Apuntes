
export const printObj = (argument:any) => {
    console.log(argument);
    
}


export function genericFunction<T>(argument:T):T {  // Se usa una <T> para indicar que es una funcion genérica... ésto es por estándar
    return argument;
}

export const genericArrow = <T>(argument:T) => argument