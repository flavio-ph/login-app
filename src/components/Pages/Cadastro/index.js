import styles from "./Cadastro.module.css";
import { useState } from "react";
import api from "../../../api";

function Cadastro() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [repetirSenha, setRepetirSenha] = useState("")

    const cadastrar = (e) => {
        e.preventDefault();
        api.post("/auth/register", {
            nome: nome,
            email: email,
            senha: senha,
        }, {
            headers: {
                "Content-Type": "aplication/json"
            }
        }).then(response => {
            console.log("Usuario registrado!", response.data);
        }).catch(error =>{
            console.log(error.response)
        })
    }

    return (
        <section className={styles.container}>
            <div className={styles.loginbox}>
                <h2>Cadastre-se</h2>
                <form>
                    <div className={styles.label_}>
                        <label htmlFor="Nome">Nome: *</label>
                        <input
                            value={nome}
                            type="name"
                            id="name"
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>
                    <div className={styles.label_}>
                        <label htmlFor="Email">Email: *</label>
                        <input
                            value={email}
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            required
                        />
                    </div>
                    <div className={styles.label_}>
                        <label htmlFor="Senha">Senha: *</label>
                        <input

                            value={senha}
                            type="password"
                            id="current-password"
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Digite sua senha"
                            required
                        />
                    </div>
                    <div className={styles.label_}>
                        <label htmlFor="Senha">Repita a Senha: *</label>
                        <input

                            value={repetirSenha}
                            type="password"
                            id="repeatPassword"
                            onChange={(e) => setRepetirSenha(e.target.value)}
                            placeholder="Repita a senha"
                            required
                        />
                    </div>
                    <div className={styles.btn}>
                        <button onClick={cadastrar} type="submit" className={styles.btnent}>Cadastrar</button>
                    </div>
                    <span>Já está cadastrado?!<a href="http://localhost:3000/login">clique aqui</a> para efetuar seu login!</span>
                </form>
            </div>
        </section>
    );

}
export default Cadastro;