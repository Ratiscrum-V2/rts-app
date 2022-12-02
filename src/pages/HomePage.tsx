import { Link } from 'react-router-dom'
import Logo from '../images/Ratisexe-logo.png'

export default function HomePage() {

    return <div className='flex flex-col justify-center items-center h-screen gap-2'>
        <img src={Logo} width={300}></img>

        <p>Le jeu pour parfaire votre education sexuelle</p>
        <p>Faites les meilleurs choix afin de continuer l'aventure le plus longtemps possible !</p>

        <Link to={'/play'} className="btn btn-primary">Démarrer la partie</Link>

    </div>

}