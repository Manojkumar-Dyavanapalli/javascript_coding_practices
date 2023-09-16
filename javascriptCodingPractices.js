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


2.Speed Typing TEst

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
    <div id="speedTypingTest" class="container main p-5">
        <h1 class="head">Speed Typing Test</h1>
        <p class="mb-4 para1">On your fingers lets set Go!</p>
        <div class="mb-3 d-flex flex-row">
            <img class="image p-1" src="https://assets.ccbp.in/frontend/dynamic-webapps/clock-img.png" />
            <p class="ml-3 para2" id="timer"></p>
            <p class="pt-4 seconds">seconds</p>
        </div>
        <div class="card p-4">
            <p id="quoteDisplay"></p>
            <div class="d-none spinner" id="spinner">
                <div class="d-flex flex-row justify-content-center mt-4">
                    <div class="spinner-border" role="status"></div>
                </div>
            </div>
            <textarea class="p-3 textarea" rows="5" cols="30" id="quoteInput"></textarea>
        </div>
        <p class="mt-4 para3" id="result"></p>
        <div class="mt-5 mb-5 d-flex flex-row">
            <button id="submitBtn" class="p-2 mr-3 btn1 btn btn-primary">Submit</button>
            <button id="resetBtn" class="btn btn2 btn-secondary">reset</button>
        </div>
    </div>
</body>

</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.main {

    height: 100vh;
    background-image: linear-gradient(to left, #dac0ff, #f2ebfe);
}

.spinner {
    color: black;
}

.head {
    font-family: Roboto;
    font-weight: bold;
    color: #690cb0;
}

.para1 {
    color: #3e4c59;
}

.image {
    height: 60px;
    margin-right: 40px;
}

.span {
    font-size: 20px;
    font-weight: bold;
    font-family: Roboto;
}

.card {
    background-color: #f3eaff;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
}

.para2 {
    font-size: 40px;
}

.textarea {
    border-width: 1px;
    border-style: solid;
}

.para3 {
    font-size: 25px;
    font-weight: bold;
}

.btn1 {

    background-color: #690cb0;
    border-radius: 10px;
    border-width: 0px;
}

.btn2 {
    border-width: 0px;
    background-color: white;
    border-radius: 10px;
    color: black;
}

.wrong {
    color: red;
}

.right {
    color: green;
}

.seconds {
    font-size: 18px;
}

js:

let randomtext = document.getElementById("quoteDisplay");
let submitbtn = document.getElementById("submitBtn");
let reset = document.getElementById("resetBtn");
let textinput = document.getElementById("quoteInput");
let myresult = document.getElementById("result");
let timer = document.getElementById("timer");
let loading = document.getElementById('spinner');
let url = "https://apis.ccbp.in/random-quote";
let count = 0;
let got;
let options = {
    method: "GET"
};

let wrongmsg = "You typed incorrect sentence";

function mytime() {
    let a = setInterval(function() {
        count = count + 1;
        timer.textContent = count;
    }, 1000);
    return a;
}
let b = mytime();

function fetching() {
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            randomtext.textContent = data.content;
            got = data.content;
            loading.classList.add("d-none");
        });
}
loading.classList.remove("d-none");
fetching();


function removetime(b) {
    clearInterval(b);
}

submitbtn.addEventListener("click", function() {
    let entered = textinput.value;
    if (textinput.value === "") {
        myresult.classList.add("wrong");
        myresult.textContent = wrongmsg;
    } else if (entered !== got) {
        myresult.classList.add("wrong");
        myresult.textContent = wrongmsg;
    } else {
        myresult.classList.remove("wrong");
        myresult.classList.add("right");
        myresult.textContent = "You completed in " + count + " seconds!";
        removetime(b);
    }
});

reset.onclick = function() {
    removetime(b);
    count = 0;
    fetching();
    // b = mytime();

}

3.Bookmark Maker

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
    <div class="main-container">
        <p>Hello</p>
        <h1 class="head-name">Jane Doe</h1>
        <div class="sub-container">
            <h5>Bookmark Your Favourite Sites</h5>
            <form id="bookmarkForm" class="form">
                <label for="siteNameInput">SITE NAME</label>
                <input type="text" id="siteNameInput" class="form-control" />
                <p id="siteNameErrMsg" class="mb-4"></p>
                <label for="siteUrlInput">SITE URL</label>
                <input type="text" id="siteUrlInput" class="form-control" />
                <p id="siteUrlErrMsg"></p>
                <div class="text-right">
                    <button type="submit" class="btn button" id="submitBtn">Submit</button>
                </div>
            </form>
            <ul class="form mt-4" id="bookmarksList"></ul>
        </div>
    </div>
</body>

</html>

css:

.main-container {
    background-color: #2d3a8c;
    padding-top: 30px;
    padding-left: 10px;
    color: #ffffff;
    min-height: 100vh;
}

.head-name {
    font-size: 25px;
}

.form {
    padding: 20px;
    background-color: #e4e7eb;
    border-radius: 16px;
}

.sub-container {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: #ffffff;
    padding: 30px;
    color: #21396c;

}

.button {
    background-color: #21396c;
    color: #ffffff;
}

.bullet-style {
    list-style-type: none;
}

js:

// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let submitBtnEl = document.getElementById("submitBtn");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

let siteNameInputValue = siteNameInputEl.value;
let url = siteUrlInputEl.value;
let errMsg = "Required*";
siteNameInputEl.addEventListener("change", function(event) {
    siteNameInputValue = event.target.value;
});
siteUrlInputEl.addEventListener("change", function(event) {
    siteUrlInputValue = event.target.value;
});

function submit() {
    if (siteNameInputValue === "") {
        siteNameErrMsgEl.textContent = errMsg;
    } else {
        siteNameErrMsgEl.textContent = "";
    }
    if (siteUrlInputValue === "") {
        siteUrlErrMsgEl.textContent = errMsg;
    } else {
        siteUrlErrMsgEl.textContent = "";
    }

    let bookmarksListEl = document.getElementById("bookmarksList");
    let liEl1 = document.createElement("li");
    liEl1.classList.add("bullet-style");
    bookmarksListEl.appendChild(liEl1);

    let anchorEl1 = document.createElement("a");
    anchorEl1.setAttribute("href", url);
    anchorEl1.setAttribute("target", "_blank");
    anchorEl1.textContent = siteNameInputValue;
    liEl1.appendChild(anchorEl1);

    let liEl2 = document.createElement("li");
    liEl2.classList.add("bullet-style");
    bookmarksListEl.appendChild(liEl2);

    let anchorEl2 = document.createElement("a");
    anchorEl2.setAttribute("href", url);
    anchorEl2.setAttribute("target", "_blank");
    anchorEl2.textContent = url;
    liEl2.appendChild(anchorEl2);


}




bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    submit();
});
submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    submit();
});

4.Select your Pet
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
    <div class="container">
        <div class="row">
            <div class="col-12 bg-container mt-4 mb-4 pt-4 pb-4">
                <h1 class="heading">Select your Pet</h1>
                <select class="form-control" id="petSelect">
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="rabbit">Rabbit</option>
                </select>
                <div class="mt-4">
                    <img id="petImg" class="w-100" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png" />
                </div>
            </div>
        </div>

    </div>
</body>

</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
    background-image: linear-gradient(to bottom, grey, blue);
    border-radius: 36px;
    height: 100vh;
}

.heading {
    text-align: center;
    font-weight: bold;
    font-family: "Open Sans";
    margin-bottom: 20px;
}

js:

let petsImageUrls = {
    dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
    cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
    parrot: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
    spider: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
    rabbit: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
};
let petSelectEl = document.getElementById("petSelect");
let imgEl = document.getElementById("petImg");

petSelectEl.addEventListener("change", function(event) {
    let selectedOption = event.target.value;
    let selectedImg = petsImageUrls[selectedOption];
    imgEl.src = selectedImg;
})

5.Answer the Question
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
    <div class="main-container">
        <h1 class="main-head">Answer the Question</h1>
        <form class="questions-form" id="questionsForm">
            <h3 class="question">What is the capital of India?</h3>
            <input type="radio" id="cityHyderabad" value="Hyderabad" name='city' />
            <label for="cityHyderabad">Hyderabad</label></br>
            <input type="radio" id="cityChennai" value="Chennai" name='city' />
            <label for="cityChennai">Chennai</label></br>
            <input type="radio" id="cityDelhi" value="Delhi" name='city' />
            <label for="cityDelhi">Delhi</label></br>
            <input type="radio" id="cityMumbai" value="Mumbai" name='city' class="mb-4" />
            <label for="cityMumbai">Mumbai</label></br>
            <button type="submit" class="btn btn-primary" id="submitBtn">Submit</button>
            <p id="resultMsg"></p>
        </form>

    </div>
</body>

</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Monoton&family=Open+Sans:wght@400;700&family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&family=Source+Sans+Pro:wght@400;700&family=Work+Sans:wght@400;700&display=swap");

.main-container {
    background-color: orange;
    padding: 20px;
}

.main-head {
    color: white;
    font-weight: 600;
    text-align: center;
}

.questions-form {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 15px;
}

.question {
    font-family: "Bree Serif";
}

js:

let questionsFormEl = document.getElementById("questionsForm");
let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");
let submitBtnEl = document.getElementById("submitBtn");
let resultMsgEl = document.getElementById("resultMsg");

let capitalCity = "Delhi"
let selectedCity = null

cityHyderabadEl.addEventListener("change", function(event) {
    selectedCity = event.target.value
})
cityChennaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value
})
cityDelhiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value
})
cityMumbaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value
})

function gettingAnswer(event) {
    if (selectedCity === null) {
        resultMsgEl.textContent = "Please Select A City";
        resultMsgEl.style.color = "red";
    } else if (selectedCity === capitalCity) {
        resultMsgEl.textContent = "Correct Answer";
        resultMsgEl.style.color = "green";
    } else {
        resultMsgEl.textContent = "Wrong Answer";
        resultMsgEl.style.color = "red";
    }
}
questionsFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    gettingAnswer();
});
submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    gettingAnswer();
});

6.Gorest control 
htlm:

<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
</head>

<body>
    <div class="bg-container">
        <div class="container pt-5 pb-5">
            <div class="row pt-4 pb-4 d-flex flex-row justify-content-center console-container">
                <h1 class="col-12 mb-2 text-center heading">GO REST CONSOLE</h1>
                <form class="col-11" id="consoleForm">
                    <div class="mb-2">
                        <label>Request URL</label>
                        <input class="form-control" type="text" value="https://gorest.co.in/public-api/users" id="requestUrl" />
                        <p class="error-message" id="requestUrlErrMsg"></p>
                    </div>
                    <div class="mb-2">
                        <label>Request Method</label>
                        <select class="form-control mb-2" id="requestMethod">
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label>Request Body</label>
                        <textarea class="form-control w-100" rows="5" id="requestBody"></textarea>
                    </div>
                    <div class="text-right">
                        <button type="submit" class="p-2 btn btn-primary" id="sendRequestBtn">Send Request</button>
                    </div>
                </form>
                <div class="col-11 mt-4">
                    <label>Response Status</label>
                    <input class="form-control" type="text" id="responseStatus" />
                </div>
                <div class="col-11 mt-2">
                    <label>Response Body</label>
                    <textarea class="form-control w-100" rows="6" id="responseBody"></textarea>
                </div>
            </div>
        </div>
    </div>
</body>

</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
    background-color: #52606d;
}

.console-container {
    background-color: #ffffff;
    border-radius: 36px;
}

.heading {
    color: #1f2933;
    font-size: 32px;
    font-weight: bold;
}

.error-message {
    color: #dc3545;
    font-family: "Roboto";
    font-size: 14px;
}

js:

let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let responseStatusEl = document.getElementById("responseStatus");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");

let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
};
requestUrlEl.addEventListener("change", function(event) {
    formData.requestUrl = event.target.value;
});
requestMethodEl.addEventListener("change", function(event) {
    formData.requestMethod = event.target.value;
});
requestBodyEl.addEventListener("change", function(event) {
    formData.requestBody = event.target.value;
});

function validateRequestUrl(formData) {
    let {
        requestUrl
    } = formData;
    if (requestUrl === "") {
        requestUrlErrMsgEl.textContent = "Required*";
    } else {
        requestUrlErrMsgEl.textContent = "";
    }
}

function sendRequest(formData) {
    let {
        requestUrl,
        requestMethod,
        requestBody
    } = formData;
    let options = {
        method: requestMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 15e3fbc00b3924eecf5c6cc6390e6ef2b95d90f8688b8fe356428d6651249c22"
        },
        body: requestBody
    };
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            responseStatus = jsonData.code;
            responseBody = JSON.stringify(jsonData)
            responseStatusEl.value = responseStatus;
            responseBodyEl.value = responseBody;
        })
}
consoleFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateRequestUrl(formData);
    sendRequest(formData);
})

7.add user  
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
    <div class="container">
      <h1 class="form-heading">Add User</h1>
      <form id="addUserForm">
        <div class="mb-3">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" />
          <p id="nameErrMsg" class="error-message"></p>
        </div>
        <div class="mb-3">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" />
          <p id="emailErrMsg" class="error-message"></p>
        </div>
        <div class="mb-3">
          <label for="status">Working Status</label>
          <select id="status" class="form-control">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div class="mb-3">
          <h1 class="gender-field-heading">Gender</h1>
          <input type="radio" name="gender" id="genderMale" value="Male" checked />
          <label for="genderMale">Male</label>
          <input type="radio" name="gender" id="genderFemale" value="Female" class="ml-2" />
          <label for="genderFemale">Female</label>
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.form-heading {
  font-family: "Roboto";
  font-size: 36px;
  padding-top: 40px;
  padding-bottom: 20px;
}

