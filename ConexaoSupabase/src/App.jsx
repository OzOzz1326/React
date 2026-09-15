import { useEffect, useState } from "react";
import { supabase } from "./supabase";

function App(){

  const [produtos, setProdutos] = useState([])
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [tamanho, setTamanho] = useState("")
  const [descricao, setDescricao] = useState("")

  async function insert(){
    const obj = {
      nome: nome,
      preco: preco,
      tamanho: tamanho,
      descricao: descricao
    }
    const { data, error } = await supabase.from('produtos').insert(obj)
    alert("Produto salvo")
    document.location.reload()
  }

  async function searchAll(){
    const { data, error } = await supabase.from('produtos').select().order('id', {ascending: false})
    console.log(data)
    setProdutos(data)
  }

  useEffect(()=>{
    searchAll()
  }, [])

  return(
    <div>
      <h1>SupaBase</h1>

      <input onChange={e=> setNome(e.target.value)} placeholder="Nome do Produto" />
      <br/>
      <input onChange={e=> setPreco(e.target.value)} placeholder="Preço" />
      <br/>
      <input onChange={e=> setTamanho(e.target.value)} placeholder="Tamanho" />
      <br/>
      <input onChange={e=> setDescricao(e.target.value)} placeholder="Descrição (opcional)" />
      <button onClick={insert}>Salvar</button>

      {produtos.map(i=> <p>{i.nome} - R${i.preco} | Descrição: {i.descricao}</p>)}

    </div>
  );
}

export default App;