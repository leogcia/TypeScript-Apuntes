(()=>{

    interface Client {
        name:string,
        age?:number,
        address:Address,   //* <-----------
        getFullAddress(id:string):string
    }

    interface Address {    //* <-----------
        id:number,
        cp:number,
        city:string
    }

    const client:Client = {
        name: 'Leonardo',
        age:30,
        address:{                  //* <-----------
            id:125,
            cp:6400,
            city:'cdmx'
        },
        getFullAddress(id:string){
            return this.address.city;
        }
    }

    const client2:Client = {
        name:'Melissa',
        age:35, 
        address:{                   //* <-----------
            city:'Hidalgo',
            id:897,
            cp:65222
        },
        getFullAddress(id:string){
            return this.address.city;
        }
    }




})()