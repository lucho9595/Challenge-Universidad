import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Registrarse');
    };

    return (
        <div className="bg-primary d-flex align-items-center justify-content-center vh-100">
            <div id="formContent" className="bg-white p-4 w-50">
                <form>
                    <div className="form-floating mb-3">
                        <input type="text" id="floatingInput" className="form-control" name="login" placeholder="Login" />
                        <label for="floatingInput">Correo Electronico</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" id="floatingInput" className="form-control" name="login" placeholder="Password" />
                        <label for="floatingInput">Contraseña</label>
                    </div>
                    <input type="submit" className="mt-2 btn btn-primary w-100" value="Iniciar sesion" />
                    <button className="mt-2 btn btn-primary w-100" onClick={handleClick}>
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    )
}