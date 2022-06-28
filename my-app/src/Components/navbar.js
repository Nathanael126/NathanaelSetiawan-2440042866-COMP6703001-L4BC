import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar(){
    return(
        <nav className="nav">
            <a href="/" className="nav-title">X Coffee</a>
            <ul>
                <li>
                    <a href="/Cart"><ShoppingCartIcon></ShoppingCartIcon></a>
                </li>
                <li>
                    <a href="/Login">Login</a>
                </li>
            </ul>
        </nav>
    )
}