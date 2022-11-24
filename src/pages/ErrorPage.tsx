import { Link, useRouteError } from "react-router-dom";

interface RouteError {
    statusText: string;
    message: string;
}

export default function ErrorPage() {
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        <div className="flex flex-col items-center justify-center gap-3 my-10">
            <h1 className="font-bold text-3xl">Mince !</h1>
            <p>La page demandée n'existe pas ...</p>
            <Link to={'/'} className="btn">Retour à l'accueil</Link>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}