import axios from "axios";
import { useForm } from "react-hook-form"
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginRequest, setLocalStorageToken } from "../../services/authentication-service";
import { toastError } from "../../services/toast-service";

type LoginFormData = {
    email: string;
    password: string;
}

export function LoginPage() {

    const {register, handleSubmit} = useForm<LoginFormData>();
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data: LoginFormData) => {
        loginRequest(data.email, data.password)
            .then((response) => {
                const token = response.data.session.token;
                axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
                setLocalStorageToken(token);
                navigate('/play');
            })
            .catch(() => {
                toastError("Erreur lors de la connexion. Vérifiez vos identifiants ou réesayez plus tard.")
            })
    });

    return (
        <div className="hero rounded-xl bg-base-200 p-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Se connecter maintenant!</h1>
                <p className="py-6">Créer un compte va vous permettre d'enregistrer vos parties, vos résultats et d'intéragir sur chaques questions dans la partie "Communautée" !</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered italic" {...register("email")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered italic" {...register("password")} />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Connexion"/>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
    )
}