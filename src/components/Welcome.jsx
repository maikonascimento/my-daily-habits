const Welcome = ({username, totalHabits}) => {
    const nameFormatted = username.toUpperCase()

    const message = totalHabits > 0
    ? `Você tem ${totalHabits} hábito(s) cadastrado(s).`
    : 'Nenhum hábito cadastrado ainda. Que tal começar?'

    return(
        <div>
            <h2>Olá, {nameFormatted}!</h2>
            <p>{message}</p>
        </div>
    )

}

export default Welcome