function HabitCard ({ name, description = '', meta, active = true, daysDones = 0, onRemove}){
    const metaAccomplished = daysDones >= meta

    const messageMeta = metaAccomplished
    ? '🏆 Week meta accomplished!'
    : `${daysDones} of ${meta} days concluded`

    return (
        <div className="habitCard">
            <h3>{name}</h3>
            {description && <p>{description}</p>}
            <p>{messageMeta}</p>
            <span>{active ? '✅ Active' : '⏸️ Paused'}</span>
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