import React from "react";

export default function AdminDashboard() {
    return (
        <>
            <header class="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
                <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="/">Company name</a>

                <ul class="navbar-nav flex-row d-md-none">
                    <li class="nav-item text-nowrap">
                        <button class="nav-link px-3 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle search">
                            <svg class="bi"><use href="/"></use></svg>
                        </button>
                    </li>
                    <li class="nav-item text-nowrap">
                        <button class="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <svg class="bi"><use href="/"></use></svg>
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
                                <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul class="nav flex-column">
                                <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="/">
                                            <svg class="bi"><use href="/"></use></svg>
                                            Datos
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="/">
                                            <svg class="bi"><use href="/"></use></svg>
                                            Crear Carrera
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="/">
                                            <svg class="bi"><use href="/"></use></svg>
                                            Crear Materia
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="/">
                                            <svg class="bi"><use href="/"></use></svg>
                                            Usuarios Creados
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="/">
                                            <svg class="bi"><use href="/"></use></svg>
                                            Usuarios en Carrera
                                        </a>
                                    </li>
                                </ul>
                                <hr class="my-3" />

                                <ul class="nav flex-column mb-auto">
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="/">
                                            <svg class="bi"><use href="/"></use></svg>
                                            Settings
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link d-flex align-items-center gap-2" href="/">
                                            <svg class="bi"><use href="/"></use></svg>
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div>
                            hola jejeje
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}