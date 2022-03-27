const quoteAuthor = document.querySelector('.quote__author')
const quoteContent = document.querySelector('.quote__content')
const nextQuote = document.querySelector('.quote__next-btn')

async function loadQuote() {
  const response = await fetch('https://api.quotable.io/random')
  const quotes = await response.json()
  .then(quote => {
    quoteAuthor.innerText = quote.author
    quoteContent.innerText = quote.content
  })
}

nextQuote.addEventListener('click', loadQuote)

loadQuote()
