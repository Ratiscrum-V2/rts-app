import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { registerRequest } from "../../services/authentication-service";

type RegisterFormData = {
    email: string;
    nickname: string;
    password: string;
}

export function RegisterPage() {

    const {register, handleSubmit} = useForm<RegisterFormData>();

    const navigate = useNavigate()

    const onSubmit = handleSubmit((data: RegisterFormData) => {
        registerRequest(data.email, data.password, data.nickname)
            .then(() => {
                navigate('/login');
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
                                    <span className="label-text font-semibold">Pseudo</span>
                                </label>
                                <input type="text" placeholder="pseudo" className="input input-bordered italic" {...register("nickname")}/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered italic" {...register("password")} />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Mot de passse oublié ?</a>
                                </label> */}
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