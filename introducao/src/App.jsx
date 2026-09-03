import { useState } from "react"

function App() {
  let [cliques, setCliques] = useState(0)
  let [nome, setNome] = useState("Aguardando confirmação")
  return (
    <div>
      <h1>Hello world</h1>
      <p>Estou aprendendo React XD</p>

      <hr/>

      <p>Meu nome é: {nome}</p>
      <button onClick={()=> setNome(nome = "Caio Henrique de Matos")}>Mostrar nome</button>

      <hr/>

      <p>Você clicou {cliques} vezes</p>
      <button onClick={()=> setCliques(cliques + 1)}>Clique aqui</button>
    </div>
  )
}

export default App
