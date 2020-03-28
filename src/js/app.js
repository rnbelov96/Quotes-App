import '../styles/main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import QuotesRender from './QuotesRender';

let nextId = 1;

const quotes = [
    {
        author: 'Dalai Lama',
        quote: 'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
        id: nextId++
    },
    {
        author: 'Benjamin Franklin',
        quote: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
        id: nextId++
    },
    {
        author: 'Vincent van Gogh',
        quote: 'I would rather die of passion than of boredom.',
        id: nextId++
    },
    {
        author: 'Marie Curie',
        quote: 'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.',
        id: nextId++
    },
];

const NEXTQUOTE = 'NEXTQUOTE';

const nextQuote = () => {
    return {
        type: NEXTQUOTE
    }
}

const reducer = (state = 1, action) => {
    switch (action.type) {
        case NEXTQUOTE:
            let newQuoteId = Math.round(1 - 0.5 + Math.random() * (quotes.length - 1 + 1));
            while (newQuoteId === state) {
                newQuoteId = Math.round(1 - 0.5 + Math.random() * (quotes.length - 1 + 1))
            }
            return newQuoteId;
        default:
            return state;
    }
}

const store = createStore(reducer);


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: quotes,
        }
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    componentDidMount() {
        window.text = document.body.querySelector('#text');
        window.author = document.body.querySelector('#author');
        window.newQuote = document.body.querySelector('#new-quote');
    }

    buttonHandler() {
        const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = newColor;
        document.body.style.color = newColor;
        newQuote.style.backgroundColor = newColor;
        text.style.opacity = 0;
        author.style.opacity = 0;
        newQuote.disabled = true;
        setTimeout(() => {
            this.props.changeQuoteId();
            this.setState({
                quotes: this.state.quotes
            })
            document.body.querySelector('#text').style.opacity = 1;
            document.body.querySelector('#author').style.opacity = 1;
            newQuote.disabled = false;
        }, 500)
    }

    render() {
        return (
            <div id="quote-box">
                <QuotesRender id={this.props.quoteId} quotes={this.state.quotes} />
                <div id='buttons'>
                    {/* <a id='tweet-quote' href="twitter.com/intent/tweet">Tween It!</a> */}
                    <button onClick={this.buttonHandler} id="new-quote">New quote</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state = 1) => {
    return {
        quoteId: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuoteId: () => {
            dispatch(nextQuote())
        }
    }
}

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedComponent />
            </Provider>
        )
    }
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'))
