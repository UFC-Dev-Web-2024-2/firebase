import { signInWithPopup } from 'firebase/auth';

export default function Login ({auth, provider}) {

    async function handleLogin() {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("Usuário logado:", user);
        } catch (error) {
            console.error("Erro no login:", error);
        }
    }

    return (
        <div>
            <button onClick={handleLogin}>Login com Google</button>
        </div>
    );
};