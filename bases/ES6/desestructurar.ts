(()=> {

    type Avengers = {
        nick: string;
        ironman: string;
        capitanamerica: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert',
        capitanamerica: 'el wero ese',
        activo: true,
        poder: 1500
    }

    // const {poder, capitanamerica} = avengers;
    // console.log(poder.toFixed(2) , capitanamerica.toUpperCase());

    const printAvenger = ({ironman, ...resto}:Avengers) => {
        console.log(ironman, resto)
    }

    //printAvenger(avengers);

//*----------------------------------------------------------------------------------------------------------------------------//

    const avengersArr:[string, boolean, number] = ['Iron Man', true, 156151];

    const [ironMan, booleano, elnumero] = avengersArr;   //Se ponen llaves cuadradas porque estamos desestructurando un array;
                                                        //los nombres dentro de la destructuracion pueden ser distinto al arreglo original                                     
    //console.log({ironMan, booleano, elnumero})


    
})()