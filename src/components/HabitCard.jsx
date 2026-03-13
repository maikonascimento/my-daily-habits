function HabitCard ({ title, meta, active = true, daysDones = 0, category = 'General'}){
    const metaAccomplished = daysDones >= meta

    const messageMeta = metaAccomplished
    ? 'Week meta accomplished!'
    : `${daysDones} of ${meta} days concluded`

    return (
        <div className="habitCard">
            <h3>{title}</h3>
            <p>{messageMeta}</p>
            <small>Category: {category}</small>

            {/* Ternário: dois resultados possiveis */}
            <p/>
            <small>Status: {active ? 'Active' : 'Paused'}</small>

            {/* &&: um resultado ou nada */}
            {metaAccomplished && (
                <p>Congratulations! You kept the sequence this week!</p>
            )}
        </div>
    )
}

export default HabitCard