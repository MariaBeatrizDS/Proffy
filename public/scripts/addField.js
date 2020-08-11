//Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//Quando clicar no botão

//Executar uma ação
function cloneField(){
    //Duplicar os campos, Onde?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //Pegar cada campo, que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //Para cada compo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpar ele
        field.value = ""
    })
    
    //Colocar na página, Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}