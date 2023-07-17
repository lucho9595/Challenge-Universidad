import React from "react";
import styles from "./Mains.module.css";

export default function Mains() {
    return (
        <>
            <section id={styles.about}>
                <div className="container px-4">
                    <div className="row gx-4 justify-content-center">
                        <div className="col-lg-8">
                            <h2>SOBRE ESTA PAGINA</h2>
                            <p className="lead">Esto es un proyecto para entregar</p>
                            <ul>
                                <li>Esta estructurado en 2 perfiles</li>
                                <li>hay un usuario admin y otro para el estudiante</li>
                                <li>ambos tiene opciones distintas a realizar y para visualizar</li>
                                <li>espero que les guste.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}