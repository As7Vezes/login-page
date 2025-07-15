const LoginForm = () => {
  return (
    <form className="w-full max-w-md space-y-5">
      <div>
        <h2 className="text-sm text-gray-500">Bem-vindo de volta</h2>
        <h1 className="text-2xl font-semibold">Faça login na sua conta</h1>
      </div>

      <div className="space-y-2">
        <label className="block text-sm">E-mail</label>
        <input
          type="email"
          placeholder="exemplo@gmail.com"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm">Senha</label>
        <input
          type="password"
          placeholder="0123456789"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 ">
          <input type="checkbox" className="accent-green-600" />
          Lembre de mim
        </label>
        <a href="#" className="text-green-600 hover:underline">Esqueceu sua senha?</a>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded cursor-pointer"
      >
        Entrar na conta
      </button>

      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded cursor-pointer"
      >
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
        Ou faça login com o Google
      </button>

      <p className="text-sm text-center">
        Não tem uma conta? <a href="#" className="text-green-600 hover:underline">Cadastre-se</a>
      </p>
    </form>
  );
};

export default LoginForm;
