import ChangeThemeButton from "./ChangeThemeButton"
import Link from "./Link"

const Header = () => {
    return (
        <header className="header">
            <h1>First/Last Name</h1>
            <ul className="header__logo">
                <li><Link href="/">Main</Link></li>
                <li><Link href="/todo-list">Todo List</Link></li>
                <li><Link href="/contacts">Contacts</Link></li>
            </ul>
            <ChangeThemeButton/>
        </header>
    )
}

export default Header