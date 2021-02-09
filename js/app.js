const data_container = document.getElementById('foods');
const searchBtn = document.getElementById('searchBtn');
const warning = document.getElementById('warning');

searchBtn.addEventListener('click', function(){
    const keyword = document.getElementById('keyword').value;
    document.getElementById('keyword').value = '';
    // console.log("clicked");
    if (keyword === '') {
        warning.style.display = 'block';
    }else{
        getFoodDetails(keyword);
        warning.style.display = 'none';
    }
})

function getFoodDetails(key){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
}