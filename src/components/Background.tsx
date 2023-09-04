import Logo from './Logo.tsx';
import ButtonGroup from './ButtonGroup.tsx';
import Map from './Map.tsx';
import { useState  } from "react";

function Background() {
    const backgroundStyle = {
        backgroundColor: '#4D4D4D',
        width: '100%',
        height: '100vh',
    };

    const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

    const handleSelectFloor = (floor: string) => {
        setSelectedFloor(floor);
    };

    return (
        <>
            <div style={backgroundStyle}>
                <Logo/>
                <ButtonGroup onSelectFloor={handleSelectFloor} />
                <Map selectedFloor={selectedFloor} />
            </div>
        </>
    );
}

export default Background;
