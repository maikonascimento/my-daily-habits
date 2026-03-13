const Welcome = ({username, totalHabits}) => {
    const nameFormatted = username.toUpperCase()

    const message = totalHabits > 0
    ? `You have ${totalHabits} registered habit(s).`
    : 'No habits registered yet. How about starting now?'

    return(
        <div className="welcome">
            <h2>Hello, {nameFormatted}!</h2>
            <p>{message}</p>
        </div>
    )

}

export default Welcome