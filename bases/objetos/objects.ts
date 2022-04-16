(()=> {

    let flash:{name:string, age?:number, powers:string[], getName?:()=>string} = {
        name: 'Barry Alen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    }
    
    let superman:{name:string, age?:number, powers:string[], getName?:()=>string} = {
        name: 'Clark Kent',
        age: 30,
        powers: ['super velocidad']
    }

    console.log(flash);
    
})()