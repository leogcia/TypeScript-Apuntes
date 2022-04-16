(()=> {

    const addNumber = (a:number, b:number) => a + b;
    const greet = (name:string) => `Hola ${name}`;
    const saveTheWorld = () => 'El mundo está salvado';

    let myFuction:() => string;   //! Esta variable funciona unicamente con "saveTheWorld"... para las demás variables abajo se colocan sus ejemplos:

    //*let myFuction:number;
    //*myFuction = 10;
    //*console.log(myFuction);

    //?let myFuction:(x:number, y:number) => number;
    //?myFuction = addNumber;
    //?console.log(myFuction(1, 2))
    
    // let myFuction:(x:string) => string;
    // myFuction = greet;
    // console.log(myFuction('Leo'))

    myFuction = saveTheWorld;
    console.log(myFuction());


})()