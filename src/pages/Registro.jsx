import { useForm } from "react-hook-form"

export default function Registro() {
    const {
        register,  //captura cada dato de cada input (entrada de dato)
        handleSubmit,
        formState: { errors },
    } = useForm()

    return (
        <section>
            <h1 className="titulo">Registro de usuario</h1>
            <p className="subtitulo">Completa los datos para agregar un nuevo usuario.</p>


            <form className="formulario" noValidate>
                <div className="campo">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" type="text" placeholder="Ej. Ana López" {...register("inputNombre")} />
                    <p className="error">Mensaje de error de ejemplo</p>
                </div>

                <div className="campo">
                    <label htmlFor="correo">Correo</label>
                    <input id="correo" type="email" placeholder="ana@correo.com" {...register("inputCorreo")} />
                </div>

                <div className="campo">
                    <label htmlFor="telefono">Teléfono</label>
                    <input id="telefono" type="tel" placeholder="7777-7777" {...register("inputTelefono")} />
                </div>

                <button type="submit" className="btn btn-primario">Registrar usuario</button>
            </form>
        </section>
    );
}
