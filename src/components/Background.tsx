import Logo from './Logo.tsx';
import ButtonGroup from './ButtonGroup.tsx';
import Map from './Map.tsx'

function Background() {
    const backgroundStyle = {
        backgroundColor: '#4D4D4D',
        width: '100%',
        height: '100vh',
    };

    return <>
        <div style={backgroundStyle}>
            <Logo/>
            <ButtonGroup/>
            <Map/>
        </div>
    </>
}

export default Background;