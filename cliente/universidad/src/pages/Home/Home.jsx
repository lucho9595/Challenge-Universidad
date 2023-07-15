import React from "react";
import styles from "./Home.module.css";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";
import Mains from "../../component/Mains/Mains";

export default function Home() {
    return (
        <>
            <NavBar />
            <div id={styles.heads} class="bg-primary bg-gradient text-white">
                <div class="container px-4 text-center">
                    <h1 class="fw-bolder">Bienvenido a la Universidad Atlantida</h1>
                    <p class="lead">Para inscribirse haga click en el boton que se encuentra abajo</p>
                    <a class="btn btn-lg btn-light" href="/Login">Inscribirse</a>
                </div>
            </div>
            <Mains />
            <Footer />
        </>
    )
};