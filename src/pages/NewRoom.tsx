import { Link } from 'react-router-dom';
import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
// import { AuthContext } from '../contexts/AuthContext';
// import { useContext } from 'react';


export function NewRoom() {
    // const { user } = useContext(AuthContext);
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração" />
                <strong>Toda pergunta tem uma resposta.</strong>
                <p>Aprenda e compartilhe conhecimento
                    com outras pessoas</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Logo" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input type="text" placeholder="Nome da Sala" />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala já existente?
                        <Link to="/"> Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}
