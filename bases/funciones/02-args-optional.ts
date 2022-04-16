(()=> {
    //para un parámetro opcional colocamos el signo "?" para preguntar si existe ese argumento..
    const fullName = (firstName:string, lastName?:string):String => {
        //También deberíamos poner una opción a mostrar en caso de que no existiera el argumento
        // de lo contrario mandará un "undefined" por defecto...
        return `${firstName} ${lastName || 'No last name'}`;
    }

    const name = fullName ( 'Tony');
    console.log({name});
})()