import '../styles/main.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import QuotesRender from './QuotesRender';
import rootReducer from '@/redux/reducers/root-reducer';
import { AppActionCreators } from '@/redux/app';
import { getAllQuotes, getCurrentQuoteId } from '@/redux/app/selectors';

const store = createStore(rootReducer);


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: this.props.quotes,
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
            this.props.changeQuoteId(2);
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
        quotes: getAllQuotes(state),
        quoteId: getCurrentQuoteId(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuoteId: (quoteId) => {
            dispatch(AppActionCreators.changeQuote(quoteId))
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
