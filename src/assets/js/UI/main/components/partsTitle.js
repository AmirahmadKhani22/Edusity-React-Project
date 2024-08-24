function MainTitle({
    description, 
    title, 
    extraStyles={
        container: {},
        description: {},
        title: {},
    }
}) {
    return (
        <div 
            className="main-title-container" 
            style={extraStyles.container}
        >
            <h3 
                className="main-title-description" 
                style={extraStyles.description}
            >
                {description}
            </h3>
            <h2 
                className="main-title"
                style={extraStyles.title}
            >
                {title}
            </h2>
        </div>
    )
}

export default MainTitle
