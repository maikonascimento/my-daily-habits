import { Link } from 'react-router-dom'

function NotFoundPage(){
    return(
        <main className='page-404'>
            <h1>404</h1>
            <p>This page doesn`t exist.</p>
            <Link to="/">Back to home</Link>
        </main>
    )
}

export default NotFoundPage