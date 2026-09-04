import { useState } from "react"

function Perfil(){
    let [handleProfile, setHandleProfile] = useState(false)
    let [senha, setSenha] = useState(false)
    let usuario = {
        nome: "Caio Henrique",
        email: "ablubluble@gmail.com",
        senha: "123123"
    }

    return(
    <div>
        <h1>Perfil do Usuário</h1>
        <p>Veja aqui suas informações do perfil</p>
        <button onClick={()=> setHandleProfile(!handleProfile)}>Carregar Perfil</button>

        <hr/>

        {
            handleProfile == true ?
                <div>
                    <p>Nome: {usuario.nome}</p>
                    <p>E-mail: {usuario.email}</p>
                    <button onClick={()=> setSenha(!senha)}>Alterar senha</button>
                </div>
            :
                <p></p>
        }
        

        {
            senha == true ?
                <div>
                    <h2>Alterar senha</h2>
                    <p>Digite sua senha atual</p>
                    <input/>
                    <br/>
                    <p>Digite sua nova senha</p>
                    <input/>
                    <br/>
                    <button>Salvar e alterar</button>
                </div>
            :
                <p></p>
        }
    </div>
    )
}

export default Perfil