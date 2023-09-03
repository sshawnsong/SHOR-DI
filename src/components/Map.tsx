import mapImage from '../assets/Map.svg'

function Map() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    };

    const mapStyle = {
        width: '728px',
        height: 'auto',
    }

    return (
        <div style={containerStyle}>
            <img src={mapImage} alt="Logo" style={mapStyle}/>
        </div>
    )
}

export default Map;