.error-message {
  color: #dc3545;
  font-family: "Roboto";
  font-size: 14px;
}

.gender-field-heading {
  color: #212529;
  font-size: 18px;
  margin-bottom: 10px;
}


js:

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let workingStatusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let addUserFormEl = document.getElementById("addUserForm");

let formData = {
  name: "",
  email: "",
  status: "Active",
  gender: "Male"
};

nameEl.addEventListener("change", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }

  formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }

  formData.email = event.target.value;
});

workingStatusEl.addEventListener("change", function(event) {
  formData.status = event.target.value;
});

genderMaleEl.addEventListener("change", function(event) {
  formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
  formData.gender = event.target.value;
});

function validateFormData(formData) {
  let { name, email } = formData;
  if (name === "") {
    nameErrMsgEl.textContent = "Required*";
  }
  if (email === "") {
    emailErrMsgEl.textContent = "Required*";
  }
}

function submitFormData(formData) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f"
    },
    body: JSON.stringify(formData)
  };

  let url = "https://gorest.co.in/public-api/users";

  fetch(url, options)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      console.log(jsonData);
      if (jsonData.code === 422) {
        if (jsonData.data[0].message === "has already been taken") {
          emailErrMsgEl.textContent = "Email Already Exists";
        }
      }
    });
}

addUserFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
  validateFormData(formData);
  submitFormData(formData);
});

8.Subscribe to us  
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
    <div class="bg-container p-4">
      <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/subscribe-to-us-img.png" class="w-100"/>
      <div class="subscribe-form-container d-flex flex-row justify-content-center">
        <form id="subscribeForm" class="pt-4 pb-4 w-75">
          <div class="mb-3">
            <label for="name" class="input-label">NAME</label>
            <input type="text" class="form-control" id="name"/>
            <p id="nameErrMsg" class="error-message"></p>
          </div>
          <div class="mb-3">
            <label for="email" class="input-label">EMAIL</label>
            <input type="text" class="form-control" id="email"/>
            <p id="emailErrMsg" class="error-message"></p>
          </div>
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-color: #d5e5ff;
}

.subscribe-form-container {
  background-color: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.input-label {
  color: #7b8794;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
}

.error-message {
  color: #dc3545;
  font-family: "Roboto";
  font-size: 14px;
}


js:

let subscribeFormEl = document.getElementById("subscribeForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let errorMsg = "Required*";

nameEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = errorMsg;
  } else {
    nameErrMsgEl.textContent = "";
  }
});

emailEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = errorMsg;
  } else {
    emailErrMsgEl.textContent = "";
  }
});

subscribeFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
});

9.Update password 

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
    <div class="bg-container p-4">
      <h1 class="form-heading text-center">Update Password</h1>
      <form id="updatePasswordForm" class="p-4">
        <div class="mb-3">
          <label for="newPassword" class="input-label">NEW PASSWORD</label>
          <input type="password" class="form-control" id="newPassword" placeholder="Create new password" />
          <p id="newPasswordErrMsg" class="error-message mt-1"></p>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="input-label">CONFIRM PASSWORD</label>
          <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm password" />
          <p id="confirmPasswordErrMsg" class="error-message mt-1"></p>
        </div>
        <div class="text-center mt-2">
          <button id="updateBtn" type="submit" class="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-image: linear-gradient(to bottom, #ffa6b7, #1e2ad2);
  height: 100vh;
}

.form-heading {
  color: #ffffff;
  font-family: "Roboto";
  font-size: 36px;
  font-weight: bold;
}

.input-label {
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
}

.error-message {
  color: #ff0000;
  font-family: "Roboto";
  font-size: 14px;
}

js:

let updatePasswordFormEl = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");

let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

let validateNewPassword = function() {
  if (newPasswordEl.value === "") {
    newPasswordErrMsgEl.textContent = "Required*";
  } else {
    newPasswordErrMsgEl.textContent = "";
  }
};

let validateConfirmPassword = function() {
  let newPassword = newPasswordEl.value;
  let confirmPassword = confirmPasswordEl.value;

  if (newPassword !== confirmPassword) {
    confirmPasswordErrMsgEl.textContent = "Passwords must be same";
  } else {
    confirmPasswordErrMsgEl.textContent = "";
  }
};

newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPassword);

updatePasswordFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
  validateNewPassword();
  validateConfirmPassword();
});
 

1 to 9 reversed


***CP1-1-color picker
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
    <div class="color-picker-container d-flex flex-column justify-content-center text-center" id="colorPickerContainer">
      <h1 class="color-picker-heading">Color Picker</h1>
      <div class="mt-3 mb-3">
        <button class="button button-1" id="button1" onclick="changeBgToGreyAndUpdateText()">#e0e0e0</button>
        <button class="button button-2" id="button2" onclick="changeBgToGreenAndUpdateText()">#6fcf97</button>
        <button class="button button-3" id="button3" onclick="changeBgToBlueAndUpdateText()">#56ccf2</button>
        <button class="button button-4" id="button4" onclick="changeBgToPurpleAndUpdateText()">#bb6bd9</button>
      </div>
      <p class="selected-color-text">Background Color : <span class="selected-color-hex-code" id="selectedColorHexCode">#fffff</span></p>
      <p class="color-picker-instruction">Try clicking on one of the colors above to change the background color of this page!</p>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.color-picker-container {
  background-color: #ffffff;
  height: 100vh;
}

.color-picker-heading {
  font-family: "Open Sans";
  font-size: 50px;
  font-weight: 800;
}

.button {
  font-family: "Open Sans";
  font-size: 14px;
  width: 100px;
  height: 100px;
  border-width: 3px;
  border-color: black;
  border-radius: 20px;
  margin-bottom: 10px;
}

.button-1 {
  background-color: #e0e0e0;
}

.button-2 {
  background-color: #6fcf97;
}

.button-3 {
  background-color: #56ccf2;
}

.button-4 {
  background-color: #bb6bd9;
}

.selected-color-text {
  background-color: #222222;
  color: white;
  font-family: "Open Sans";
  font-size: 25px;
  font-weight: bold;
  border-radius: 8px;
  padding: 16px;
}

.selected-color-hex-code {
  color: #49a6e9;
}

.color-picker-instruction {
  font-family: "Open Sans";
  font-size: 20px;
}

js:

let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let selectedColorHexCodeElement = document.getElementById("selectedColorHexCode");

function changeBgToGreyAndUpdateText() {
  colorPickerContainerElement.style.backgroundColor = "#e0e0e0";
  selectedColorHexCodeElement.textContent = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
  colorPickerContainerElement.style.backgroundColor = "#6fcf97";
  selectedColorHexCodeElement.textContent = "#6fcf97";
}

function changeBgToBlueAndUpdateText() {
  colorPickerContainerElement.style.backgroundColor = "#56ccf2";
  selectedColorHexCodeElement.textContent = "#56ccf2";
}

function changeBgToPurpleAndUpdateText() {
  colorPickerContainerElement.style.backgroundColor = "#bb6bd9";
  selectedColorHexCodeElement.textContent = "#bb6bd9";
}


cp1-2-Traffic light  
html:
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="traffic-light-container">
      <h1 class="traffic-light-heading text-center">Traffic Light</h1>
      <div class="d-flex flex-row justify-content-center m-5">
        <div class="d-flex flex-column">
          <button id="stopButton" class="button" onclick="turnOnRed()">Stop</button>
          <button id="readyButton" class="button" onclick="turnOnYellow()">Ready</button>
          <button id="goButton" class="button" onclick="turnOnGreen()">Go</button>
        </div>
        <div class="traffic-light">
          <div id="stopLight" class="bulb"></div>
          <div id="readyLight" class="bulb"></div>
          <div id="goLight" class="bulb"></div>
        </div>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.traffic-light-container {
  background-color: #86d2f2;
  padding: 20px;
}

.traffic-light-heading {
  color: #1f1d41;
  font-family: "Roboto";
  font-size: 46px;
  font-weight: bold;
}

.button {
  background-color: #1f1d41;
  color: white;
  font-family: "Roboto";
  font-size: 15px;
  width: 70px;
  height: 40px;
  border-width: 0;
  border-radius: 10px;
  margin-top: 45px;
}

.traffic-light {
  background-color: #1f1d41;
  width: 100px;
  height: 300px;
  border-radius: 40px;
  margin-left: 30px;
  padding: 20px;
}

.bulb {
  background-color: #4b5069;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-top: 25px;
  margin-bottom: 25px;
  margin-left: 5px;
}

js:

let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");
let stopButtonElement = document.getElementById("stopButton");
let readyButtonElement = document.getElementById("readyButton");
let goButtonElement = document.getElementById("goButton");

function turnOnRed() {
  stopLightElement.style.backgroundColor = "#cf1124";
  readyLightElement.style.backgroundColor = "#4b5069";
  goLightElement.style.backgroundColor = "#4b5069";
  stopButtonElement.style.backgroundColor = "#cf1124";
  readyButtonElement.style.backgroundColor = "#1f1d41";
  goButtonElement.style.backgroundColor = "#1f1d41";
}

function turnOnYellow() {
  stopLightElement.style.backgroundColor = "#4b5069";
  readyLightElement.style.backgroundColor = "#f7c948";
  goLightElement.style.backgroundColor = "#4b5069";
  stopButtonElement.style.backgroundColor = "#1f1d41";
  readyButtonElement.style.backgroundColor = "#f7c948";
  goButtonElement.style.backgroundColor = "#1f1d41";
}

function turnOnGreen() {
  stopLightElement.style.backgroundColor = "#4b5069";
  readyLightElement.style.backgroundColor = "#4b5069";
  goLightElement.style.backgroundColor = "#199473";
  stopButtonElement.style.backgroundColor = "#1f1d41";
  readyButtonElement.style.backgroundColor = "#1f1d41";
  goButtonElement.style.backgroundColor = "#199473";
}

***cp2-seasons switcher  
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
    <div>
      <img
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-four-seasons-xs-img.png"
        class="season-image d-inline d-md-none"
        id="seasonSmallImage"
      />
      <img
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-four-seasons-md-img.png"
        class="season-image d-none d-md-inline"
        id="seasonMediumImage"
      />
      <div class="d-flex flex-row justify-content-center mt-4">
        <button class="button spring-button" id="springBtn" onclick="changeSeasonToSpring()">Spring</button>
        <button class="button summer-button" id="summerBtn" onclick="changeSeasonToSummer()">Summer</button>
        <button class="button autumn-button" id="autumnBtn" onclick="changeSeasonToAutumn()">Autumn</button>
        <button class="button winter-button" id="winterBtn" onclick="changeSeasonToWinter()">Winter</button>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.season-image {
  width: 100%;
  height: 85vh;
}

.button {
  color: white;
  background-color: #cbd2d9;
  font-family: "Roboto";
  font-size: 14px;
  width: 80px;
  height: 32px;
  border-width: 0;
  border-radius: 8px;
  margin-left: 10px;
  margin-right: 10px;
}

.spring-button {
  background-color: #3a7333;
}

.summer-button {
  background-color: #e0bb00;
}

.autumn-button {
  background-color: #b04400;
}

.winter-button {
  background-color: #0f7cb6;
}


js:

let seasonSmallImageElement = document.getElementById("seasonSmallImage");
let seasonMediumImageElement = document.getElementById("seasonMediumImage");

let springSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let winterSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let winterMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function changeSeasonToSpring() {
  seasonSmallImageElement.src = springSmallImage;
  seasonMediumImageElement.src = springMediumImage;
}

function changeSeasonToSummer() {
  seasonSmallImageElement.src = summerSmallImage;
  seasonMediumImageElement.src = summerMediumImage;
}

function changeSeasonToAutumn() {
  seasonSmallImageElement.src = autumnSmallImage;
  seasonMediumImageElement.src = autumnMediumImage;
}

function changeSeasonToWinter() {
  seasonSmallImageElement.src = winterSmallImage;
  seasonMediumImageElement.src = winterMediumImage;
}

*cp2-Toggle Like and Unlike

html:
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/d1c2ea8b80.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div>
      <img
        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png"
        class="puppy-image"
        id="puppyImage"
      />
      <div class="d-flex flex-row justify-content-center mt-4">
        <i class="fa fa-thumbs-up like-icon" id="likeIcon" aria-hidden="true"></i>
        <button class="like-button ml-2" id="likeButton" onclick="onClickLikeButton()">
          Like
        </button>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.puppy-image {
  width: 100%;
}

.like-icon {
  color: #cbd2d9;
  font-size: 40px;
}

.like-button {
  color: #9aa5b1;
  background-color: #cbd2d9;
  font-family: "Roboto";
  font-size: 14px;
  width: 100px;
  height: 40px;
  border-width: 0;
  border-radius: 8px;
}

js:

let puppyImageElement = document.getElementById("puppyImage");
let likeIconElement = document.getElementById("likeIcon");
let likeButtonElement = document.getElementById("likeButton");
let isImageLiked = false;

function onClickLikeButton() {
  if (isImageLiked === false) {
    puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
    likeIconElement.style.color = "#0967d2";
    likeButtonElement.style.backgroundColor = "#0967d2";
    likeButtonElement.style.color = "#ffffff";
    isImageLiked = true;
  }
  else {
    puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
    likeIconElement.style.color = "#cbd2d9";
    likeButtonElement.style.backgroundColor = "#cbd2d9";
    likeButtonElement.style.color = "#9aa5b1";
    isImageLiked = false;
  }
}

*cp-3-Tip Calculator 

