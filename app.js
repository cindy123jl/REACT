function Navbar(){
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Guten Morgen, ich liebt meine Mutter</a>
            </div>
        </nav>
    )
}

function Title(){
    return (
        <h1>Hallo, Meine Hund ist sehr shon</h1>
    )
}

function List(){
    return (
        <ul>
            <li>Schweinsteiger - Wo ist mein hund?</li>
            <li>Muller - Guten Morgen Schweinsteiger.</li>
            <li>Schweinsteiger - dein hund, is sehr klug?</li>
            <li>Muller - ja, mein hund ist sehr klug.</li>
        </ul>
    )
}

ReactDOM.render(
    <div>
        <Navbar />
        <Title />
        <List />
    </div>,
    document.getElementById("root")
)