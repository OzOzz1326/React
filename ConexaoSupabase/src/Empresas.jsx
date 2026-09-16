import { useEffect, useState } from "react";
import { supabase } from "./supabase";

function Empresas(){

    const[empresas, setEmpresas] = useState([])
    const[funcionarios, setFuncionarios] = useState([])

    async function searchAllEmpresas(){
        const {error, data} = await supabase.from("empresas").select()
        console.log(data)
        setEmpresas(data)
    }

    async function searchAllFuncionarios(){
        const {error, data} = await supabase.from("funcionarios").select()
        console.log(data)
        setFuncionarios(data)
    }

    useEffect(()=> {
        searchAllEmpresas()
        searchAllFuncionarios()
    }, [])
    
    return (
        <div>
            <h1>Relacionamento de Tabelas</h1>
            <p>Consulte na tabela empresas e funcionários </p>

            <h2>Empresas</h2>

            <table border="true">
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>CNPJ</td>
                    <td>Endereço</td>
                </tr>
                {
                    empresas.map(i =>
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.nome}</td>
                            <td>{i.cnpj}</td>
                            <td>{i.endereco}</td>
                        </tr>
                    )
                }
            </table>

            <h2>Funcionários</h2>

            <table border="true">
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Nome da Empresa</td>
                    <td>Endereço da Empresa</td>
                    <td>Cargo</td>
                    <td>Contato</td>
                </tr>
                {
                    funcionarios.map(i=>
                        <tr>
                    <td>{i.id}</td>
                    <td>{i.nome}</td>
                    <td>{i.nome}</td>
                    <td>{i.endereco}</td>
                    <td>{i.cargo}</td>
                    <td>{i.contato}</td>
                </tr>
                    )
                }
            </table>

        </div>
    );
}

export default Empresas;