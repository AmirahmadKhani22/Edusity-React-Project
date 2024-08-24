function profile({
    img,
    name, 
}) {
    return (
        <div className="profile">
            <img 
                src={img} 
                alt={name + " profile"} 
            />
        </div>
    )
}

export default profile
