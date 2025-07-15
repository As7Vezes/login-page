import image from '../../assets/image.png';

const LoginImage = () => {
  return (
    <div className="h-full w-full flex items-center justify-center p-10">
      <img
        src={image}
        alt="Login"
        className="max-h-[900px] w-auto object-contain"
      />
    </div>
  );
};

export default LoginImage;
