(()=> {
    
//*Quiero que solo el PRIMER argumento sea obligatorio y que el resto sean opcionales y la cantidad que sea:

    const fullName = (firstName: string, ...restArgs:string[]):string => {
        return `${firstName} ${restArgs.join(' ')}`
    };

    const superman = fullName('Clark', 'Joseph', 'Kent');

    console.log({superman});

})()