html:
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="tip-calculator-container pb-5">
      <img class="tip-calculator-image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/tip-calculator-img.png"/>
      <h1 class="tip-calculator-heading text-center mt-4 mb-4">Tip Calculator</h1>
      <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 mb-4">
              <p class="input-label mb-2">BILL AMOUNT</p>
              <input type="text" class="user-input" id="billAmount" />
            </div>
            <div class="col-12 col-md-6 mb-4">
              <p class="input-label mb-2">PERCENTAGE TIP</p>
              <input type="text" class="user-input" id="percentageTip" />
            </div>
           <div class="col-12 col-md-6 mb-4">
             <p class="input-label mb-2">TIP AMOUNT</p>
             <input type="text" class="user-input" id="tipAmount" />
           </div>
           <div class="col-12 col-md-6 mb-4">
             <p class="input-label mb-2">TOTAL</p>
             <input type="text" class="user-input" id="totalAmount" />
           </div>
          <div class="col-12 text-center mt-4">
            <button class="btn btn-info calculate-tip-button" id="calculateButton" onclick="calculateTip()">CALCULATE</button>
            <p class="error-message text-center" id="errorMessage"></p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.tip-calculator-container {
  background-color: #f9fbfe;
}

.tip-calculator-image {
  width: 100%;
}

.tip-calculator-heading {
  color: #264fa2;
  font-family: "Roboto";
  font-size: 48px;
  font-weight: 500;
}

.input-label {
  color: #7b8794;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
}

.user-input {
  height: 40px;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #cbd2d9;
  border-radius: 4px;
  padding-left: 12px;
}

.calculate-tip-button {
  background-color: #264fa2;
  color: white;
  font-family: "Roboto";
  font-size: 18px;
  border-radius: 4px;
}

.error-message {
  color: #cf1124;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
}

js:

let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip");
let tipAmountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");
let errorMessage = "Please Enter a Valid Input.";

function calculateTip() {
  let billAmountInputValue = billAmountInput.value;
  let percentageTipInputValue = percentageTipInput.value;

  if (billAmountInputValue === "") {
    errorMessageElement.textContent = errorMessage;
  }
  else if (percentageTipInputValue === "") {
    errorMessageElement.textContent = errorMessage;
  }
  else {
    errorMessageElement.textContent = "";
    let billAmount = parseInt(billAmountInputValue);
    let percentageTip = parseInt(percentageTipInputValue);

    let calculatedTip = (percentageTip / 100) * billAmount;
    let calculatedTotal = billAmount + calculatedTip;

    tipAmountInput.value = calculatedTip;
    totalInput.value = calculatedTotal;
  }
}


**cp-3-Sizing an Image

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
    <div class="bg-container pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-left">
            <h1 class="sizing-an-image-heading">Sizing an Image</h1>
            <p class="sizing-an-image-description">
              Increase the width of an image by clicking the plus button and
              decrease by clicking the Minus button. For every action, the image
              increases or decreases by 5px.
            </p>
          </div>
          <div class="col-12 col-md-6 text-center">
            <p class="warning-message" id="warningMessage"></p>
            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/sizing-an-image-img.png" alt="image" id="image"/>
            <p class="image-width">Width: <span id="imageWidth"></span></p>
          </div>
          <div class="col-12">
            <div class="buttons-container d-flex flex-row shadow m-auto">
              <button class="button" id="decrementButton" onclick="onDecrement()">-</button>
              <hr class="hr-line" />
              <span class="width-in-px">5px</span>
              <hr class="hr-line" />
              <button class="button" id="incrementButton" onclick="onIncrement()">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>


css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-color: #f5f7fa;
}

.sizing-an-image-heading {
  color: #1f2933;
  font-family: "Roboto";
  font-size: 48px;
  font-weight: 500;
}

.sizing-an-image-description {
  color: #1f2933;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
}

.warning-message {
  color: #cf1124;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 500;
}

.image-width {
  color: #323f4b;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  margin-top: 10px;
}

.buttons-container {
  background-color: white;
  width: 140px;
}

.button {
  color: #323f4b;
  background-color: white;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  width: 35%;
  height: 50px;
  border-width: 0;
}

.hr-line {
  background-color: black;
  width: 1px;
  height: 20px;
}

.width-in-px {
  color: #323f4b;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
}


js:

let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let imageMaxWidth = 300;
let imageMinWidth = 100;
let originalImageWidth = 200;
let maxWidthWarningMessage = "Too big. Decrease the size of the Image.";
let minWidthWarningMessage = "Can't Visible. Increase the size of the Image.";

imageElement.style.width = originalImageWidth + "px";
imageWidthElement.textContent = originalImageWidth + "px";

function onIncrement() {
  if (originalImageWidth >= imageMaxWidth) {
    warningMessageElement.textContent = maxWidthWarningMessage;
  }
  else {
    originalImageWidth = originalImageWidth + 5;
    let updatedImageWidth = originalImageWidth + "px";
    
    warningMessageElement.textContent = "";
    imageElement.style.width = updatedImageWidth;
    imageWidthElement.textContent = updatedImageWidth;
  }
}

function onDecrement() {
  if (originalImageWidth <= imageMinWidth) {
    warningMessageElement.textContent = minWidthWarningMessage;
  }
  else {
    originalImageWidth = originalImageWidth - 5;
    let updatedImageWidth = originalImageWidth + "px";
    
    warningMessageElement.textContent = "";
    imageElement.style.width = updatedImageWidth;
    imageWidthElement.textContent = updatedImageWidth;
  }
}

**cp-4-Addition Game 

htmL:

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="text-center">
      <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/sum-of-two-numbers-img.png" class="image"/>
      <div class="bg-container pt-5 pb-5">
        <span id="firstNumber" class="number m-2"></span>
        <span class="operator m-1">+</span>
        <span id="secondNumber" class="number m-2"></span>
        <span class="operator m-1">=</span>
        <input id="userInput" class="user-input" type="text" />
        <div class="mt-4 mb-4">
          <button id="checkButton" class="btn btn-primary mr-3" onclick="checkResult()">
            Check
          </button>
          <button id="restartButton" class="btn btn-primary" onclick="restartGame()">
            Restart
          </button>
        </div>
        <p id="gameResult" class="game-result"></p>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.image {
  width: 360px;
  height: 280px;
}

.bg-container {
  background-color: #f5f7fa;
}

.number {
  color: #323f4b;
  background-color: #cbd2d9;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: bold;
  border-style: solid;
  border-width: 8px;
  border-color: #e4e7eb;
  border-radius: 12px;
  padding-left: 8px;
  padding-right: 8px;
}

.operator {
  color: #c4c4c4;
  font-family: "Roboto";
  font-size: 40px;
}

.user-input {
  text-align: center;
  color: #323f4b;
  background-color: #cbd2d9;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: bold;
  width: 142px;
  height: 60px;
  border-style: solid;
  border-width: 8px;
  border-color: #e4e7eb;
  border-radius: 12px;
  margin: 20px;
}

.game-result {
  color: #ffffff;
  background-color: #f5f7fa;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 500;
}

js:

let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

let successMessage = "Congratulations! You got it right.";
let tryAgainMessage = "Please Try Again!";

function restartGame() {
  let firstRandomNumber = Math.random() * 100;
  let secondRandomNumber = Math.random() * 100;

  firstNumberElement.textContent = Math.ceil(firstRandomNumber);
  secondNumberElement.textContent = Math.ceil(secondRandomNumber);
  gameResultElement.textContent = "";
  userInputElement.value = "";
}

restartGame();

function checkResult() {
  let firstRandomInteger = parseInt(firstNumberElement.textContent);
  let secondRandomInteger = parseInt(secondNumberElement.textContent);
  let userEnteredSum = parseInt(userInputElement.value);

  let sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;

  if (userEnteredSum === sumOfTwoRandomIntegers) {
    gameResultElement.textContent = successMessage;
    gameResultElement.style.backgroundColor = "#028a0f";
  }
  else {
    gameResultElement.textContent = tryAgainMessage;
    gameResultElement.style.backgroundColor = "#1e217c";
  }
}

**cp-4-Random Color Generator
html:

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
          <div class="text-center p-4">
            <h1 class="instruction">Click the below button to change color</h1>
            <button id="button" class="button" onclick="onChangeBgColor()">Click Me</button>
          </div>
        </div>
        <div id="bgContainer" class="col-12 col-md-6 bg-container"></div>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.instruction {
  font-family: "Open Sans";
}

.button {
  color: white;
  background-color: #0967d2;
  width: 150px;
  height: 40px;
  border-width: 0;
  border-radius: 25px;
  margin: 15px;
}

.bg-container {
  height: 100vh;
}

js:

let bgContainerElement = document.getElementById("bgContainer");
let buttonElement = document.getElementById("button");

let bgColorsArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b"];

bgContainerElement.style.backgroundColor = bgColorsArray[0];

function onChangeBgColor() {
  let numberOfBgColors = bgColorsArray.length;
  let randomBgColorIndex = Math.ceil(Math.random() * numberOfBgColors);

  /** The 'randomBgColorIndex' ranges from 0 to 8.
  As the 'bgColorsArray' has indices up to 7,
  if the generated randomBgColorIndex is 8,
  we are decrementing it by 1 and assigning 7 to it.*/

  if(randomBgColorIndex === numberOfBgColors){
    randomBgColorIndex = numberOfBgColors - 1;
  }

  let randomBgColor = bgColorsArray[randomBgColorIndex];

  bgContainerElement.style.backgroundColor = randomBgColor;
}

**cp-5-Button Maker 

htmL:

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="button-maker-bg-container p-4">
      <h1 class="button-maker-heading text-center mb-4">Button Maker</h1>
      <div class="button-maker-container bg-light pt-4 pb-4">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-7">
              <p class="input-label">BACKGROUND COLOR</p>
              <input id="bgColorInput" class="user-input" type="text" />
              <p class="input-label">FONT COLOR</p>
              <input id="fontColorInput" class="user-input" type="text" />
              <p class="input-label">FONT SIZE (in px)</p>
              <input id="fontSizeInput" class="user-input" type="text" />
              <p class="input-label">FONT WEIGHT</p>
              <input id="fontWeightInput" class="user-input" type="text" />
              <p class="input-label">PADDING (in px)</p>
              <input id="paddingInput" class="user-input" type="text" />
              <p class="input-label">BORDER RADIUS (in px)</p>
              <input id="borderRadiusInput" class="user-input" type="text" />
              <div class="text-right mt-4">
                <button id="applyButton" class="btn btn-primary" onclick="onApplyProperties()">
                  Apply
                </button>
              </div>
            </div>
            <div class="col-12 col-md-5 mt-4 text-center">
              <button id="customButton" class="custom-button">Custom Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>


