const accesskey = V42W2lALWH4YS0Y9gpfdq7F6QWiQEY_7y0fU9oQMk_U

const searchForm = document.getElementById("search_form")
const searchBox = document.getElementById("search_box")
const searchresult = document.getElementById("search_result")
const showMore = document.getElementById("show_more_btn")

let keyword = ""
let page = 1

async function searchImage(){
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;

    const respons = await fetch(url);
    const data = await respons.json();

    console.log(data);

}
searchForm.addEventListener("submit" , (e) =>{
    e.preventDefault();
    page = 1;
    searchImage();
})