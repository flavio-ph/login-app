import styles from "./Home.module.css"

function Home() {
    return (
        <>
            <header className={styles.header}>
                <a href="http://localhost:3000/login">Login</a>
                <a href="http://localhost:3000/cadastro">Cadastro</a>
            </header>

            <section className={styles.container}>
                <h1>Seja bem vindo!</h1>
                <p>Obrigado por acessar nosso sistema! Fique a vontade 😊</p>
            </section>

            <footer className={styles.footer}>Desenvolvido por Flávio Almeida</footer>
        </>


    );
}

export default Home;