import { NavLink } from "react-router-dom"

function Header () {
    return (
        <header className="header">
            <div className="header-logo">
                <span>📋</span>
                <strong>My Daily Habits</strong>
            </div>

            <nav className="header-nav">
                <NavLink to='/' end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                    Home
                </NavLink>
                <NavLink to='/habits' className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
                    Habits
                </NavLink>
            </nav>          
        </header>
    )
}

export default Header