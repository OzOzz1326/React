import { useState } from "react"

function Formularios(){
    let [nome, setNome] = useState("")
    let [idade, setIdade] = useState("")
    let [cidade, setCidade] = useState("")
    let [estado, setEstado] = useState("")

    function salvar(){
        if(nome == 0){
            alert("Preencha seu nome")
            return
        }
        if(idade == 0){
            alert("Preencha sua idade")
            return
        }
        if(cidade == 0){
            alert("Preencha sua cidade")
            return
        }
        if(estado == 0){
            alert("Preencha seu estado")
            return
        }
         alert("Seja bem vindo "+nome+". Você tem "+idade+", e mora em "+cidade+" - "+estado)
    }

    return(
        <div>
            <h1>Página de formulário</h1>
            <p>ABLUBLUBLÉ</p>

            <p>Digite o seu nome:</p>
            <input onChange={e => setNome(e.target.value)}/>
            <br/>
            <p>Digite sua idade:</p>
            <input onChange={e => setIdade(e.target.value)}/>
            <br/>
            <p>Digite sua cidade e estado:</p>
            <input onChange={e => setCidade(e.target.value)}/>
            <input onChange={e => setEstado(e.target.value)}/>
            <button onClick={salvar}>Salvar</button>
        </div>
    )
}

export default Formularios