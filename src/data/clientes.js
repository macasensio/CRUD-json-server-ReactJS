
//GET
export async function obtenerClientes(){

    // const url = 'http://localhost:3000/clientes'
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado

}

export async function obtenerCliente(id){

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()
    return resultado

}

//POST
export async function agregarCliente(datos){
    try {

        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()

    } catch (error) {
        console.log(error)
    }
}

//PUT
export async function actualizarCliente(id, datos) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "PUT",
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()

    } catch (error) {
        console.log(error)
    }
}

//DELETE
export async function eliminarCliente(id) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: "DELETE"
        })
        await respuesta.json()

    } catch (error) {
        console.log(error)
    }

}