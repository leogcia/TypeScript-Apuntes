(()=> {

    const fullName = (firstName:string, lastName?:string, upper:boolean=false):String => {

        if(upper) {
            return `${firstName} ${lastName || 'No last name'}`.toLocaleUpperCase();
        } else {
            return `${firstName} ${lastName || 'No last name'}`;
        }
    }

    const name = fullName ( 'Tony', 'Stark', true);
    console.log({name});
})()