function App() {
    const [quotes, setQuotes] = React.useState([])
    const [randomQuote, setRandomQuote] = React.useState([])

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length)
            setRandomQuote(data[randIndex])
        }     
        fetchData();
    }, []);

    const getNewQuote = () => {
        let randIndex = Math.floor(Math.random() * quotes.length)
        setRandomQuote(quotes[randIndex])
    }

     

    return (
        <div class="container pt-5">
            <div class="bg-primary p-5">
            <div class="card">
            <div class="card-header">Quotes</div>
            <div class="card-body">
                {randomQuote ? (
                    <>
                        <h5 class="card-title">- {randomQuote.author || "No Author"}</h5>
                    </>
                ):(
                    <h1>"Loading..."</h1>
                )}
                <p class="card-text">{randomQuote.text}</p>
                <div class="row">
                    <button onClick={getNewQuote}>New Quote</button>
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))