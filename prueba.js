/*
export const Data = (done) => {
    const results = fetch("https://rickandmortyapi.com/api/character");
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}
Data(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(
            
        <article>
                
        <div>
            <img src="${personaje.image}" alt="Personaje" />
        </div>
        <h2>${personaje.name}</h2>
        <span>${personaje.status}</span>
    </article>
);
const main = document.querySelector("main");
main.append(article);
});
});





export function Data (done) {
    fetch("http://masterfeed.shnadmin.com/feed/sportdirect/injuries?key=KVbgULzIPQRXsREsbzrCFqdydvweEJUVUobxDZBsTOIzKNsNXW")
        .then(res => res.json())
        .then(response => {
            console.log(response[0]['data-content'][0][0].injuries[0]);
        })
    
    .catch(function(e){
     console.log(e)
    })
}
console.log(Data());



fetch("http://masterfeed.shnadmin.com/feed/sportdirect/injuries?key=KVbgULzIPQRXsREsbzrCFqdydvweEJUVUobxDZBsTOIzKNsNXW", {
    method:'GET',
    mode:'cors',
    cache:'force-cache',
    credentials:'same-origin'
})
    .then(res => res.json())
    .then(response => {
        console.log(response[0]['data-content'][0][0].injuries[0]);
    })

.catch(function(e){
 console.log(e)
})



*/






