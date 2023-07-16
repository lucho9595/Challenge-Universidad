import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAuth } from "../../redux/action";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (input) {
            dispatch(loginAuth(input))
                .then(() => {
                    alert('Usuario logueado con exito!')
                    navigate("/");
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    const handleClick = () => {
        navigate("/registrarse");
    };

    return (
        <div className="bg-primary d-flex align-items-center justify-content-center vh-100">
            <div id="formContent" className="bg-white p-4 w-50">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            id="floatingInput"
                            className="form-control"
                            name="email"
                            placeholder="Login"
                            value={input.email}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingInput">Correo Electrónico</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            id="floatingInput"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            value={input.password}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="floatingInput">Contraseña</label>
                    </div>
                    <input
                        type="submit"
                        className="mt-2 btn btn-primary w-100"
                        value="Iniciar sesión"
                    />
                    <button className="mt-2 btn btn-primary w-100" onClick={handleClick}>
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
}
