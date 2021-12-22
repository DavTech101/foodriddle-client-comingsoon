import Loader from 'react-loader-spinner';

const LoaderComponent = () => {
    return ( <
        Loader type = 'Circles'
        color = '#c46f4f'
        height = { 75 }
        width = { 75 }
        timeout = { 50000 } //3 secs
        />
    );
};

export default LoaderComponent;