css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.button-maker-bg-container {
  background-image: linear-gradient(to right, #09203f, #537895);
}

.button-maker-heading {
  color: #ffffff;
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.button-maker-container {
  border-radius: 10px;
}

.input-label {
  color: #7b8794;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 6px;
}

.user-input {
  width: 100%;
  height: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: #cbd2d9;
  border-radius: 4px;
  padding-left: 12px;
}

.custom-button {
  font-family: "Roboto";
}


js:

let bgColorInputEl = document.getElementById("bgColorInput");
let fontColorInputEl = document.getElementById("fontColorInput");
let fontSizeInputEl = document.getElementById("fontSizeInput");
let fontWeightInputEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusInputEl = document.getElementById("borderRadiusInput");
let customButtonEl = document.getElementById("customButton");

function onApplyProperties() {
  let bgColorValue = bgColorInputEl.value;
  let fontColorValue = fontColorInputEl.value;
  let fontSizeValue = fontSizeInputEl.value;
  let fontWeightValue = fontWeightInputEl.value;
  let paddingValue = paddingInputEl.value;
  let borderRadiusValue = borderRadiusInputEl.value;

  customButtonEl.style.backgroundColor = bgColorValue;
  customButtonEl.style.color = fontColorValue;
  customButtonEl.style.fontSize = fontSizeValue;
  customButtonEl.style.fontWeight = fontWeightValue;
  customButtonEl.style.padding = paddingValue;
  customButtonEl.style.borderRadius = borderRadiusValue;
}

**cp-6-tabs 

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
    <div class="bg-container pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-4">
            <h1 class="heading">Varanasi</h1>
            <p class="description">
              The city is very commonly referred to as City of Temples, Holy
              City of India, Religious Capital of India, and City of Learning.
            </p>
          </div>
          <div class="col-12 col-lg-5 mb-4">
            <img
              class="w-100"
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/tabs-varanasi-img.png"
            />
          </div>
          <div class="col-12 col-lg-7">
            <div class="d-flex flex-row justify-content-between">
              <button id="aboutButton" class="p-3 button selected-button" onclick="onClickAboutTab()">
                About
              </button>
              <button id="timeToVisitButton" class="p-3 button" onclick="onClickTimeToVisitTab()">
                Time to visit
              </button>
              <button id="attractionsButton" class="p-3 button" onclick="onClickAttractionsTab()">
                Attractions
              </button>
            </div>
            <div class="tabs-container">
              <div id="aboutTab" class="p-3">
                <p class="tab-content">
                  Varanasi is one of the oldest living cities in the world. Its
                  Prominence in Hindu mythology is virtually unrevealed. Mark
                  Twain, the English author and literature, who was enthralled
                  by the legend and sanctity of Benaras, once wrote, ''Benaras
                  is older than history, older than tradition, older even than
                  legend and looks twice as old as all of them put together".
                </p>
              </div>
              <div id="timeToVisitTab" class="p-3">
                <p class="tab-content">
                  October to March is the best time to visit Varanasi because
                  most of the fairs here are held during this time of the year.
                  Festivities begin with Diwali and continue to Dev Diwali
                  celebrated on the 15th day from Diwali. In between, there is
                  also Annakut. During this time, the ghats are lit with lights
                  and diyas. Earthen lamps adorn the staircase of the ghats and
                  are also afloat in the river. Firecrackers burn through the
                  night, and it's a sight no one should miss.
                </p>
              </div>
              <div id="attractionsTab" class="p-3">
                <p class="tab-content">
                  When visiting Varanasi, one comes across plenty of ghats, but
                  among them, Dashashwamedh Ghat is said to be one of the oldest
                  and most important. This ghat, leading to the Ganges, is
                  located close to the famous old Vishwanath temple in Kashi
                  (today’s Banaras). Another famous attraction is River Ganges
                  which is the holiest river by the Hindus and many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background: #f1f5f8;
}

.heading {
  color: #102a42;
  font-family: "Roboto";
  font-weight: bold;
}

.description {
  font-family: "Roboto";
}

.tabs-container {
  background-color: white;
  border-radius: 8px;
}

.button {
  background-color: #dae2ec;
  font-family: "Roboto";
  font-size: 18px;
  width: 33%;
  border-width: 0;
  border-radius: 8px;
}

.selected-button {
  background-color: white;
}

.tab-content {
  color: #323f4b;
  font-family: "Roboto";
  font-size: 15px;
}

js:

let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionsButtonEl = document.getElementById("attractionsButton");

let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionsTabEl = document.getElementById("attractionsTab");

timeToVisitTabEl.classList.add("d-none");
attractionsTabEl.classList.add("d-none");

function onClickAboutTab() {
  aboutTabEl.classList.remove("d-none");
  timeToVisitTabEl.classList.add("d-none");
  attractionsTabEl.classList.add("d-none");

  aboutButtonEl.classList.add("selected-button");
  timeToVisitButtonEl.classList.remove("selected-button");
  attractionsButtonEl.classList.remove("selected-button");
}

function onClickTimeToVisitTab() {
  aboutTabEl.classList.add("d-none");
  timeToVisitTabEl.classList.remove("d-none");
  attractionsTabEl.classList.add("d-none");

  aboutButtonEl.classList.remove("selected-button");
  timeToVisitButtonEl.classList.add("selected-button");
  attractionsButtonEl.classList.remove("selected-button");
}

function onClickAttractionsTab() {
  aboutTabEl.classList.add("d-none");
  timeToVisitTabEl.classList.add("d-none");
  attractionsTabEl.classList.remove("d-none");

  aboutButtonEl.classList.remove("selected-button");
  timeToVisitButtonEl.classList.remove("selected-button");
  attractionsButtonEl.classList.add("selected-button");
}


**cp-6-User Profile 
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
    <div class="profile-container" id="profileContainer">
      <div id="imgContainer"></div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.profile-container {
  color: white;
  background-color: #b990ff;
  height: 100vh;
}

.profile-img {
  width: 200px;
}

.profile-name {
  font-family: "Roboto";
  font-size: 22px;
  font-weight: 800;
  margin-top: 20px;
}

.age {
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 600;
}

js:

let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
  };
  
  let profileContainerEl = document.getElementById("profileContainer");
  profileContainerEl.classList.add( "text-center", "d-flex", "flex-column", "justify-content-center");
  
  let imgContainerEl = document.getElementById("imgContainer");
  
  //create an userProfileImg and append it to the imgContainerEl
  
  let imgEl = document.createElement("img");
  imgEl.setAttribute("src", profileDetails.imgSrc);
  imgEl.classList.add("profile-img");
  imgContainerEl.appendChild(imgEl);
  
  //create a nameEl and append it to the profileContainerEl
  
  let nameEl = document.createElement("h1");
  nameEl.classList.add("profile-name");
  nameEl.textContent = profileDetails.name;
  profileContainerEl.appendChild(nameEl);
  
  //create an ageEl and append it to the profileContainerEl
  
  let ageEl = document.createElement("p");
  ageEl.classList.add("age");
  ageEl.textContent = "Age: " + profileDetails.age;
  profileContainerEl.appendChild(ageEl);

  **cp-6-Recipe Page

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
    <div class="pt-5 pb-5">
      <div class="container">
        <div class="row">
          <h1 class="col-12 recipe-title" id="recipeTitle"></h1>
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center" id="imgContainer">
            <img id="img"/>
          </div>
          <div class="col-12 col-md-5 mt-3">
            <div class="ingredients-container">
              <h1 class="ingredients-title">Ingredients</h1>
              <ul id="ingredientListContainer"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.recipe-title {
  text-align: center;
  color: #de3a11;
  font-family: "Lobster";
  font-size: 60px;
}

.ingredients-container {
  background-image: linear-gradient(#09203f, #537895);
  border-radius: 16px;
  padding: 10px;
}

.ingredients-title {
  text-align: center;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.ingredient {
  color: #ffffff;
  font-family: "Roboto";
  font-size: 24px;
}

js:

let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
  };
  let ingredientList = recipeObj.ingredients;
  
  let recipeTitleEl = document.getElementById("recipeTitle");
  let imgContainerEl = document.getElementById("imgContainer");
  let imgEl = document.getElementById("img");
  let ingredientListContainerEl = document.getElementById("ingredientListContainer");
  
  recipeTitleEl.textContent = recipeObj.title;
  
  imgEl.setAttribute("src", recipeObj.imgSrc);
  imgEl.classList.add("w-100");
  imgContainerEl.appendChild(imgEl);
  
  for (let ingredient of ingredientList) {
    let ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    ingredientEl.classList.add("ingredient");
    ingredientListContainerEl.appendChild(ingredientEl);
  }

  
  **cp-6-Todos application 
  html:

  <!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/5f59ca6ad3.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="todos-bg-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="todos-heading">Todos</h1>
            <h1 class="create-task-heading">
              Create <span class="create-task-heading-subpart">Task</span>
            </h1>
            <input type="text" id="todoUserInput" class="todo-user-input" />
            <button class="add-todo-button">Add</button>
            <h1 class="todo-items-heading">
              My <span class="todo-items-heading-subpart">Tasks</span>
            </h1>
            <ul class="todo-items-container" id="todoItemsContainer"></ul>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.todos-bg-container {
  background-color: #f9fbfe;
  height: 100vh;
}

.todos-heading {
  text-align: center;
  font-family: "Roboto";
  font-size: 46px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
}

.create-task-heading {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
}

.create-task-heading-subpart {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.todo-items-heading {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
}

.todo-items-heading-subpart {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.todo-items-container {
  margin: 0;
  padding: 0;
}

.todo-item-container {
  margin-top: 15px;
}

.todo-user-input {
  background-color: white;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #e4e7eb;
  border-radius: 10px;
  margin-top: 10px;
  padding: 15px;
}

.add-todo-button {
  color: white;
  background-color: #4c63b6;
  font-family: "Roboto";
  font-size: 18px;
  border-width: 0;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
}

.label-container {
  background-color: #e6f6ff;
  width: 100%;
  border-style: solid;
  border-width: 5px;
  border-color: #096f92;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-radius: 4px;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  margin-top: 12px;
  margin-right: 12px;
}

.checkbox-label {
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  width: 82%;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
}

.delete-icon-container {
  text-align: right;
  width: 18%;
}

.delete-icon {
  padding: 15px;
}


js:

/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let todoList = [
    {
      text: "Learn HTML"
    },
    {
      text: "Learn CSS"
    },
    {
      text: "Learn JavaScript"
    }
  ];
  let todoItemsContainer = document.getElementById("todoItemsContainer");
  
  function createAndAppendTodo(todo) {
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
  
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);
  
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);
  
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);
  
    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);
  
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
  }
  
  for (let todo of todoList) {
    createAndAppendTodo(todo);
  }

  
  **cp-7-Grocery-list 
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
    <div id="groceryListContainer"></div>
  </body>
</html>


css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.grocery-list-container {
  background-color: #03254c;
  height: 100vh;
  padding: 30px;
}

.grocery-list-heading {
  text-align: center;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 20px;
}

.list-items-container {
  background-color: #f5f9fd;
  border-radius: 6px;
  padding: 30px;
}


js:

let groceryList = [ "Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainerEl = document.getElementById("groceryListContainer");

groceryListContainerEl.classList.add("grocery-list-container");

let headingEl = document.createElement("h1");
headingEl.classList.add("grocery-list-heading");
headingEl.textContent = "Grocery List";
groceryListContainerEl.appendChild(headingEl);

let listItemsContainerEl = document.createElement("ul");
listItemsContainerEl.classList.add("list-items-container");
groceryListContainerEl.appendChild(listItemsContainerEl);

for (let groceryItem of groceryList) {
  let listItemEl = document.createElement("li");
  listItemEl.textContent = groceryItem;
  listItemsContainerEl.appendChild(listItemEl);
}

**cp-7-Checkbox with Label  

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
    <div id="checkboxWithLabelContainer"></div>
  </body>
</html>


js:

let checkboxWithLabelContainerEl = document.getElementById("checkboxWithLabelContainer");

checkboxWithLabelContainerEl.classList.add("text-center", "p-5");

let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "checkbox";
checkboxWithLabelContainerEl.appendChild(checkBoxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "checkbox");
labelEl.textContent = "Click Me!";
labelEl.classList.add("ml-2");
labelEl.id = "checkboxLabel";
checkboxWithLabelContainerEl.appendChild(labelEl);

**cp-7-add to cat page  
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
    <div class="container pt-4">
      <div class="row">
        <h1 class="col-12 heading">Add To Cart</h1>
        <div class="col-12 d-flex flex-row justify-content-center mt-4 mb-4">
          <input type="text" class="w-50" id="cartItemTextInput" />
          <button class="btn btn-primary ml-3" id="addBtn" onclick="onAddCartItem()">Add</button>
        </div>
        <h1 class="col-12 heading cart-items-heading">My Cart items</h1>
        <ul class="col-12 d-flex flex-column mt-4 cart-items-container" id="cartItemsContainer"></ul>
      </div>
    </div>
  </body>
</html>


css:

@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');

.heading {
  font-family: "Roboto";
  text-align: center;
}

.cart-items-heading {
  font-size: 20px;
}

.cart-items-container {
  text-align: center;
  list-style-type: none;
}

js:

let cartItemTextInputEl = document.getElementById("cartItemTextInput");
let cartItemsContainerEl = document.getElementById("cartItemsContainer");

function onAddCartItem() {

  let cartItemText = cartItemTextInputEl.value;

  let cartItemEl = document.createElement("li");
  cartItemEl.textContent = cartItemText;

  cartItemTextInputEl.value = "";
  cartItemsContainerEl.appendChild(cartItemEl);

}

**cp-8-Toggle the Strike Through 
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
    <div class="p-5" id="checkBoxWithLabelContainer"></div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.checkbox-label {
  font-family: "Roboto";
  margin-left: 5px;
}

.strike-through {
  text-decoration: line-through;
}

js:
let checkBoxWithLabelContainerEl = document.getElementById("checkBoxWithLabelContainer");
let checkboxId = "checkbox";
let labelId = "checkboxLabel";

function onCheckboxStatusChange() {
  checkboxLabelEl.classList.toggle("strike-through");
}

let checkboxInputEl = document.createElement("input");
checkboxInputEl.type = "checkbox";
checkboxInputEl.id = checkboxId;

checkboxInputEl.onclick = function() {
  onCheckboxStatusChange();
};
checkBoxWithLabelContainer.appendChild(checkboxInputEl);

let checkboxLabelEl = document.createElement("label");
checkboxLabelEl.classList.add("checkbox-label");
checkboxLabelEl.setAttribute("for", checkboxId);
checkboxLabelEl.id = labelId;
checkboxLabelEl.textContent = "I am a label";
checkBoxWithLabelContainer.appendChild(checkboxLabelEl);

**cp-8-Mark your Skills 
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
    <div class="p-5" id="skillsContainer">
      <h1 class="heading">Mark your Skills</h1>
      <ul class="skill-list-container" id="skillListContainer"></ul>
    </div>
  </body>
</html>


css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.heading {
  font-family: "Roboto";
  font-size: 24px;
}

.selected {
  color: green;
}

.skill-list-container {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.checkbox-label {
  font-family: "Roboto";
  font-size: 16px;
  margin-left: 10px;
}

js:

let skillList = [
    {
      skillName: "HTML",
      uniqueNo: 1,
    },
    {
      skillName: "CSS",
      uniqueNo: 2,
    },
    {
      skillName: "JavaScript",
      uniqueNo: 3,
    }
  ];
  
  let skillListContainerEl = document.getElementById("skillListContainer");
  
  function onMarkSkill(labelId) {
    let labelEl = document.getElementById(labelId);
    labelEl.classList.toggle("selected");
  }
  
  function createAndAppendSkill(skill) {
    let checkboxId = "checkbox" + skill.uniqueNo;
    let labelId = "label" + skill.uniqueNo;
  
    let skillEl = document.createElement("li");
    skillEl.classList.add("p-1");
    skillListContainerEl.appendChild(skillEl);
  
    let checkBoxEl = document.createElement("input");
    checkBoxEl.type = "checkbox";
    checkBoxEl.id = checkboxId;
  
    checkBoxEl.onclick = function() {
      onMarkSkill(labelId);
    };
    skillEl.appendChild(checkBoxEl);
  
    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", checkboxId);
    labelEl.classList.add("checkbox-label");
    labelEl.id = labelId;
    labelEl.textContent = skill.skillName;
    skillEl.appendChild(labelEl);
  }
  
  for (let skill of skillList) {
    createAndAppendSkill(skill);
  }
  
**cp-8-Your Ordered Items 
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
    <div class="p-5" id="orderedItemsContainer">
      <h1 class="heading">Your Ordered Items</h1>
      <ul class="item-list-container" id="itemListContainer"></ul>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.heading {
  font-family: "Roboto";
  font-size: 24px;
}

.item-list-container {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.ordered-item {
  font-family: "Roboto";
  font-size: 14px;
  padding: 10px;
}

js:
let itemList = [
    {
      itemName: "Veg Biryani",
      uniqueNo: 1,
    },
    {
      itemName: "Chicken 65",
      uniqueNo: 2,
    },
    {
      itemName: "Paratha",
      uniqueNo: 3,
    }
  ];
  let itemListContainerEl = document.getElementById("itemListContainer");
  
  function onDeleteItem(itemId) {
    let itemEl = document.getElementById(itemId);
    itemListContainerEl.removeChild(itemEl);
  }
  
  function createAndAppendItem(item) {
    let itemId = "item" + item.uniqueNo;
    let buttonId = "button" + item.uniqueNo;
  
    let itemEl = document.createElement("li");
    itemEl.id = itemId;
    itemEl.classList.add("ordered-item");
    itemEl.textContent = item.itemName;
    itemListContainerEl.appendChild(itemEl);
  
    let buttonEl = document.createElement("button");
    buttonEl.classList.add("btn", "btn-danger", "ml-3");
    buttonEl.textContent = "Cancel";
    buttonEl.id = buttonId;
  
    buttonEl.onclick = function() {
      onDeleteItem(itemId);
    };
    itemEl.appendChild(buttonEl);
  }
  
  for (let item of itemList) {
    createAndAppendItem(item);
  }

  **cp-8-Todos Application 

  html:
  <!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/5f59ca6ad3.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="todos-bg-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="todos-heading">Todos</h1>
            <h1 class="create-task-heading">
              Create <span class="create-task-heading-subpart">Task</span>
            </h1>
            <input type="text" id="todoUserInput" class="todo-user-input" placeholder="What needs to be done?"/>
            <button class="add-todo-button" id="addTodoButton">Add</button>
            <h1 class="todo-items-heading">
              My <span class="todo-items-heading-subpart">Tasks</span>
            </h1>
            <ul class="todo-items-container" id="todoItemsContainer"></ul>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.todos-bg-container {
  background-color: #f9fbfe;
  height: 100vh;
}

.todos-heading {
  text-align: center;
  font-family: "Roboto";
  font-size: 46px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
}

.create-task-heading {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
}

.create-task-heading-subpart {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.todo-items-heading {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
}

.todo-items-heading-subpart {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.todo-items-container {
  margin: 0;
  padding: 0;
}

.todo-item-container {
  margin-top: 15px;
}

.todo-user-input {
  background-color: white;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #e4e7eb;
  border-radius: 10px;
  margin-top: 10px;
  padding: 15px;
}

.add-todo-button {
  color: white;
  background-color: #4c63b6;
  font-family: "Roboto";
  font-size: 18px;
  border-width: 0;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
}

.label-container {
  background-color: #e6f6ff;
  width: 100%;
  border-style: solid;
  border-width: 5px;
  border-color: #096f92;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-radius: 4px;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  margin-top: 12px;
  margin-right: 12px;
}

.checkbox-label {
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  width: 82%;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
}

.delete-icon-container {
  text-align: right;
  width: 18%;
}

.delete-icon {
  padding: 15px;
}

.checked {
  text-decoration: line-through;
}


js:

/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList = [
  {
    text: "Learn HTML",
    uniqueNo: 1
  },
  {
    text: "Learn CSS",
    uniqueNo: 2
  },
  {
    text: "Learn JavaScript",
    uniqueNo: 3
  }
];

let todosCount = todoList.length;

function onTodoStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);

  labelElement.classList.toggle('checked');
}

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);

  todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
  let todoId = 'todo' + todo.uniqueNo;
  let checkboxId = 'checkbox' + todo.uniqueNo;
  let labelId = 'label' + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;

  inputElement.onclick = function() {
    onTodoStatusChange(checkboxId, labelId);
  };

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick = function() {
    onDeleteTodo(todoId);
  };

  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;

  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount
  };

  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}

