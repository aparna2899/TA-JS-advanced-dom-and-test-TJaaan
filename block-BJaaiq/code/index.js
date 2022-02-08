let root = document.querySelector('ul');


document.addEventListener('scroll',function(){  
        quotes.forEach((quote) => {
            let li = document.createElement('li');
            let strong = document.createElement('strong');
            strong.innerHTML = quote.quoteText
            let span = document.createElement('span');
            span.innerHTML = quote.quoteAuthor;
            li.append(strong,span);
            root.append(li);
        })  
})

