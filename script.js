const pokemon = [

{ name:"Charmander", type:"fire" },
{ name:"Squirtle", type:"water" },
{ name:"Pidgey", type:"normal" }

]

function showType(type){

const container = document.getElementById("pokemon")

container.innerHTML = ""

pokemon.forEach(p => {

if(type === "all" || p.type === type){

container.innerHTML += `
<div class="card">
<h2>${p.name}</h2>
<p>${p.type}</p>
</div>
`

}

})

}

showType("all")
