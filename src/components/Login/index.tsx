import LoginForm from './LoginForm';
import LoginImage from './LoginImg';

const Login: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Imagem do lado esquerdo, aparece somente em telas md+ */}
      <div className="w-1/2 hidden md:block bg-green-50">
        <LoginImage />
      </div>

      {/* Formulário centralizado no lado direito (ou em tela cheia se for mobile) */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
