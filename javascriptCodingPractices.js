1.LibrauaryManagement
html:
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</head>

<body>
    <div class="pl-3 pr-3 pb-3 container">
        <div class="row">
            <div class="col-12 pt-4 pl-4 pr-4 imagebg">
                <h1 class="mt-1 head">Library Management</h1>
                <input id="searchInput" class="mb-3 p-2 searchbox" placeholder="Type book title" type="search" />
            </div>
        </div>
    </div>
    <div class="col-12 d-none mt-5 spinner" id="spinner">
        <div class="d-flex flex-row justify-content-center">
            <div class="spinner-border" role="status"></div>
        </div>
    </div>
    <div class="container d-flex flex-row mt-4">
        <div class="row" id="searchResults">

        </div>

    </div>

</body>

</html>

css:

@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');

.imagebg {
    background-image: url('https://assets.ccbp.in/frontend/dynamic-webapps/library-management-bg.png');
    text-align: center;
    height: 35vh;
    background-size: cover;
}

.head {
    color: #ffffff;
    font-family: Roboto;
    font-size: 30px;
}

.searchbox {
    height: 35px;
    border-style: solid;
    border-width: 0px;
    border-radius: 5px;
}

.spinner {
    color: #ffffff;
}

js:

let searchtitle = document.getElementById("searchInput");
let loading = document.getElementById("spinner");
//let result = document.getElementById("searchResults");
let myurl = "https://apis.ccbp.in/book-store";
let responsediv = document.getElementById("searchResults");



searchtitle.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (event.target.value === "") {
            responsediv.textContent = "Please enter search value";
        } else {
            let title1 = event.target.value;
            let url = myurl + "?" + "title=" + title1;
            let options = {
                method: "GET"
            };
            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    let gotdata = jsonData.search_results;
                    //console.log(gotdata.length)
                    if (gotdata.length === 0) {
                        responsediv.textContent = "no results found";
                    } else {
                        responsediv.textContent = "";
                        for (let book of gotdata) {

                            let div = document.createElement('div');
                            div.classList.add("col-6", "mr-auto", "ml-auto", "d-flex", "flex-column");
                            responsediv.appendChild(div);


                            let image = document.createElement("img");
                            //image.classList.add("col-5");
                            image.setAttribute("src", book.imageLink);
                            div.appendChild(image);

                            let author1 = document.createElement("p");
                            author1.textContent = book.author;
                            //author.classList.add("col-5");
                            div.appendChild(author1);
                        }
                    }
                });
        }
    }
});


2.Speed Typing Test

