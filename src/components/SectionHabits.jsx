function SectionHabits({ title, children }){
  return (
    <section>
        <h2>{title}</h2>
        <div className="HabitList">
            {children}
        </div>
    </section>
  )
}

export default SectionHabits