addTodoButton.onclick = function() {
  onAddTodo();
};


**cp-9-movie reviews 

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
    <div class="container pt-4" id="movieReviewsContainer">
      <div class="row">
        <h1 class="col-12 text-center reviews-heading">Movie Reviews</h1>
        <div class="col-12 mb-4">
          <label for="titleInput" class="input-label">MOVIE TITLE</label>
          <input type="text" class="w-100 title-input" id="titleInput" placeholder="Enter a movie title"/>
          <label for="reviewTextarea" class="input-label">YOUR REVIEW</label>
          <textarea class="w-100 p-2 review-textarea" id="reviewTextarea" rows="5" placeholder="Enter your review"></textarea>
          <div class="d-flex flex-row justify-content-end mt-3">
            <button class="btn btn-primary" id="addBtn" onclick="onAddReview()">Add</button>
          </div>
        </div>
        <div class="col-12 mt-4" id="reviewsContainer"></div>
      </div>
    </div>
  </body>
</html>


css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.reviews-heading {
  color: #2d3a35;
  font-family: "Roboto";
  font-size: 36px;
  font-weight: 700;
}

.input-label {
  color: #7b8794;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 6px;
}

.title-input {
  font-family: "Roboto";
  height: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: #cbd2d9;
  border-radius: 4px;
  padding-left: 12px;
}

.review-textarea {
  color: #2d3a35;
  font-family: "Roboto";
  border-style: solid;
  border-width: 1px;
  border-color: #cbd2d9;
  border-radius: 4px;
}

.movie-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;
}


js:

let reviewsContainerEl = document.getElementById("reviewsContainer");
let titleInputEl = document.getElementById("titleInput");
let reviewTextareaEl = document.getElementById("reviewTextarea");

function onAddReview() {
  let movieTitle = titleInputEl.value;
  let movieReview = reviewTextareaEl.value;

  // Showing an alert message when movieTitle is empty
  if (movieTitle === "") {
    alert("Please enter a movie title");
    return;
  }

  // Creating and appending movieTitleEl to the reviewsContainer
  let movieTitleEl = document.createElement("h1");
  movieTitleEl.textContent = "Movie Title: " + movieTitle;
  movieTitleEl.classList.add("movie-title");
  reviewsContainerEl.appendChild(movieTitleEl);

  // Creating and appending the movieReviewEl to the reviewsContainer
  let movieReviewEl = document.createElement("p");
  movieReviewEl.textContent = "Review: " + movieReview;
  reviewsContainerEl.appendChild(movieReviewEl);

  // Creating and appending the horizontalLine to the reviewsContainer after adding movieTitleEl and movieReviewEl
  let horizontalLineEl = document.createElement("hr");
  reviewsContainerEl.appendChild(horizontalLineEl);

  // Clearing the values of titleInputEl and reviewTextareaEl
  titleInputEl.value = "";
  reviewTextareaEl.value = "";
}


**cp-9-Click Counter 
html:<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="bg-container d-flex flex-column justify-content-center" id="clickCounterContainer">
      <h1 class="counter-heading">The Button has been clicked
      <br/> <span id="counterValue" class="counter-value">0</span> times</h1>
      <div class="mt-2 text-center">
        <p class="description">Click the button to increase the count!</p>
        <button class="button btn btn-primary" id="incrementBtn" onclick="onIncrementCount()">Click Me!</button>
      </div>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-color: #f1f5f8;
  height: 100vh;
}

.counter-heading {
  text-align: center;
  color: #2d3a35;
  font-family: "Roboto";
  font-size: 50px;
  font-weight: 800;
}

.counter-value {
  color: #c20a72;
  font-weight: 900;
}

.description {
  color: #2d3a35;
  font-family: "Roboto";
}

.button {
  font-family: "Roboto";
  padding-top: 12px;
  padding-bottom: 12px;
}

js:
let counterValueEl = document.getElementById("counterValue");

// Getting the value of the clickCount from the localStorage
let clickCount = localStorage.getItem("clickCount");

// Checking if the clickCount value exists in the localStorage or not
if (clickCount === null) {
  // Assigning 0 to the textContent of the counterValueEl if it doesn't exist
  counterValueEl.textContent = 0;
} else {
  // Assigning the clickCount value to the textContent of the counterValueEl if it exists
  counterValueEl.textContent = clickCount;
}

function onIncrementCount() {
  let previousCounterValue = counterValueEl.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;

  // Updating the clickCount value in the localStorage
  localStorage.setItem("clickCount", updatedCounterValue);
  // Updating the counterValueEl textContent
  counterValueEl.textContent = updatedCounterValue;
}


***cp-10-JSON Stringify Practice 
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
    <div class="json-container" id="jsonContainer">
      <h1 class="heading">JSON Stringified Values</h1>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.json-container {
  padding: 30px;
}

.heading {
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 600;
}

.value-container {
  background-color: #f3f3f3;
  border-radius: 12px;
  margin-top: 20px;
  padding: 10px;
}

.value {
  font-family: "Roboto";
  font-size: 14px;
}

js:

let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};
let todos = [
  {
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];
let valuesToStringify = [bikes, person, todos];

let jsonContainerEl = document.getElementById("jsonContainer");

function createAndAppendValue(stringifiedValue) {
  let valueContainerEl = document.createElement("div");
  valueContainerEl.classList.add("value-container");
  jsonContainerEl.appendChild(valueContainerEl);

  let valueEl = document.createElement("span");
  valueEl.textContent = stringifiedValue;
  valueEl.classList.add("value");
  valueContainerEl.appendChild(valueEl);
}

function convertToJSONString(value) {
  let stringifiedValue = JSON.stringify(value);
  createAndAppendValue(stringifiedValue);
}

for (let value of valuesToStringify) {
  convertToJSONString(value);
}

**cp-10-Greeting Card

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
    <div class="greeting-card-container">
      <div class="text-right">
        <p class="greet" id="greetFrom"></p>
        <p class="greet" id="greetTo"></p>
      </div>
      <div class="greet-text-container d-flex flex-column justify-content-center" id="wishTextContainer">
        <h1 class="heading">Happy <br/><span class="new-year">New Year</span></h1>
        <p class="greet-text mt-4" id="greetText"></p>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.greeting-card-container {
  background-image: url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/greeting-card-1-bg.png");
  background-size: cover;
  height: 100vh;
  padding: 20px;
}

.greet {
  color: #1f2933;
  font-family: "DM Sans";
  font-weight: bold;
}

.heading {
  color: #1f2933;
  font-family: "Playfair Display";
  font-size: 50px;
  font-weight: 500;
}

.new-year {
  font-size: 75px;
}

.greet-text-container {
  text-align: center;
  height: 80vh;
}

.greet-text {
  color: #323f4b;
  font-family: "Roboto";
  font-size: 24px;
}


js:

let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsedValue = JSON.parse(greeting);

let greetTextEl = document.getElementById("greetText");
let greetFromEl = document.getElementById("greetFrom");
let greetToEl = document.getElementById("greetTo");

greetTextEl.textContent = parsedValue.greetText;
greetFromEl.textContent = "From: " + parsedValue.from;
greetToEl.textContent = "To: " + parsedValue.to;


**cp-10-todos application 
html:
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/5f59ca6ad3.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="todos-bg-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="todos-heading">Todos</h1>
            <h1 class="create-task-heading">
              Create <span class="create-task-heading-subpart">Task</span>
            </h1>
            <input type="text" id="todoUserInput" class="todo-user-input" placeholder="What needs to be done?"/>
            <button class="button" id="addTodoButton">Add</button>
            <h1 class="todo-items-heading">
              My <span class="todo-items-heading-subpart">Tasks</span>
            </h1>
            <ul class="todo-items-container" id="todoItemsContainer"></ul>
            <button class="button" id="saveTodoButton">Save</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.todos-bg-container {
  background-color: #f9fbfe;
  height: 100vh;
}

.todos-heading {
  text-align: center;
  font-family: "Roboto";
  font-size: 46px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
}

.create-task-heading {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
}

.create-task-heading-subpart {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.todo-items-heading {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
}

.todo-items-heading-subpart {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.todo-items-container {
  margin: 0;
  padding: 0;
}

.todo-item-container {
  margin-top: 15px;
}

.todo-user-input {
  background-color: white;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #e4e7eb;
  border-radius: 10px;
  margin-top: 10px;
  padding: 15px;
}

.button {
  color: white;
  background-color: #4c63b6;
  font-family: "Roboto";
  font-size: 18px;
  border-width: 0;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
}

.label-container {
  background-color: #e6f6ff;
  width: 100%;
  border-style: solid;
  border-width: 5px;
  border-color: #096f92;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-radius: 4px;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  margin-top: 12px;
  margin-right: 12px;
}

.checkbox-label {
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  width: 82%;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
}

.delete-icon-container {
  text-align: right;
  width: 18%;
}

.delete-icon {
  padding: 15px;
}

.checked {
  text-decoration: line-through;
}

js:
let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

function getTodoListFromLocalStorage() {
  let stringifiedTodoList = localStorage.getItem("todoList");
  let parsedTodoList = JSON.parse(stringifiedTodoList);
  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
}

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

saveTodoButton.onclick = function () {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

function onTodoStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");
}

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;

  inputElement.onclick = function() {
    onTodoStatusChange(checkboxId, labelId);
  };

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };

  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;

  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
  };
  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}

addTodoButton.onclick = function () {
  onAddTodo();
};

