# 🌐 Hospedando um Sistema React no Firebase

Este repositório foi criado para auxiliar estudantes da disciplina Desenvolvimento Web com React, abordando conceitos e práticas essenciais para hospedar um sistema React no Firebase e como implementar autenticação com login via Gmail. Siga os passos abaixo para configurar o projeto. 

## 🚀 Hospedando um sistema React no Firebase

1. **Crie um projeto React**:
   Certifique-se de ter um projeto React configurado. Se não, crie um novo:
   ```bash
   npx create-react-app meu-app
   cd meu-app
   ```

2. **Instale o Firebase CLI**:
   Certifique-se de ter o Firebase CLI instalado globalmente:
   ```bash
   npm install -g firebase-tools
   ```

3. **Faça login no Firebase**:
   Faça login usando o Firebase CLI:
   ```bash
   firebase login
   ```

4. **Inicialize o projeto no Firebase**:
   Dentro do diretório do seu projeto React, inicie o Firebase:
   ```bash
   firebase init
   ```
   Durante a configuração:
   - Escolha `Hosting`.
   - Selecione o projeto Firebase.
   - Defina o diretório de origem para `build`.
   - Escolha "Sim" para configuração de um app como single-page application.

5. **Compile o projeto React**:
   Antes de hospedar, compile o projeto para produção:
   ```bash
   npm run build
   ```

6. **Implante o projeto**:
   Após compilar, envie os arquivos para o Firebase Hosting:
   ```bash
   firebase deploy
   ```

   O Firebase fornecerá uma URL onde seu app estará disponível.

## 🔐 Adicionando Login com Gmail no Firebase

1. **Ative a autenticação com Gmail no Firebase**:
   - Vá para o console do Firebase.
   - Acesse **Authentication > Sign-in method**.
   - Ative o método de login com **Google**.

2. **Instale o SDK do Firebase no React**:
   Instale o Firebase SDK no seu projeto:
   ```bash
   npm install firebase
   ```

3. **Configure o Firebase no seu projeto**:
   Crie um arquivo `firebase.js` para configurar o Firebase:
   ```javascript
   // firebase.js
   import { initializeApp } from 'firebase/app';
   import { getAuth, GoogleAuthProvider } from 'firebase/auth';

   const firebaseConfig = {
       apiKey: "SUA_API_KEY",
       authDomain: "SEU_DOMINIO.firebaseapp.com",
       projectId: "SEU_PROJECT_ID",
       storageBucket: "SEU_STORAGE_BUCKET",
       messagingSenderId: "SEU_MESSAGING_SENDER_ID",
       appId: "SEU_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);
   const provider = new GoogleAuthProvider();

   export { auth, provider };
   ```

4. **Implemente o login com Gmail**:
   No componente React onde deseja adicionar o login, use a função `signInWithPopup`:
   ```javascript
   import { auth, provider } from './firebase';
   import { signInWithPopup } from 'firebase/auth';

   const Login = () => {
       const handleLogin = async () => {
           try {
               const result = await signInWithPopup(auth, provider);
               const user = result.user;
               console.log("Usuário logado:", user);
           } catch (error) {
               console.error("Erro no login:", error);
           }
       };

       return (
           <div>
               <button onClick={handleLogin}>Login com Google</button>
           </div>
       );
   };

   export default Login;
   ```

5. **Teste o login**:
   - Execute seu app localmente (`npm start`) ou na hospedagem Firebase.
   - Clique no botão de login com Gmail e verifique se o login é bem-sucedido.

---

Com essas instruções, você terá seu sistema React hospedado no Firebase e o login com Gmail funcionando. 💻 Se precisar de ajuda, não hesite em perguntar!
