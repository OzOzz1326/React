import { useEffect, useState } from "react"

function App(){

    const[users, setUsers] = useState([])
    const[search, setSearch] = useState("")

    async function searchAll(){
        const response = await fetch("https://dummyjson.com/users")
        const data = await response.json()
        console.log(data)
        setUsers(data.users)
    }

    async function searchName(name){
        const response = await fetch("https://dummyjson.com/users/search?q="+name)
        const data = await response.json()
        console.log(data)
        setUsers(data.users)
    }

    function showInfo(user){
        alert("Telefone: "+user.phone+".\nEmail: "+user.email+"\nCidade: "+user.address.city)
    }

    useEffect(()=> {
        searchAll()
    }, [])

    return (
        <div>            
            <h1>Consumo de API</h1>
            <p>Buscando dados da API DummyJSON</p>

            <hr/>

            <input onChange={e=> setSearch(e.target.value)} placeholder="Digite um nome..." />
            <button onClick={()=> searchName(search)}>Pesquisar</button>

            <ul>
                {
                    users.length == 0 ?
                        <p>Lista vazia</p>
                    :
                        users.map(
                            i => <li> <img width={30} src={"https://api.dicebear.com/10.x/initials/svg?seed="+i.firstName}/> {i.gender == "male" ? "O Sr." : "A Sra."} {i.firstName}, tem {i.age} anos.<button onClick={()=> showInfo(i)}>Ver informações</button></li>)
                }
                
            </ul>     
        </div>
    );
}

export default App;