import { Link } from "react-router-dom"

function HabitCard ({ id, name, description, meta, active = true, daysDones = 0, category = 'General', onRemove}){
    const metaAccomplished = daysDones >= meta

    return(
        <div className="habitCard">
            <div className="habitCard-header">
                <h3>{name}</h3>
                <span style={{color: active ? '#16a34a' : '#9ca3af'}}>
                    {active ? '✅ Ativo' : '⏸️ Pausado'}
                </span>
            </div>

            <p>{description}</p>
            <small>Category: {category}</small>

            <p>
                {metaAccomplished
                    ? '🏆 Weekly meta accomplished!'
                    : `${daysDones} of ${meta} days concluded`
                }
            </p>

            {metaAccomplished && <p>⭐ Congratulations! You kept the sequence this week!</p>}

            <div className="habitCard-acoes">
                <Link to={`/habit/${id}`} className="btn-detail">
                    See details
                </Link>

                {onRemove && (
                    <button onClick={onRemove} className="btn-remove-card">
                        Remove
                    </button>
                )}
            </div>
        </div>
    )
}

export default HabitCard