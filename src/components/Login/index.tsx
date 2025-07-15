import LoginForm from './LoginForm';
import LoginImage from './LoginImg';

const Login: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 hidden md:block">
        <LoginImage />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
