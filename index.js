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
                <td>
                <button type="button" onclick="verUsuario(${element.id})"
                class="btn btn-primary btn-info" data-bs-toggle="modal" data-bs-target="#modalVer">
                Details
                </button>
                
                <button type="button" onclick="actualizarUsuario(${element.id})"
                class="btn btn-primary btn-warning">
                Update
                </button>

                <button type="button" onclick="borrarUsuario(${element.id})"
                class="btn btn-primary btn-danger">
                Delete
                </button>

                </td>
                `;
            }) 
    })
})
.catch((error)=>{
    console.log("Error al consultar", error)
})

function registrarUsuario(){
    fetch('https://reqres.in/api/users',{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'method': 'POST'
    }).then(response=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `El codigo de estado es:  ${response.status}`,
            showConfirmButton: false,
            timer: 1700
          })

    })
   
}

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
                        <h5 class="card-title">Nombre: ${payload.data.first_name}</h5>
                        <p class="">Email: ${payload.data.email}</p>
                    </div>`;
            });
        });
}

function actualizarUsuario(id) {
    fetch(`https://reqres.in/api/users/${id}`,{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'method': 'PUT'
    })
    .then((response)=>{
        response.json().then((payload)=>{
            const createdAt = payload.updatedAt;
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Actualizado correctamente en la fecha: ${createdAt}
                 con estado:  ${response.status}`,
                showConfirmButton: false,
                timer: 1700
              })
        })
        

    })
}


function borrarUsuario(id) {
    fetch(`https://reqres.in/api/users/${id}`,{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'method': 'DELETE'
    })
    .then((response)=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Eliminado correctamente con estatus ${response.status}`,
            showConfirmButton: false,
            timer: 1700
        })
    })
}
