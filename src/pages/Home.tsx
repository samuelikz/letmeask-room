import illustrationImg from '../assets/illustration.svg'; // import logo
import logoImg from '../assets/logo.svg';
import googleIconImg from '../assets/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useHistory } from 'react-router';
import { useAuth } from '../hooks/useAuth';


export function Home() {
    const history = useHistory();
    const {signInWithGoogle, user} = useAuth();

    async function navigateToNewRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        history.push('/rooms/new')
    }
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
                    <Button onClick={navigateToNewRoom} className="create-room">
                        <img src={googleIconImg} alt="Google" />
                        Criar sua sala com o Google
                    </Button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Dígite o código da Sala" />
                        <Button type="submit">
                            Entrar na Sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
