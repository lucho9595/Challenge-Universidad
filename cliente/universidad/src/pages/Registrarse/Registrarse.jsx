import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Registrarse.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, registerUser, getCarreras } from "../../redux/action";

export default function Registrarse() {
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.usuarios);
    const allCarreras = useSelector((state) => state.carreras);

    console.log(allCarreras)
    const navigate = useNavigate();
    const [input, setInput] = useState({
        apellido_y_nombre: '',
        dni: '',
        celular: '',
        email: '',
        edad: 0,
        codigo_postal: '',
        domicilio: '',
        carrera_id: 0,
        password: '',
        año_cursada: 0
    })

    console.log(input)
    const handleClick = () => {
        navigate('/');
    };

    useEffect(() => {
        dispatch(getUsers());
        dispatch(getCarreras());
    }, [dispatch]);

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleCarreraChange(e) {
        const selectedCarreraId = parseInt(e.target.value);
        const selectedCarrera = allCarreras.find(carrera => carrera.id_carrera === selectedCarreraId);

        if (selectedCarrera) {
            setInput({
                ...input,
                carrera_id: selectedCarreraId
            });
        } else {
            setInput({
                ...input,
                carrera_id: ''
            });
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            ...input,
            año_cursada: parseInt(input.año_cursada),
            carrera_id: parseInt(input.carrera_id)
        };

        if (data) {
            dispatch(registerUser(data));
            alert("Usuario creado con éxito!");
            navigate("/login");
        }
    }
    
    return (
        <div id={styles.all} className="d-flex align-items-center justify-content-center">
            <div id="formContent" className="p-4 w-50 flex-grow-1">
                <div className="container">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="email"
                                        value={input.email}
                                        placeholder="Login"
                                        onChange={(e) => handleInputChange(e)} />
                                    <label htmlFor="floatingInput">Correo Electrónico</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="apellido_y_nombre"
                                        value={input.apellido_y_nombre}
                                        placeholder="Nombre y Apellido"
                                        onChange={(e) => handleInputChange(e)} />
                                    <label htmlFor="floatingInput">Nombre y Apellido</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="dni"
                                        value={input.dni}
                                        placeholder="DNI"
                                        onChange={(e) => handleInputChange(e)} />
                                    <label htmlFor="floatingInput">DNI</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="celular"
                                        value={input.celular}
                                        placeholder="Celular"
                                        onChange={(e) => handleInputChange(e)} />
                                    <label htmlFor="floatingInput">Celular</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="number"
                                        id="floatingInput"
                                        className="form-control"
                                        name="edad"
                                        value={input.edad}
                                        placeholder="Edad"
                                        onChange={(e) => handleInputChange(e)} />
                                    <label htmlFor="floatingInput">Edad</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="codigo_postal"
                                        value={input.codigo_postal}
                                        placeholder="Código Postal"
                                        onChange={(e) => handleInputChange(e)} />
                                    <label htmlFor="floatingInput">Código Postal</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="domicilio"
                                        value={input.domicilio}
                                        placeholder="Domicilio"
                                        onChange={(e) => handleInputChange(e)} />
                                    <label htmlFor="floatingInput">Domicilio</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <select
                                        id="floatingInput"
                                        className="form-select"
                                        name="carrera_id"
                                        value={input.carrera_id}
                                        onChange={(e) => handleCarreraChange(e)}>
                                        <option value="">Selecciona una carrera</option>
                                        {Array.isArray(allCarreras) && allCarreras.map((carrera) => (
                                            <option key={carrera.id_carrera} value={carrera.id_carrera}>
                                                {carrera.nombre_carrera}
                                            </option>
                                        ))}
                                    </select>
                                    <label htmlFor="floatingInput">Carrera</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="password"
                                        id="floatingInput"
                                        className="form-control"
                                        name="password"
                                        value={input.password}
                                        placeholder="Contraseña"
                                        onChange={(e) => handleInputChange(e)} />
                                    <label htmlFor="floatingInput">Contraseña</label>
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="form-floating">
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="año_cursada"
                                        value={input.año_cursada}
                                        placeholder="Año Cursada"
                                        onChange={(e) => handleInputChange(e)} />
                                    <label htmlFor="floatingInput">Año Cursada</label>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                                <button
                                    className="mt-2 btn btn-primary w-100"
                                    id="signup"
                                    type="submit">
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