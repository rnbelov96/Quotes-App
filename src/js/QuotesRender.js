import React from 'react';

const QuotesRender = (props) => {
    const quoteItem = props.quotes.find(item => item.id === props.id);
    return (
        <>
            <div id="text">{quoteItem.quote}</div>
            <div id="author">{quoteItem.author}</div>
        </>
    )
}

export default QuotesRender;