fetch ('/api/mensaje')
.then(response => response.json())
.then(data =>{
    document.getElementById('mensaje').textContent = data.mensaje;

})

.catch(error =>{
    console.error('Error',error);
})