**cp-11-Splice Playground
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
    <div class="container pt-5">
      <div class="row">
        <h1 class="playground-heading col-12 text-center">Splice Playground</h1>
        <div class="col-4 mt-4 mb-4">
          <label class="input-label" for="startIndexInput">START INDEX</label>
          <input type="text" class="user-input" id="startIndexInput" placeholder="1" />
        </div>
        <div class="col-4 mt-4 mb-4">
          <label class="input-label" for="deleteCountInput">DELETE COUNT</label>
          <input type="text" class="user-input" id="deleteCountInput" placeholder="0" />
        </div>
        <div class="col-4 mt-4 mb-4">
          <label class="input-label" for="itemToAddInput">ITEM TO ADD</label>
          <input type="text" class="user-input" id="itemToAddInput" placeholder="2" />
        </div>
        <div class="col-12 text-center mb-4">
          <button class="btn btn-primary" id="spliceBtn">Splice</button>
        </div>
        <h1 class="col-12 updated-array-heading">Updated Array</h1>
        <div class="col-12 updated-array-container">
          <span class="updated-array" id="updatedArray"></span>
        </div>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.playground-heading {
  color: #2d3a35;
  font-family: "Roboto";
  font-size: 36px;
  font-weight: 700;
}

.input-label {
  text-align: center;
  color: #7b8794;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
}

.user-input {
  text-align: center;
  height: 40px;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #cbd2d9;
  border-radius: 4px;
}

.updated-array-heading {
  font-family: "Roboto";
  font-weight: 600;
  font-size: 18px;
}

.updated-array-container {
  background-color: #f3f3f3;
  padding: 20px;
}

.updated-array {
  font-family: "Bree Serif";
  font-size: 16px;
}

js:

let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInputEl = document.getElementById("startIndexInput");
let deleteCountInputEl = document.getElementById("deleteCountInput");
let itemToAddInputEl = document.getElementById("itemToAddInput");
let updatedArrayEl = document.getElementById("updatedArray");
let spliceBtnEl = document.getElementById("spliceBtn");

function convertArrtoJSONStringAndAppend() {
  const stringifiedArr = JSON.stringify(arr);
  updatedArrayEl.textContent = stringifiedArr;
}

convertArrtoJSONStringAndAppend();

spliceBtnEl.onclick = function spliceArray() {
  let startIndex = startIndexInputEl.value;
  let deleteCount = deleteCountInputEl.value;
  let itemToAdd = itemToAddInputEl.value;

  if (startIndex === "") {
    alert("Please enter start Index");
    return;
  }

  if (deleteCount === "") {
    deleteCount = 0;
  }

  if (itemToAdd === "") {
    arr.splice(parseInt(startIndex), parseInt(deleteCount));
  } else {
    arr.splice(parseInt(startIndex), parseInt(deleteCount), itemToAdd);
  }

  startIndexInputEl.value = "";
  deleteCountInputEl.value = "";
  itemToAddInputEl.value = "";
  convertArrtoJSONStringAndAppend();
};

**cp-11-Find the Index of the Numbers 
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
    <div class="container pt-5">
      <div class="row">
        <h1 class="playground-heading col-12 text-center">Find the Index of the Numbers</h1>
        <div class="col-12 mt-4 mb-4">
          <p class="default-array text-center">[ 17, 31, 77, 20, 63 ]</p>
        </div>
        <div class="col-12 d-flex flex-row justify-content-center mb-5">
          <input type="text" class="user-input w-50 pl-2" id="userInput" placeholder="Enter a number"/>
          <button class="btn btn-primary ml-3" id="findBtn" onclick="findIndexOfNumber()">Find</button>
        </div>
        <h1 class="index-of-number-heading">Index of number:</h1>
        <div class="col-12 index-of-number-container text-center">
          <span class="index-of-number" id="indexOfNumber"></span>
        </div>
      </div>
    </div>
  </body>
</html>
css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.playground-heading {
  color: #2d3a35;
  font-family: "Roboto";
  font-size: 36px;
  font-weight: 700;
}

.default-array {
  color: #2d3a35;
  font-family: "Bree Serif";
  font-size: 24px;
}

.user-input {
  height: 40px;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #cbd2d9;
  border-radius: 4px;
}

.index-of-number-heading {
  font-family: "Roboto";
  font-size: 22px;
  font-weight: 600;
}

.index-of-number-container {
  color: #795e26;
  background-color: #f3f3f3;
	padding: 20px;
	margin-top: 10px;
}

.index-of-number {
  color: #795e26;
  font-family: "Bree Serif";
  font-size: 36px;
  font-weight: 800;
}


js:

let numbers = [17, 31, 77, 20, 63];

let userInputEl = document.getElementById("userInput");
let indexOfNumberEl = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
  let number = parseInt(userInput.value);
  let itemIndex = numbers.findIndex(function(eachItem) {
    if (eachItem === number) {
      return true;
    } else {
      return false;
    }
  });

  indexOfNumberEl.textContent = itemIndex;
}

**cp-11-Todos Application 
html:
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/5f59ca6ad3.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="todos-bg-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="todos-heading">Todos</h1>
            <h1 class="create-task-heading">
              Create <span class="create-task-heading-subpart">Task</span>
            </h1>
            <input type="text" id="todoUserInput" class="todo-user-input" placeholder="What needs to be done?"/>
            <button class="button" id="addTodoButton">Add</button>
            <h1 class="todo-items-heading">
              My <span class="todo-items-heading-subpart">Tasks</span>
            </h1>
            <ul class="todo-items-container" id="todoItemsContainer"></ul>
            <button class="button" id="saveTodoButton">Save</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.todos-bg-container {
  background-color: #f9fbfe;
  height: 100vh;
}

.todos-heading {
  text-align: center;
  font-family: "Roboto";
  font-size: 46px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
}

.create-task-heading {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
}

.create-task-heading-subpart {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.todo-items-heading {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
}

.todo-items-heading-subpart {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.todo-items-container {
  margin: 0;
  padding: 0;
}

.todo-item-container {
  margin-top: 15px;
}

.todo-user-input {
  background-color: white;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #e4e7eb;
  border-radius: 10px;
  margin-top: 10px;
  padding: 15px;
}

.button {
  color: white;
  background-color: #4c63b6;
  font-family: "Roboto";
  font-size: 18px;
  border-width: 0;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
}

.label-container {
  background-color: #e6f6ff;
  width: 100%;
  border-style: solid;
  border-width: 5px;
  border-color: #096f92;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-radius: 4px;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  margin-top: 12px;
  margin-right: 12px;
}

.checkbox-label {
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  width: 82%;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
}

.delete-icon-container {
  text-align: right;
  width: 18%;
}

.delete-icon {
  padding: 15px;
}

.checked {
  text-decoration: line-through;
}

js:
let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

function getTodoListFromLocalStorage() {
  let stringifiedTodoList = localStorage.getItem("todoList");
  let parsedTodoList = JSON.parse(stringifiedTodoList);
  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
}

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

saveTodoButton.onclick = function() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;

  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
  };
  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}

addTodoButton.onclick = function() {
  onAddTodo();
};

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);

  let deleteElementIndex = todoList.findIndex(function(eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });

  todoList.splice(deleteElementIndex, 1);
}

function onTodoStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;

  inputElement.onclick = function() {
    onTodoStatusChange(checkboxId, labelId);
  };

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick = function() {
    onDeleteTodo(todoId);
  };

  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

**cp-12-remove item from local storage 
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
    <div class="p-5">
      <div class="mt-3 mb-3 text-center">
        <input type="text" id="input" />
        <button class="btn btn-primary" id="saveBtn">Save</button>
        <button class="btn btn-primary" id="clearBtn">Clear</button>
      </div>
      <h1 class="heading text-center">Click on clear to remove the text in the HTML input element.</h1>
    </div>
  </body>
</html>
 

 css:

 @import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.heading {
  font-family: "Roboto";
  font-size: 24px;
}

js:

let inputEl = document.getElementById("input");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");
let storageKey = "userInput";

let storageVal = localStorage.getItem(storageKey);

if (storageVal === null) {
  localStorage.setItem(storageKey, "Hello");
}

inputEl.value = localStorage.getItem(storageKey);

saveBtnEl.onclick = function() {
  let inputVal = inputEl.value;
  localStorage.setItem(storageKey, inputVal);
};

clearBtnEl.onclick = function() {
  inputEl.value = "";
  localStorage.removeItem(storageKey);
};

**cp-12-Local Storage Practice 
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
    <textarea rows="8" cols="55" id="msg"></textarea>
    <br />
    <button class="btn btn-primary mt-1" id="saveBtn">Save</button>
    <button class="btn btn-primary mt-1" id="clearBtn">Clear</button>
  </body>
</html> 

js:

let msgEl = document.getElementById("msg");
let saveBtnEl = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");

let storageKey = "userInput";

saveBtnEl.onclick = function() {
  let msgVal = msgEl.value;
  localStorage.setItem(storageKey, msgVal);
};

clearBtnEl.onclick = function() {
  msgEl.value = "";
  localStorage.removeItem(storageKey);
};

let storedUserInputVal = localStorage.getItem(storageKey);

if (storedUserInputVal !== null) {
  msgEl.value = storedUserInputVal;
}
else {
  msgEl.value = "";
}

**cp-12-Todos Application 
html:
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/5f59ca6ad3.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="todos-bg-container">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="todos-heading">Todos</h1>
            <h1 class="create-task-heading">
              Create <span class="create-task-heading-subpart">Task</span>
            </h1>
            <input type="text" id="todoUserInput" class="todo-user-input" placeholder="What needs to be done?"/>
            <button class="button" id="addTodoButton">Add</button>
            <h1 class="todo-items-heading">
              My <span class="todo-items-heading-subpart">Tasks</span>
            </h1>
            <ul class="todo-items-container" id="todoItemsContainer"></ul>
            <button class="button" id="saveTodoButton">Save</button>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.todos-bg-container {
  background-color: #f9fbfe;
  height: 100vh;
}

.todos-heading {
  text-align: center;
  font-family: "Roboto";
  font-size: 46px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 20px;
}

.create-task-heading {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
}

.create-task-heading-subpart {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.todo-items-heading {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 700;
}

.todo-items-heading-subpart {
  font-family: "Roboto";
  font-size: 32px;
  font-weight: 500;
}

.todo-items-container {
  margin: 0;
  padding: 0;
}

.todo-item-container {
  margin-top: 15px;
}

.todo-user-input {
  background-color: white;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-color: #e4e7eb;
  border-radius: 10px;
  margin-top: 10px;
  padding: 15px;
}

.button {
  color: white;
  background-color: #4c63b6;
  font-family: "Roboto";
  font-size: 18px;
  border-width: 0;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 50px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
}

.label-container {
  background-color: #e6f6ff;
  width: 100%;
  border-style: solid;
  border-width: 5px;
  border-color: #096f92;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-radius: 4px;
}

.checkbox-input {
  width: 20px;
  height: 20px;
  margin-top: 12px;
  margin-right: 12px;
}

.checkbox-label {
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  width: 82%;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
}

.delete-icon-container {
  text-align: right;
  width: 18%;
}

.delete-icon {
  padding: 15px;
}

.checked {
  text-decoration: line-through;
}

js:
let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");
let saveTodoButton = document.getElementById("saveTodoButton");

function getTodoListFromLocalStorage() {
  let stringifiedTodoList = localStorage.getItem("todoList");
  let parsedTodoList = JSON.parse(stringifiedTodoList);
  if (parsedTodoList === null) {
    return [];
  } else {
    return parsedTodoList;
  }
}

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

saveTodoButton.onclick = function() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;

  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
    isChecked: false
  };
  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}

addTodoButton.onclick = function() {
  onAddTodo();
};

function onTodoStatusChange(checkboxId, labelId, todoId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);
  labelElement.classList.toggle("checked");

  let todoObjectIndex = todoList.findIndex(function(eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;

    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });

  let todoObject = todoList[todoObjectIndex];

  if(todoObject.isChecked === true){
    todoObject.isChecked = false;
  } else {
    todoObject.isChecked = true;
  }

}

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(todoElement);

  let deleteElementIndex = todoList.findIndex(function(eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });

  todoList.splice(deleteElementIndex, 1);
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.checked = todo.isChecked;

  inputElement.onclick = function () {
    onTodoStatusChange(checkboxId, labelId, todoId);
  };

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  if (todo.isChecked === true) {
    labelElement.classList.add("checked");
  }
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };

  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

***cp-13-Chatbot 
html:
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/5f59ca6ad3.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="p-2">
      <h1 class="text-center chatbot-heading">Meet our Chatbot</h1>
      <img class="image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-bot-img.png"/>
      <div id="chatContainer" class="chat-container"></div>
      <div class="d-flex flex-row justify-content-end">
        <img class="image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/chatbot-boy-img.png"/>
      </div>
      <div class="d-flex flex-row justify-content-center fixed-bottom">
        <input class="user-input" id="userInput" />
        <button class="send-msg-btn" id="sendMsgBtn" onclick="sendMsgToChatbot()">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.chatbot-heading {
  color: #323f4b;
  font-family: "Roboto";
  font-size: 30px;
}

.image {
  width: 150px;
}

.chat-container {
  padding: 10px;
}

.msg-to-chatbot-container {
  text-align: right;
  margin-top: 10px;
  margin-bottom: 10px;
}

.msg-to-chatbot {
  background-color: #cbd2d9;
  font-family: "Roboto";
  font-weight: 900;
  border-radius: 16px;
  padding: 10px;
}

.msg-from-chatbot-container {
  margin-top: 10px;
  margin-bottom: 10px;
}

.msg-from-chatbot {
  color: white;
  background-color: #e57742;
  font-family: "Roboto";
  font-weight: 900;
  border-radius: 16px;
  padding: 10px;
}

.user-input {
  background-color: #cbd2d9;
  font-family: "Roboto";
  font-weight: 900;
  height: 52px;
  border-width: 0;
  border-radius: 5px;
  margin: 8px;
  padding: 15px;
}

