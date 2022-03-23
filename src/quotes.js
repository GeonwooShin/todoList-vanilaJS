const quoteAuthor = document.querySelector('.quote__author')
const quoteContent = document.querySelector('.quote__content')

async function loadQuote() {
  const response = await fetch('https://api.quotable.io/random')
  const quotes = await response.json()
  .then(quote => {
    quoteAuthor.innerText = quote.author
    quoteContent.innerText = quote.content
  })
}

loadQuote()
