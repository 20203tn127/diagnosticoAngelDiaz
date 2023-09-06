fetch('https://reqres.in/api/users?page=2')
.then((response)=>{
    response.json().then((payload)=>{
        console.log(payload.data)
            let lista = document.getElementById("tablita");
            payload.data.forEach(element=>{
                lista.innerHTML += 
                `<th scope="row">${element.id}</th>
                <td>${element.first_name}</td>
                <td>${element.email}</td>
                <td>${element.last_name}</td>
                <td ><img src="${element.avatar}" alt="" width=""></td>
                <td><button type="button" onclick="verUsuario(${element.id})"
                class="btn btn-primary btn-info" data-bs-toggle="modal" data-bs-target="#modalVer">
                Ver
              </button>
                <button type="submit" class="btn btn-light">actualizar</button>
                <button type="submit" class="btn btn-info">borrar</button>
                </td>
                `;
            }) 
    })
})
.catch((error)=>{
    console.log("Error al consultar", error)
})



function verUsuario(id) {
    let datosIndividules = document.getElementById("cardsita");
    datosIndividules.innerHTML = ''; // Clear existing content

    fetch(`https://reqres.in/api/users/${id}`)
        .then((response) => {
            response.json().then((payload) => {
                console.log(payload.data);

                datosIndividules.innerHTML += `
                    <img src="${payload.data.avatar}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${payload.data.first_name}</h5>
                        <p class="">${payload.data.email}</p>
                    </div>`;
            });
        });
}



function registrarUsuario(){
    fetch('https://reqres.in/api/users',{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }).then(response=>{
        window.alert(`El codigo de estado es: ${response.status}`)
    })
   
}







