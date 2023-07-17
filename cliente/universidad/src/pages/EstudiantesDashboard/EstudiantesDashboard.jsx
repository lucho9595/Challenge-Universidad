import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, userSignOut, getCarreras } from "../../redux/action";
import NotasEstudiante from "../../component/NotasEstudiante/NotasEstudiante";

export default function AdminDashboard() {
    const dispatch = useDispatch();
    const car = useSelector((state) => state.carreras);
    const [showSettings, setShowSettings] = useState(false);
    const user = useSelector((state) => state.user)
    const [id, setId] = useState(user.user?.id_usuario)
    const [password, setpassword] = useState(user.user?.password)
    const [apellido_y_nombre, setapellido_y_nombre] = useState(user.user?.apellido_y_nombre)
    const [dni, setDni] = useState(user.user?.dni)
    const [celular, setCelular] = useState(user.user?.celular)
    const [edad, setEdad] = useState(user.user?.edad)
    const [codigo_postal, setcodigo_postal] = useState(user.user?.codigo_postal)
    const [domicilio, setDomicilio] = useState(user.user?.domicilio)
    const [año_cursada, setaño_cursada] = useState(user.user?.año_cursada)
    const [email, setEmail] = useState(user.user?.email)
    const [carrera, setCarrera] = useState(user.user?.carrera_id)
    const [mostrarNotas, setMostrarNotas] = useState(false)

    console.log(user)
    const handleToggleSettings = () => {
        setShowSettings(true);
        setMostrarNotas(false);
    };

    const mostrarNotasEstudiante = () => {
        setShowSettings(false);
        setMostrarNotas(true);

    }

    const changeUser = { id, password, apellido_y_nombre, email, dni, celular, edad, codigo_postal, año_cursada, domicilio }
    console.log(changeUser)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editProfile(id, changeUser));
        alert('Usuario modificado')
    };

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
                                        <a                                             class="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            href="#"
                                            onClick={() => mostrarNotasEstudiante(false)}
>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-check" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                            </svg>
                                            Notas
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
                        ) : mostrarNotas ? <NotasEstudiante />
                            : null}
                    </main>
                </div>
            </div>
        </>
    )
}