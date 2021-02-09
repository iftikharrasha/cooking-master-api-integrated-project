const data_container = document.getElementById('foods');
const searchBtn = document.getElementById('searchBtn');
const warning = document.getElementById('warning');

searchBtn.addEventListener('click', function(){
    const keyword = document.getElementById('keyword').value;
    document.getElementById('keyword').value = '';
    data_container.innerHTML = '';
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
        // console.log(data);
        const foods = data.meals;
        // console.log(foods);
        const foodsDiv = document.getElementById('foods');
        if(foods != null){
            foods.map(food => {
                const foodDiv = document.createElement('div');
                foodDiv.className = 'col-md-3 pb-4';
                const foodInfo = `
                    <div class="border rounded text-center h-100">
                    <img class="img-fluid rounded-top" src="" alt="">
                    <h2 class="h2 py-4 px-2 mb-0"></h2>
                    </div>
                `
                foodDiv.innerHTML = foodInfo;
                foodsDiv.appendChild(foodDiv);
            })
        }else{
            warning.style.display = 'block';
        }
    })
}

//just showing some foods at window load so it does not look void
window.onload = function () {
    warning.style.display = 'none';
    getFoodDetails('fish');
};