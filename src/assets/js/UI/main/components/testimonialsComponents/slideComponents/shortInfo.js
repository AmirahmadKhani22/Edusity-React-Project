function ShortInfo({
    name, 
    info,
}) {
    return (
        <div className="short-info">
            <h4>
                {name}
            </h4>
            <p>
                {info}
            </p>
        </div>
    )
}

export default ShortInfo
