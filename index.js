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
                <td ><img src="${element.avatar}" alt="" width=""></td>`;
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
    }).then(response=>{
        window.alert(`El codigo de estado es: ${response.status}`)
    })
   
}











