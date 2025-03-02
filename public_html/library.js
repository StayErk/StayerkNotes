import books from './booksList.json' with {type: 'json'}

let ul = document.createElement("ul")
ul.setAttribute("id", "book_list")

let book_list_div = document.getElementById("ercolino.me-Books in the Library")

book_list_div.appendChild(ul)

books.forEach((book) => {
	let li = document.createElement("li")
	li.innerText = book.title + ", " + book.authors
	ul.appendChild(li)
})
