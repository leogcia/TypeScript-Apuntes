(()=> {
//Es nescesario poner que tipo de dato se espera en los argumentos...
    const fullName = (firstName:string, lastName:string):String => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName ( 'Tony', 'Stark');
    console.log({name});
})()