//const Data almacena y retorna el resultado del fetch al API
export const Data = () => {

    fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(data => {
            let info = [];
            let i = 0;
            for(i=0; i<data.results.length; i++){toString(i)  
                info.push(data.results[i]);
            }
            console.log(info)
        });
        
}
//console.log(Data())

