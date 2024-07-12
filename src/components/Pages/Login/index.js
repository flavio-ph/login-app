import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useState } from "react";
import api from "../../../api";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const Navigate = useNavigate();

    const entrar = (e) => {
        e.preventDefault();
        api.post("/auth/login", {
            email: email,
            password: password
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            const token = response.data.token;
            localStorage.setItem("jwtToken", token);
            Navigate("/home");
            window.alert(`Login efetuado com sucesso! divirta-se em nosso sistema 😁
            Cliquem em "ok" para seguir para o sistema`)
        }).catch(error => {
            setError("Email ou senha incorretos.")
            console.log(error.response);
        });
    }

    return (
        <>
            <div className={styles.box}>

                <section className={styles.container}>
                    <h2>Login</h2>
                    <form>
                        <div className={styles.email}>
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                placeholder="Digite seu email"
                                required />
                        </div>

                        <div className={styles.password}>
                            <label htmlFor="password" >Senha</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                name="password"
                                placeholder="Digite sua senha"
                                required />
                        </div>
                        <div className={styles.btn}>
                            <button  onClick={entrar} type="submit" className={styles.btnent}>Entrar</button>
                        </div>

                        <span>Ainda não está cadastrado?!<a href="http://localhost:3000/cadastro">clique aqui</a> para se cadastrar!</span>
                        
                    </form>
                </section>
            </div>
        </>
    );
}

export default Login;