.send-msg-btn {
  background-color: #cbd2d9;
  font-family: "Roboto";
  height: 52px;
  border-width: 0;
  border-radius: 10px;
  margin: 8px;
  padding-left: 25px;
  padding-right: 25px;
}

js:
let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToChatbot() {

  let userMsg = userInputEl.value;

  // Creating and appending the container element div
  let msgContainerEl = document.createElement("div");
  msgContainerEl.classList.add("msg-to-chatbot-container");
  chatContainerEl.appendChild(msgContainerEl);

  // Creating and appending the span element
  let userMsgEl = document.createElement("span");
  userMsgEl.textContent = userMsg;
  userMsgEl.classList.add("msg-to-chatbot");
  msgContainerEl.appendChild(userMsgEl);

  userInputEl.value = "";
  getReplyFromChatbot();

}

function getReplyFromChatbot() {

  let noOfChatbotMsgs = chatbotMsgList.length;
  let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs) - 1];

  // Creating and appending the container element div
  let msgContainerEl = document.createElement("div");
  msgContainerEl.classList.add("msg-from-chatbot-container");
  chatContainerEl.appendChild(msgContainerEl);

  // Creating and appending the span element
  let chatbotMsgEl = document.createElement("span");
  chatbotMsgEl.textContent = chatbotMsg;
  chatbotMsgEl.classList.add("msg-from-chatbot");
  msgContainerEl.appendChild(chatbotMsgEl);

}

**cp-13-Word Cloud 
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
    <div class="container word-cloud-container d-flex flex-column justify-content-between">
      <div class="row" id="wordsContainer"></div>
      <div class="row">
        <div class="col-12 text-center">
          <p class="error-msg" id="errorMsg"></p>
          <input id="userInput" type="text" class="user-input" />
          <button id="addBtn" class="add-btn ml-1" onclick="onAddWordToWordCloud()">
            Add
          </button>
        </div>
      </div>
    </div>
  </body>
</html>
 
 css:
 @import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.word-cloud-container {
  height: 100vh;
  padding: 20px;
}

.user-input {
  width: 60%;
}

.add-btn {
  color: white;
  background-color: #565b6e;
  border-width: 0;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.error-msg {
  color: #f62c3b;
  font-size: 14px;
}

js:
let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");

let errorMsg = "Please enter a word";

function createAndAddWordToWordCloud(word) {

  let randomFontSize = Math.ceil(Math.random() * 40) + "px";
  let wordEl = document.createElement("span");

  wordEl.textContent = word;
  wordEl.style.fontSize = randomFontSize;
  wordEl.classList.add("m-3");

  wordsContainerEl.appendChild(wordEl);

}

for (let word of wordCloud) {
  createAndAddWordToWordCloud(word);
}

function onAddWordToWordCloud() {

  let userEnteredWord = userInputEl.value;
  if (userEnteredWord !== "") {
    userInputEl.value = "";
    errorMsgEl.textContent = "";
    createAndAddWordToWordCloud(userEnteredWord);
  }
  else {
    errorMsgEl.textContent = errorMsg;
  }

}

**cp-14-Clear the Counter Timer 
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
    <div class="text-center pt-5">
      <h1 class="heading text-center">Clear the counter timer</h1>
      <p class="counter-value" id="counterValue"></p>
      <button class="btn btn-danger" id="clearBtn">Clear</button>
    </div>
  </body>
</html>
 

 css:

 @import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.heading {
  font-family: "Roboto";
  font-size: 24px;
}

.counter-value {
  font-size: 36px;
  font-weight: bold;
}

js:
let clearBtnEl = document.getElementById("clearBtn");
let counterValue = document.getElementById("counterValue");

let counter = 0;

let counterTimer = function() {
  counter = counter + 1;
  counterValue.textContent = counter;
};

let intervalId = setInterval(counterTimer, 1000);

clearBtnEl.onclick = function() {
  clearInterval(intervalId);
};

**cp-14-Custom Range Counter 
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
    <div class="container pt-3">
      <div class="row">
        <h1 class="col-12 heading text-center">Custom Range Counter</h1>
        <div class="col-12 text-center">
          <input
            type="text"
            placeholder="Enter From Value"
            class="w-50 mt-3 pl-2"
            id="fromUserInput"
          />
          <input
            type="text"
            placeholder="Enter To Value"
            class="w-50 mt-3 pl-2"
            id="toUserInput"
          />
          <br />
          <button class="btn btn-primary mt-4" id="startBtn" onclick="onClickStart()">
            Start
          </button>
          <p class="counter mt-4" id="counterText"></p>
        </div>
      </div>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.heading {
  color: #3e4c59;
  font-family: "Bree Serif";
  font-size: 24px;
}

.counter {
  font-size: 32px;
}


js:
let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");

function displayNumbers(fromCount, toCount) {
  let currentCount = fromCount;
  counterTextEl.textContent = currentCount;

  let timerId = setInterval(function () {
    if (currentCount < toCount) {
      currentCount += 1;
      counterTextEl.textContent = currentCount;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

function onClickStart() {
  let fromVal = fromUserInputEl.value;
  let toVal = toUserInputEl.value;

  if (fromVal === "") {
    alert("Enter the from value");
  } else if (toVal === "") {
    alert("Enter the to value");
  } else {
    let fromValInteger = parseInt(fromVal);
    let toValInteger = parseInt(toVal);

    displayNumbers(fromValInteger, toValInteger);
  }
}

**cp-14-Peace Timer 
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
    <div class="bg-container d-flex flex-column justify-content-center">
      <div class="container peace-page-container">
        <div class="row text-center pt-3">
          <h1 class="col-12 peace-page-heading">A Moment of Peace</h1>
          <p class="col-12 peace-page-description">
            Turn off your phone, put on your headphones and take a moment for
            yourself.
          </p>
          <hr class="col-10" />
          <h1 class="col-12 heading">
            How long would you like your moment to be?
          </h1>
          <ul class="col-12 buttons-list-container d-flex flex-row justify-content-center">
            <li><button class="button" id="twentySecondsBtn">20 Seconds</button></li>
            <li><button class="button" id="thirtySecondsBtn">30 Seconds</button></li>
            <li><button class="button" id="fortySecondsBtn">40 Seconds</button></li>
            <li><button class="button" id="oneMinuteBtn">1 Minute</button></li>
          </ul>
          <p class="col-12 text-center" id="timerText"></p>
        </div>
      </div>
    </div>
  </body>
</html>
css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background: linear-gradient(#189ffd, #29f39c);
  height: 100vh;
}

.peace-page-container {
  background-color: #ffffff;
  border-radius: 12px;
}

.peace-page-heading {
  color: #323f4b;
  font-family: "Roboto";
  font-size: 32px;
}

.peace-page-description {
  color: #616e7c;
  font-family: "Roboto";
}

.heading {
  color: #323f4b;
  font-family: "Bree Serif";
  font-size: 28px;
}

.buttons-list-container {
  margin-top: 10px;
  list-style-type: none;
}

.button {
  font-family: "Roboto";
  font-size: 15px;
  background-color: #05a8f2;
  color: white;
  border-width: 0;
  border-radius: 8px;
  width: 70px;
  height: 75px;
  margin: 5px;
}

js:
let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let secondsLeft = 0;
let timerCompletedText = "Your moment is complete";
let timerId;

function clearPreviousTimers() {
  clearInterval(timerId);
}

twentySecondsBtnEl.onclick = function() {
  secondsLeft = 20;
  clearPreviousTimers();
  setTimerAndShow();
};
thirtySecondsBtnEl.onclick = function() {
  secondsLeft = 30;
  clearPreviousTimers();
  setTimerAndShow();
};
fortySecondsBtnEl.onclick = function() {
  secondsLeft = 40;
  clearPreviousTimers();
  setTimerAndShow();
};
oneMinuteBtnEl.onclick = function() {
  secondsLeft = 60;
  clearPreviousTimers();
  setTimerAndShow();
};

function setTimerAndShow() {
  timerTextEl.textContent = secondsLeft + " seconds left";
  timerId = setInterval(startTimer, 1000);
}

function startTimer() {
  if (secondsLeft > 1) {
    secondsLeft = secondsLeft - 1;
    timerTextEl.textContent = secondsLeft + " seconds left";
  } else {
    clearPreviousTimers();
    timerTextEl.textContent = timerCompletedText;
  }
}

**cp-15-theme switcher 
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
    <div class="bg-container d-flex flex-column justify-content-center text-center" id="bgContainer">
      <h1 class="heading" id="heading">Dark or Light</h1>
      <div class="mt-3">
        <input type="text" class="user-input pl-2" id="themeUserInput" />
      </div>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-image: url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png");
  height: 100vh;
  background-size: cover;
}

.heading {
  color: #014d40;
  font-size: 48px;
  font-family: "Lobster";
}

.user-input {
  width: 150px;
}

js:
let bgContainerEl = document.getElementById("bgContainer");
let themeUserInputEl = document.getElementById("themeUserInput");
let headingEl = document.getElementById("heading");

let lightThemeImgUrl =
  "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkThemeImgUrl =
  "url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function changeTheme(event) {
  if (event.key === "Enter") {
    let themeUserInputVal = themeUserInputEl.value;

    if (themeUserInputVal === "Light") {
      bgContainerEl.style.backgroundImage = lightThemeImgUrl;
      headingEl.style.color = "#014d40";
    } else if (themeUserInputVal === "Dark") {
      bgContainerEl.style.backgroundImage = darkThemeImgUrl;
      headingEl.style.color = "#ffffff";
    } else {
      alert("Enter the valid theme");
    }
  }
}

themeUserInputEl.addEventListener("keydown", changeTheme);

**cp-15-Key code practice 
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
    <div class="p-5">
      <h1 class="heading mb-3">Enter Keys to display the Key codes</h1>
      <input type="text" placeholder="Enter the keys" class="pl-1" id="userInput" />
      <p class="mt-3">KeyCodes: </p>
      <ul class="key-code-list mt-3" id="keyCodeList"></ul>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Monoton&family=Open+Sans:wght@400;700&family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&family=Source+Sans+Pro:wght@400;700&family=Work+Sans:wght@400;700&display=swap");

.heading {
  color: #3e4c59;
  font-family: "Bree Serif";
  font-size: 28px;
}

.key-code-list {
  list-style-type: none;
}

js:
let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function createAndAppendKeyCode(keyCode) {
  let listItemEl = document.createElement("li");
  listItemEl.classList.add("mt-1");
  listItemEl.textContent = keyCode;
  keyCodeListEl.appendChild(listItemEl);
}

function onKeydown(event) {
  createAndAppendKeyCode(event.keyCode);
}

userInputEl.addEventListener("keydown", onKeydown);

**cp-15-Bomb Defuser 
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
    <div class="timer-container">
      <input type="text" class="user-input" id="defuser" />
      <br />
      <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/time-bomb-img.png" class="bomb-image"/>
      <p class="timer-display" id="timer">10</p>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Monoton&family=Open+Sans:wght@400;700&family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&family=Source+Sans+Pro:wght@400;700&family=Work+Sans:wght@400;700&display=swap");

.timer-container {
  text-align: center;
  background-color: #00bafc;
  height: 100vh;
  padding: 20px;
}

.timer-display {
  color: white;
  font-size: 50px;
}

.user-input {
  text-align: center;
  border-width: 0px;
  border-radius: 4px;
  padding: 6px;
}

.bomb-image {
  width: 150px;
  margin-top: 40px;
}

js:
let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

let countdown = 10;

let intervalId = setInterval(function() {
  countdown = countdown - 1;
  timerEl.textContent = countdown;

  if (countdown === 0) {
    timerEl.textContent = "BOOM";
    clearInterval(intervalId);
  }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
  let bombDefuserText = defuserEl.value;

  if (event.key === "Enter" && bombDefuserText === "defuse" && countdown !== 0) {
    timerEl.textContent = "You did it!";
    clearInterval(intervalId);
  }
});

**cp-16-HTTP Get Method Practice Page
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
    <div class="p-3 bg-container">
      <h1 class="heading mb-4">Get method practice</h1>
      <p class="request-url-text">REQUEST URL: <span class="request-url">https://gorest.co.in/public-api/users</span></p>
      <button class="mt-3 p-2 button" id="sendGetRequestBtn">Send Get Request</button>
      <hr/>
      <div class="p-2 mt-4">
        <p>Request Status</p>
        <p class="request-status" id="requestStatus"></p>
        <p class="d-none" id="loading">Loading....</p>
      </div>
      <hr/>
      <div class="p-2 mt-4">
        <p>Response Body</p>
        <p class="http-response" id="httpResponse"></p>
      </div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-image: linear-gradient(to right, #4188da, #2be3c6);
}

.heading {
  color: #ffffff;
  font-weight: bold;
  font-size: 32px;
}

.request-url-text {
  color: #ffffff;
  font-weight: bold;
}

.request-url {
  font-weight: 300;
}

.button {
  color: #ffffff;
  background-color: #0967d2;
  font-size: 14px;
  border-width: 0;
  border-radius: 4px;
}

.request-status {
  color: #ffffff;
  font-family: "Roboto";
  font-size: 24px;
}

.http-response {
  color: #ffffff;
  font-family: "Roboto";
  font-size: 14px;
}

js:

let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendGetHTTPRequest() {
  let requestUrl = "https://gorest.co.in/public-api/users";
  let options = {
    method: "GET",
  };

  loadingEl.classList.remove("d-none");
  requestStatusEl.classList.add("d-none");

  fetch(requestUrl, options)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      requestStatusEl.classList.remove("d-none");
      loadingEl.classList.add("d-none");

      let requestStatus = jsonData.code;
      let httpResponse = JSON.stringify(jsonData);
      requestStatusEl.textContent = requestStatus;
      httpResponseEl.textContent = httpResponse;
    });
}

sendGetRequestBtnEl.addEventListener("click", sendGetHTTPRequest);

**cp-16-HTTP Post Method Practice Page
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
    <div class="p-3 bg-container">
      <h1 class="heading mb-4">Post method practice</h1>
      <p class="request-url-text">REQUEST URL: <span class="request-url">https://gorest.co.in/public-api/users</span></p>
      <textarea placeholder="Enter Request Body" rows="5" class="w-100 p-2 request-body" id="requestBody"></textarea>
      <button class="mt-3 p-2 button" id="sendPostRequestBtn">Send Post Request</button>
      <hr/>
      <div class="p-2 mt-4">
        <p>Request Status</p>
        <p class="request-status" id="requestStatus"></p>
        <p class="d-none" id="loading">Loading....</p>
      </div>
      <hr/>
      <div class="p-2 mt-4">
        <p>Response Body</p>
        <p class="http-response" id="httpResponse"></p>
      </div>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-image: linear-gradient(to right, #1cc8ef, #4fa5b2);
}

.heading {
  color: #ffffff;
  font-weight: bold;
  font-size: 32px;
}

.request-url-text {
  color: #ffffff;
  font-weight: bold;
}

.request-url {
  font-weight: 300;
}

.request-body {
  background-color: #ffffff;
  border-radius: 4px;
}

.button {
  color: #ffffff;
  background-color: #0552b5;
  font-size: 14px;
  border-width: 0;
  border-radius: 4px;
}

.request-status {
  color: #ffffff;
  font-family: "Roboto";
  font-size: 24px;
}

.http-response {
  color: #ffffff;
  font-family: "Roboto";
  font-size: 14px;
}

js:
let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendPostHTTPRequest() {
  let requestUrl = "https://gorest.co.in/public-api/users";
  let requestBody = requestBodyEl.value;
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
    },
    body: requestBody
  };

  loadingEl.classList.remove("d-none");
  requestStatusEl.classList.add("d-none");

  fetch(requestUrl, options)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      requestStatusEl.classList.remove("d-none");
      loadingEl.classList.add("d-none");

      let requestStatus = jsonData.code;
      let httpResponse = JSON.stringify(jsonData);
      requestStatusEl.textContent = requestStatus;
      httpResponseEl.textContent = httpResponse;
    });
}

