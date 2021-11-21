import Loader from 'react-loader-spinner';

const LoaderComponent = () => {
  return (
    <Loader
      type='Circles'
      color='#c46f4f'
      height={100}
      width={100}
      timeout={10000} //3 secs
    />
  );
};

export default LoaderComponent;
