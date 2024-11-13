import { Button } from "bootstrap";
import Etudiants from "./etudiants.js";

const displayEtudiants = async function(){
    return Etudiants.allEtudiants().then(function(response){
        return response.map((data) =>{
            const {id, name, date, note} = data
            const etudiant = new Etudiants(name, date, note)

            return`
            <tr>
                <td>${id}</td>
                <td>${etudiant.name}</td>
                <td>${etudiant.getAge()} ans</td>
                <td><span class="badge rounded-pill ${etudiant.isAdmitted() ? 'text-bg-success':'text-bg-danger'} ">${etudiant.note} / ${Etudiants.MAX_NOTE}</span></td>
                <td><button class='btn btn-danger btn-sm delete' deleteEtudiants(${id})'>Supprimer</button></td>
            </tr>
        `

        })
    })
}

// bach ajouter les etudiants

const addEtudiants = (event) => {
    event.preventDefault()
    const [name, date, note] = document.querySelectorAll('#name,#date,#note')
    const etudiants = new Etudiants(name.value,date.value,note.value)
    etudiants.addEtudiants()
}

const deleteEtudiant = (event,id) => {  
    console.log(id)
}

// HAD FUNCTION MKALFA BACH DIR LIA AFFICHAGE ...
const renderEtudiants = function() {

    const body = document.querySelector('.list-etudiants')        
        displayEtudiants().then((data) =>{
            body.innerHTML = data.join(' ') // join(' ') DARNAHA BACH NHAYDO ( , ) MN TABLEAU LI AFFICHER
            init()
        })
    
}

const init = function() {
    const refreshBotton = document.querySelector('#refresh')
    const addBotton = document.querySelector('#add') // bach ajouter les etudiants
    const deleteButton = document.querySelectorAll('.delete') // bach supprimer les etudiants
    refreshBotton.addEventListener('click', () => {
        renderEtudiants()
    })
    addBotton.addEventListener('click', (event) => { // bach ajouter les etudiants
        addEtudiants(event)
    })
    deleteButton.forEach((button) => {
        console.log(button.dataset.id)
        window.deleteEtudiant(id)
    })
    
}
renderEtudiants()