sendPostRequestBtnEl.addEventListener("click", sendPostHTTPRequest);

**cp-16-HTTP Put Method Practice Page
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
    <div class="p-3 bg-container">
      <h1 class="heading mb-4">Put method practice</h1>
      <p class="request-url-text">REQUEST URL: <span class="request-url">https://gorest.co.in/public-api/users</span></p>
      <input placeholder="Enter id" class="w-75 p-1 user-input" id="userInput" />
      <textarea placeholder="Enter Request Body" rows="5" class="w-100 mt-4 p-2 request-body" id="requestBody"></textarea>
      <button class="mt-3 p-2 button" id="sendPutRequestBtn">Send Put Request</button>
      <hr/>
      <div class="request-status-container p-2 mt-4">
        <p>Request Status</p>
        <p class="request-status" id="requestStatus"></p>
        <p class="d-none" id="loading">Loading....</p>
      </div>
      <hr/>
      <div class="response-body-container p-2 mt-4">
        <p>Response Body</p>
        <p class="http-response" id="httpResponse"></p>
      </div>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-image: linear-gradient(to right, #7275bf, #358ac7);
}

.heading {
  color: #ffffff;
  font-weight: bold;
  font-size: 32px;
}

.request-url-text {
  color: #ffffff;
  font-weight: bold;
}

.request-url {
  font-weight: 300;
}

.user-input {
  background-color: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: #ffffff;
}

.request-body {
  background-color: #ffffff;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: #ffffff;
}

.button {
  color: white;
  background-color: #0967d2;
  font-size: 14px;
  border-width: 0;
  border-radius: 4px;
}

.request-status-container {
  color: #ffffff;
}

.request-status {
  font-family: "Roboto";
  font-size: 24px;
}

.response-body-container {
  color: #ffffff;
}

.http-response {
  font-family: "Roboto";
  font-size: 14px;
}

js:
let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendPutHTTPRequest() {
  let userId = userInputEl.value;
  let requestUrl = "https://gorest.co.in/public-api/users/" + userId;
  let requestBody = requestBodyEl.value;
  let options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
    },
    body: requestBody
  };

  loadingEl.classList.remove("d-none");
  requestStatusEl.classList.add("d-none");

  fetch(requestUrl, options)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      requestStatusEl.classList.remove("d-none");
      loadingEl.classList.add("d-none");

      let requestStatus = jsonData.code;
      let httpResponse = JSON.stringify(jsonData);
      requestStatusEl.textContent = requestStatus;
      httpResponseEl.textContent = httpResponse;
    });
}

sendPutRequestBtnEl.addEventListener("click", sendPutHTTPRequest);


**cp-16-HTTP Delete Method Practice Page
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
    <div class="p-3 bg-container">
      <h1 class="heading mb-4">Delete method practice</h1>
      <p class="request-url-text">REQUEST URL: <span class="request-url">https://gorest.co.in/public-api/users</span></p>
      <input placeholder="Enter id" class="w-75 user-input p-1" id="userInput" />
      <br />
      <button class="mt-3 p-2 button" id="sendDeleteRequestBtn">Send Delete Request</button>
      <div class="request-status-container p-2 mt-4">
        <p>Request Status</p>
        <p class="request-status" id="requestStatus"></p>
        <p class="d-none" id="loading">Loading....</p>
      </div>
      <div class="response-body-container p-2 mt-4">
        <p>Response Body</p>
        <p class="http-response" id="httpResponse"></p>
      </div>
    </div>
  </body>
</html> 

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-image: linear-gradient(to right, #acb6e5, #86fce8);
}

.heading {
  color: #2d3a8c;
  font-weight: bold;
  font-size: 32px;
}

.request-url-text {
  color: #35469c;
  font-weight: bold;
}

.request-url {
  font-weight: 300;
}

.user-input {
  color: #35469c;
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: #7b93db;
}

.button {
  color: white;
  background-color: #4055a8;
  border-width: 0;
  border-radius: 4px;
}

.request-status-container {
  background-color: #ffffff;
  border-radius: 8px;
}

.request-status {
  color: #4055a8;
  font-family: "Roboto";
  font-size: 32px;
}

.response-body-container {
  background-color: #ffffff;
  border-radius: 8px;
}

.http-response {
  color: #4055a8;
  font-family: "Roboto";
  font-size: 14px;
}


js:

let userInputEl = document.getElementById("userInput");
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function sendDeleteHTTPRequest() {
  let userInputVal = userInputEl.value;
  let requestUrl = "https://gorest.co.in/public-api/users/" + userInputVal;
  let options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
    }
  };

  loadingEl.classList.remove("d-none");
  requestStatusEl.classList.add("d-none");

  fetch(requestUrl, options)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      requestStatusEl.classList.remove("d-none");
      loadingEl.classList.add("d-none");

      let requestStatus = jsonData.code;
      let httpResponse = JSON.stringify(jsonData);
      requestStatusEl.textContent = requestStatus;
      httpResponseEl.textContent = httpResponse;
    });
}

sendDeleteRequestBtnEl.addEventListener("click", sendDeleteHTTPRequest);


**cp-17-Random Joke Page 
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
    <div class="bg-container p-3 d-flex flex-column justify-content-center text-center">
      <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/random-joke-img.png" class="w-25 ml-auto mr-auto" />
      <p class="joke-text mt-4" id="jokeText">Click the button below to get a random Joke!</p>
      <div class="d-none mt-5 mb-5" id="spinner">
        <div class="d-flex flex-row justify-content-center">
          <div class="spinner-border" role="status">
          </div>
        </div>
      </div>
      <button class="joke-button p-1 ml-auto mr-auto mt-3" id="jokeBtn">Joke</button>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-image: linear-gradient(to right, #49c4ee, #6e87d6);
  height: 100vh;
}

.joke-text {
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
}

.joke-button {
  color: #6c8bd8;
  background-color: #ffffff;
  font-size: 24px;
  width: 120px;
  border-width: 0;
  border-radius: 4px;
}

js:

let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");
let jokeBtnEl = document.getElementById("jokeBtn");

let options = {
  method: "GET"
};

function getRandomJoke() {
  spinnerEl.classList.remove("d-none");
  jokeTextEl.classList.add("d-none");

  fetch("https://apis.ccbp.in/jokes/random", options)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      let randomJoke = jsonData.value;

      spinnerEl.classList.add("d-none");
      jokeTextEl.classList.remove("d-none");

      jokeTextEl.textContent = randomJoke;
    });
}

jokeBtnEl.addEventListener("click", getRandomJoke);

**cp-18-Countries Search Page 
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
    <div class="container pt-5">
      <div class="row">
        <h1 class="col-12 heading text-center">Find the Population of a Country</h1>
        <div class="col-12 text-center mt-3">
          <input type="search" placeholder="Search for a Country" class="form-control search-input" id="searchInput" />
        </div>
        <div class="col-12 d-none mt-5" id="spinner">
          <div class="d-flex flex-row justify-content-center">
            <div class="spinner-border" role="status"></div>
          </div>
        </div>
      </div>
      <div class="row result-countries" id="resultCountries"></div>
    </div>
  </body>
</html>

css:

@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.heading {
  color: #3e4c59;
  font-size: 28px;
  font-weight: bold;
}

.search-input {
  height: 50px;
}

.result-countries {
  margin-top: 18px;
}

.country-card {
  background-color: #ebf2fc;
  border-radius: 24px;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 15px;
}

.country-flag {
  width: 70px;
  height: 70px;
}

.country-name {
  color: #183b56;
  font-family: "Roboto";
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
}

.country-population {
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 300;
}


js:

let searchInputEl = document.getElementById("searchInput");
let spinnerEl = document.getElementById("spinner");
let resultCountriesEl = document.getElementById("resultCountries");

let searchInputVal = "";
let countriesList = [];

function createAndAppendCountry(country) {
  // Creating and appending countryEl to the resultCountriesEl
  let countryEl = document.createElement("div");
  countryEl.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
  resultCountriesEl.appendChild(countryEl);

  // Creating and appending countryFlagEl to the countryEl
  let countryFlagEl = document.createElement("img");
  countryFlagEl.src = country.flag;
  countryFlagEl.classList.add("country-flag", "mt-auto", "mb-auto");
  countryEl.appendChild(countryFlagEl);

  // Creating and appending countryInfoEl to the countryEl
  let countryInfoEl = document.createElement("div");
  countryInfoEl.classList.add("d-flex", "flex-column", "ml-4");
  countryEl.appendChild(countryInfoEl);

  // Creating and appending countryNameEl to the countryInfoEl
  let countryNameEl = document.createElement("p");
  countryNameEl.textContent = country.name;
  countryNameEl.classList.add("country-name");
  countryInfoEl.appendChild(countryNameEl);

  // Creating and appending countryPopulationEl to the countryInfoEl
  let countryPopulationEl = document.createElement("p");
  countryPopulationEl.textContent = country.population;
  countryPopulationEl.classList.add("country-population");
  countryInfoEl.appendChild(countryPopulationEl);
}

function displaySearchResults() {
  resultCountriesEl.textContent = "";
  for (let country of countriesList) {
    let countryName = country.name;
    // If the searchInputVal includes in the countryName, creating and appending it to the resultCountriesEl
    if (countryName.includes(searchInputVal)) {
      createAndAppendCountry(country);
    }
  }
}

function getCountries() {
  let url = "https://apis.ccbp.in/countries-data";
  let options = {
    method: "GET",
  };

  spinnerEl.classList.remove("d-none");
  //Making an HTTP request (GET method) using fetch
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      spinnerEl.classList.add("d-none");
      countriesList = jsonData;
      displaySearchResults();
    });
}

function onChangeSearchInput(event) {
  searchInputVal = event.target.value;
   displaySearchResults();
} 

getCountries();
searchInputEl.addEventListener("keyup", onChangeSearchInput);

**cp-18-Know Fact About the Number 
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
    <div class="p-2 bg-container d-flex flex-column justify-content-center text-center">
      <h1 class="heading">Enter a number to know interesting facts about the number</h1>
      <input type="search" class="form-control user-input ml-auto mr-auto mt-4" placeholder="Enter a Number" id="userInput" />
      <div class="d-none spinner" id="spinner">
        <div class="d-flex flex-row justify-content-center mt-4">
          <div class="spinner-border" role="status"></div>
        </div>
      </div>
      <p class="fact-text mt-4" id="fact">0 is the atomic number of the theoretical element tetraneutron.</p>
    </div>
  </body>
</html>

css:
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap");

.bg-container {
  background-image: url("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/numbers-fact-bg.png");
  background-size: cover;
  height: 100vh;
}

.heading {
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
}

.user-input {
  width: 320px;
}

.spinner {
  color: #ffffff;
}

.fact-text {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
}


js:
let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");

function getFactOfEnteredNumber(event) {
  if (event.key === "Enter") {
    let userInputVal = userInputEl.value;

    if (userInputVal === "") {
      alert("Enter a Number");
      return;
    }

    let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
    let options = {
      method: "GET"
    };

    spinnerEl.classList.remove("d-none");
    factEl.classList.add("d-none");

    fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        factEl.classList.remove("d-none");
        spinnerEl.classList.add("d-none");

        let { fact } = jsonData;
        factEl.textContent = fact;
      });
  }
}

userInputEl.addEventListener("keyup", getFactOfEnteredNumber);






  