import { useState } from 'react';

interface ButtonGroupProps {
    onSelectFloor: (floor: string) => void;
}

function ButtonGroup(props: ButtonGroupProps) {
    const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '0 500px',
    };

    const handleButtonClick = (floor: string) => {
        setSelectedFloor(floor);
        props.onSelectFloor(floor);
    };

    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic outlined example" style={containerStyle}>
                <button type="button" className={`btn btn-outline-success ${selectedFloor === '1F' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('1F')}>1F
                </button>
                <button type="button" className={`btn btn-outline-success ${selectedFloor === '2F' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('2F')}>2F
                </button>
                <button type="button" className={`btn btn-outline-success ${selectedFloor === '3F' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('3F')}>3F
                </button>
                <button type="button" className={`btn btn-outline-success ${selectedFloor === '4F' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('4F')}>4F
                </button>
                <button type="button" className={`btn btn-outline-success ${selectedFloor === '5F' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('5F')}>5F
                </button>
                <button type="button" className={`btn btn-outline-success ${selectedFloor === '6F' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('6F')}>6F
                </button>
                <button type="button" className={`btn btn-outline-success ${selectedFloor === '7F' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('7F')}>7F
                </button>
            </div>
        </div>
    );
}

export default ButtonGroup;
