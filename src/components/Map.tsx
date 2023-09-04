import mapImage1F from '../assets/Map1F.svg';
import mapImage2F from '../assets/Map2F.svg';
import mapImage3F from '../assets/Map3F.svg';
import mapImage4F from '../assets/Map4F.svg';
import mapImage5F from '../assets/Map5F.svg';
import mapImage6F from '../assets/Map6F.svg';
import mapImage7F from '../assets/Map7F.svg';

interface MapProps {
    selectedFloor: string | null;
}

function Map(props: MapProps) {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    };

    const mapStyle = {
        width: '728px',
        height: 'auto',
    }

    let selectedMapImage;

    // 선택된 층에 따라 이미지를 결정합니다.
    switch (props.selectedFloor) {
        case '1F':
            selectedMapImage = mapImage1F;
            break;
        case '2F':
            selectedMapImage = mapImage2F;
            break;
        case '3F':
            selectedMapImage = mapImage3F;
            break;
        case '4F':
            selectedMapImage = mapImage4F;
            break;
        case '5F':
            selectedMapImage = mapImage5F;
            break;
        case '6F':
            selectedMapImage = mapImage6F;
            break;
        case '7F':
            selectedMapImage = mapImage7F;
            break;
        default:
            selectedMapImage = mapImage1F;
            break;
    }

    return (
        <div style={containerStyle}>
            <img src={selectedMapImage} alt="Map" style={mapStyle}/>
        </div>
    )
}

export default Map;
