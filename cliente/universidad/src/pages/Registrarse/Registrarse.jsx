import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Registrarse.module.css";

export default function Registrarse() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };


    return (
        <div id={styles.all} className="d-flex align-items-center justify-content-center">
            <div id="formContent" className="p-4 w-50 flex-grow-1">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input type="text" id="floatingInput" className="form-control" name="login" placeholder="Login" />
                                    <label htmlFor="floatingInput">Correo Electrónico</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input type="text" id="floatingInput" className="form-control" name="apellido_y_nombre" placeholder="Nombre y Apellido" />
                                    <label htmlFor="floatingInput">Nombre y Apellido</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input type="number" id="floatingInput" className="form-control" name="dni" placeholder="DNI" />
                                    <label htmlFor="floatingInput">DNI</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input type="number" id="floatingInput" className="form-control" name="email" placeholder="Celular" />
                                    <label htmlFor="floatingInput">Celular</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input type="number" id="floatingInput" className="form-control" name="edad" placeholder="Edad" />
                                    <label htmlFor="floatingInput">Edad</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input type="text" id="floatingInput" className="form-control" name="codigo_postal" placeholder="Código Postal" />
                                    <label htmlFor="floatingInput">Código Postal</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input type="text" id="floatingInput" className="form-control" name="domicilio" placeholder="Domicilio" />
                                    <label htmlFor="floatingInput">Domicilio</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input type="text" id="floatingInput" className="form-control" name="carrera_id" placeholder="Carrera" />
                                    <label htmlFor="floatingInput">Carrera</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input type="password" id="floatingInput" className="form-control" name="password" placeholder="Contraseña" />
                                    <label htmlFor="floatingInput">Contraseña</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input type="text" id="floatingInput" className="form-control" name="año_cursada" placeholder="Año Cursada" />
                                    <label htmlFor="floatingInput">Año Cursada</label>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                                <button className="mt-2 btn btn-primary w-100">
                                    Registrarse
                                </button>
                                <button className="mt-2 btn btn-primary w-100" onClick={handleClick}>
                                    Volver
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}