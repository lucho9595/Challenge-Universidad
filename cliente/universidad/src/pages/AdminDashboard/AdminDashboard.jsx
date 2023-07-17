import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, userSignOut, getCarreras } from "../../redux/action";
import CrearCarrera from "../../component/CrearCarrera/CrearCarrera";
import CrearMateria from "../../component/CrearMateria/CrearMateria";
import AsignarNotas from "../../component/AsignarNotas/AsignarNotas";
import UsuarioCreado from "../../component/UsuariosCreados/UsuariosCreados";
import CarreraCreada from "../../component/CarrerasCreadas/CarrerasCreadas";
import MateriasCreadas from "../../component/MateriasCreadas/MateriasCreadas";
import NotasCreadas from "../../component/NotasCreadas/NotasCreadas";

export default function AdminDashboard() {
    const dispatch = useDispatch();
    const [showSettings, setShowSettings] = useState(false);
    const user = useSelector((state) => state.user)
    const car = useSelector((state) => state.carreras);
    const [id, setId] = useState(user.user?.id_usuario)
    const [carrera, setCarrera] = useState(user.user?.carrera_id)
    const [password, setpassword] = useState(user.user?.password)
    const [apellido_y_nombre, setapellido_y_nombre] = useState(user.user?.apellido_y_nombre)
    const [dni, setDni] = useState(user.user?.dni)
    const [celular, setCelular] = useState(user.user?.celular)
    const [edad, setEdad] = useState(user.user?.edad)
    const [codigo_postal, setcodigo_postal] = useState(user.user?.codigo_postal)
    const [domicilio, setDomicilio] = useState(user.user?.domicilio)
    const [año_cursada, setaño_cursada] = useState(user.user?.año_cursada)
    const [email, setEmail] = useState(user.user?.email)
    const [mostrarCrearCarrera, setMostrarCrearCarrera] = useState(false);
    const [mostrarCrearMateria, setMostrarCrearMateria] = useState(false);
    const [mostrarUsuariosCreados, setMostrarUsuariosCreados] = useState(false);
    const [mostrarCarreraCreada, setMostrarCarreraCreada] = useState(false);
    const [mostrarAsignarNotas, setMostrarAsignarNotas] = useState(false);
    const [mostrarMateriaCreada, setMostrarMateriaCreada] = useState(false);
    const [mostrarNotasCreadas, setMostrarNotasCreadas] = useState(false);
    // const [mostrarAsignarNotas, setMostrarAsignarNotas] = useState(false);

    const handleToggleSettings = () => {
        setShowSettings(true);
        setMostrarCrearCarrera(false);
        setMostrarCrearMateria(false);
        setMostrarAsignarNotas(false);
        setMostrarUsuariosCreados(false);
        setMostrarCarreraCreada(false);
        setMostrarMateriaCreada(false);
        setMostrarNotasCreadas(false);
    };

    const mostrarComponenteCrearCarrera = () => {
        setShowSettings(false);
        setMostrarCrearCarrera(true);
        setMostrarCrearMateria(false);
        setMostrarAsignarNotas(false);
        setMostrarUsuariosCreados(false);
        setMostrarCarreraCreada(false);
        setMostrarMateriaCreada(false);
        setMostrarNotasCreadas(false);

    };

    const mostrarComponenteCrearMateria = () => {
        setShowSettings(false);
        setMostrarCrearCarrera(false);
        setMostrarCrearMateria(true);
        setMostrarAsignarNotas(false);
        setMostrarUsuariosCreados(false);
        setMostrarCarreraCreada(false);
        setMostrarMateriaCreada(false);
        setMostrarNotasCreadas(false);

    };

    const mostrarComponenteAsignarNotas = () => {
        setShowSettings(false);
        setMostrarCrearCarrera(false);
        setMostrarCrearMateria(false);
        setMostrarAsignarNotas(true);
        setMostrarUsuariosCreados(false);
        setMostrarCarreraCreada(false);
        setMostrarMateriaCreada(false);
        setMostrarNotasCreadas(false);

    };

    const mostrarComponenteUsuarioCreado = () => {
        setShowSettings(false);
        setMostrarCrearCarrera(false);
        setMostrarCrearMateria(false);
        setMostrarAsignarNotas(false);
        setMostrarUsuariosCreados(true);
        setMostrarCarreraCreada(false);
        setMostrarMateriaCreada(false);
        setMostrarNotasCreadas(false);

    };

    const mostrarComponenteCarreraCreada = () => {
        setShowSettings(false);
        setMostrarCrearCarrera(false);
        setMostrarCrearMateria(false);
        setMostrarAsignarNotas(false);
        setMostrarUsuariosCreados(false);
        setMostrarCarreraCreada(true);
        setMostrarMateriaCreada(false);
        setMostrarNotasCreadas(false);

    };

    const mostrarComponenteMateriaCreada = () => {
        setShowSettings(false);
        setMostrarCrearCarrera(false);
        setMostrarCrearMateria(false);
        setMostrarAsignarNotas(false);
        setMostrarUsuariosCreados(false);
        setMostrarCarreraCreada(false);
        setMostrarMateriaCreada(true);
        setMostrarNotasCreadas(false);

    };

    const mostrarComponenteNotasCreadas = () => {
        setShowSettings(false);
        setMostrarCrearCarrera(false);
        setMostrarCrearMateria(false);
        setMostrarAsignarNotas(false);
        setMostrarUsuariosCreados(false);
        setMostrarCarreraCreada(false);
        setMostrarMateriaCreada(false);
        setMostrarNotasCreadas(true);

    };


    const changeUser = { id, password, apellido_y_nombre, email, dni, celular, edad, codigo_postal, año_cursada, domicilio }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProfile(id, changeUser));
        alert('apellido_y_nombre modificado')
    }

    const handleClick = async () => {
        dispatch(userSignOut(user));
    };

    useEffect(() => {
        dispatch(getCarreras());
    }, [dispatch]);

    // Función para obtener el nombre de la carrera
    const getCarreraNombre = (e) => {
        const nombreCarrera = car.find((c) => c.id_carrera === carrera);
        return nombreCarrera ? nombreCarrera.nombre_carrera : "";
    };


    return (
        <>
            <header class="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
                <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/">Universidad Atlantida</a>

                <ul class="navbar-nav flex-row d-md-none">
                    <li class="nav-item text-nowrap">
                        <button class="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </li>
                    <li class="nav-item text-nowrap">
                        <button class="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                    </li>
                </ul>

                <div id="navbarSearch" class="navbar-search w-100 collapse">
                    <input class="form-control w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search" />
                </div>
            </header>
            <div class="container-fluid">
                <div class="row">
                    <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <div class="offcanvas-lg offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="sidebarMenuLabel">Universidad Atlantida</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul class="nav flex-column">
                                    <li class="nav-item">
                                        <a
                                            class="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                            onClick={() => handleToggleSettings(false)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-person"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                            </svg>
                                            Datos
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                            onClick={mostrarComponenteCrearCarrera}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                            Crear Carrera
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                            onClick={mostrarComponenteCrearMateria}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                            Crear Materia
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                            onClick={mostrarComponenteAsignarNotas}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                            Asignar Notas
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                            onClick={mostrarComponenteUsuarioCreado}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
                                                <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
                                            </svg>
                                            Usuarios Creados
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                            onClick={mostrarComponenteCarreraCreada}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
                                                <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
                                            </svg>
                                            Carreras Creadas
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                            onClick={mostrarComponenteAsignarNotas}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
                                                <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
                                            </svg>
                                            Registro de Carreras
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                            onClick={mostrarComponenteMateriaCreada}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
                                                <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
                                            </svg>
                                            Materias Creadas
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                            onClick={mostrarComponenteNotasCreadas}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
                                                <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
                                            </svg>
                                            Notas Creadas
                                        </a>
                                    </li>

                                </ul>
                                <hr class="my-3" />
                                <ul class="nav flex-column mb-auto">
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="/" onClick={handleClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M13 1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V2H5.5a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 1 0V1H12V.5a.5.5 0 0 1 1 0v3.793a.5.5 0 0 1-.146.354l-3 3a.5.5 0 0 1-.708 0l-3-3A.5.5 0 0 1 4.5 4.793V1.5a.5.5 0 0 1 1 0V4H11V1.5a.5.5 0 0 1 .5-.5zm-9.5 5a.5.5 0 0 1 .5-.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.854 3.854a.5.5 0 0 0-.708 0l-2 2A.5.5 0 0 0 1.5 13h12a.5.5 0 0 0 .354-.854l-2-2a.5.5 0 1 0-.708.708L12.293 12H3.707l1.647 1.646a.5.5 0 0 0 .708 0z" />
                                            </svg>
                                            Cerrar Sesión
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2 ">Panel de Administración</h1>
                        </div>
                        <h2>Contenido principal</h2>
                        {showSettings ? (
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div class="mb-3">
                                    <label for="inputName" class="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="apellido_y_nombre"
                                        value={apellido_y_nombre}

                                        onChange={(e) => setapellido_y_nombre(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="inputDni" class="form-label">Dni</label>
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="dni"
                                        value={dni}

                                        onChange={(e) => setDni(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="inputCelular" class="form-label">Celular</label>
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="celular"
                                        value={celular}

                                        onChange={(e) => setCelular(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="inputEdad" class="form-label">Edad</label>
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="edad"
                                        value={edad}

                                        onChange={(e) => setEdad(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="inputCodigoPosal" class="form-label">Codigo postal</label>
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="codigo_postal"
                                        value={codigo_postal}

                                        onChange={(e) => setcodigo_postal(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="inputDomicilio" class="form-label">Domicilio</label>
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="domicilio"
                                        value={domicilio}

                                        onChange={(e) => setDomicilio(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="inputEmail" class="form-label">Email</label>
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="email"
                                        value={email}

                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="inputCarrera" className="form-label">
                                        Carrera
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCarrera"
                                        value={getCarreraNombre(user?.carrera_id)}
                                        readOnly
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="inputaño_cursada" class="form-label">Año de cursada</label>
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="año_cursada"
                                        value={año_cursada}

                                        onChange={(e) => setaño_cursada(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="inputPassword" class="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        id="floatingInput"
                                        className="form-control"
                                        name="password"
                                        value={password}

                                        onChange={(e) => setpassword(e.target.value)} />
                                </div>
                                <button type="submit" class="btn btn-primary">
                                    Editar
                                </button>
                            </form>
                        ) : mostrarCrearCarrera ? <CrearCarrera />
                            : mostrarCrearMateria ? <CrearMateria />
                                : mostrarAsignarNotas ? <AsignarNotas />
                                    : mostrarUsuariosCreados ? <UsuarioCreado />
                                        : mostrarCarreraCreada ? <CarreraCreada />
                                            : mostrarMateriaCreada ? <MateriasCreadas />
                                            : mostrarNotasCreadas ? <NotasCreadas />

                                            : null}
                    </main>
                </div>
            </div>
        </>
    );
}
