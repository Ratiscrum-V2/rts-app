import { Link } from 'react-router-dom'
import Logo from '../images/Ratisexe-logo.png'

export default function Home() {

    return <div className='flex flex-col justify-center items-center h-screen gap-2'>
        <img src={Logo} width={300}></img>

        <p>Description</p>

        <Link to={'/play'} className="btn btn-primary">Démarrer la partie</Link>

    </div>

}