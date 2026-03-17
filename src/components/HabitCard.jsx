function HabitCard ({ name, description = '', category = 'General', meta, active = true, daysDones = 0, onRemove}){
    const metaAccomplished = daysDones >= meta

    const messageMeta = metaAccomplished
    ? '🏆 Week meta accomplished!'
    : `${daysDones} of ${meta} days concluded`

    return (
        <div className="habitCard">
            <h3>{name}</h3>
            {description && <p>{description}</p>}
            <p>Category: {category}</p>
            <p>{messageMeta}</p>
            <p>{active ? '✅ Active' : '⏸️ Paused'}</p>
            {metaAccomplished && <p>⭐ Congratulations! You kept the sequence this week!</p>}

            {/* onRemover: só aparece se o pai passar essa prop */}
            {onRemove && (
                <button type="button" onClick={onRemove}>
                    Remove
                </button>
            )}
        </div>
    )
}

export default HabitCard