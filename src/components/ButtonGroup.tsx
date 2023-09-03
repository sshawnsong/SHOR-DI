function ButtonGroup() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '0 500px',
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic outlined example" style={containerStyle}>
            <button type="button" className="btn btn-outline-success">1F</button>
            <button type="button" className="btn btn-outline-success">2F</button>
            <button type="button" className="btn btn-outline-success">3F</button>
            <button type="button" className="btn btn-outline-success">4F</button>
            <button type="button" className="btn btn-outline-success">5F</button>
            <button type="button" className="btn btn-outline-success">6F</button>
            <button type="button" className="btn btn-outline-success">7F</button>
        </div>
    );
}

export default ButtonGroup;
