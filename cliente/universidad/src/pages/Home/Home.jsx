import React from "react";
import styles from "./Home.module.css";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";
import Mains from "../../component/Mains/Mains";

export default function Home() {
    return (
        <>
            <NavBar />
            <div id={styles.heads} className="bg-primary bg-gradient text-white">
                <div className="container px-4 text-center">
                    <h1 className="fw-bolder">Bienvenido a la Universidad Atlantida</h1>
                    <p className="lead">Para inscribirse haga click en el boton que se encuentra abajo</p>
                    <a className="btn btn-lg btn-light" href="/Login">Inscribirse</a>
                </div>
            </div>
            <Mains />
            <Footer />
        </>
    )
};