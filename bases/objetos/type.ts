(()=> {

    //*La palabra reservada type se usa para poner reglas o restricciones...

    type Hero = {
        name: string,
        age?: number,             // el signo ? nos permite decir que es opcional 
        powers: number[],
        getName?: ()=> string    // el signo ? nos permite decir que es opcional 
    }

    let flash:Hero = {
        name: 'Barry Alen',
        age: 24,
        powers: [1, 2]
    }
    
    let superman:Hero = {
        name: 'Clark Kent',
        age: 30,
        powers: [1],
        getName() {
            return this.name;
        }
    }

    
})()