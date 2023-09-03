import logoImage from '../assets/Logo.svg'

function Logo() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    }
    const logoStyle = {
        width: '300px',
        height: 'auto',
        paddingTop: '200px',
        paddingBottom: '50px',
    };
    return (
        <div style={containerStyle}>
            <img src={logoImage} alt="Logo" style={logoStyle}/>
        </div>
    )
}

export default Logo;