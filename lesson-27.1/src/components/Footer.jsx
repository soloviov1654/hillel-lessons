import Link from "./Link"

const Footer = () => {
    return (
        <footer className="footer">
            <h1>First/Last Name</h1>
            <ul>
                <li>Phone number: <Link href="tel: 999999999">99999999</Link></li>
                <li>Email: <Link href="mailto: example@gmail.com">example@gmail.com</Link></li>
                <li>Git: <Link href="https://github.com/test/">https://github.com/test/</Link></li>
            </ul>
        </footer>
    )
}

export default Footer