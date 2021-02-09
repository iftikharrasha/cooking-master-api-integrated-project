const data_container = document.getElementById('foods');
const searchBtn = document.getElementById('searchBtn');
const warning = document.getElementById('warning');
const details = document.getElementById('details');

searchBtn.addEventListener('click', function(){
    const keyword = document.getElementById('keyword').value;
    document.getElementById('keyword').value = '';
    data_container.innerHTML = '';
    // console.log("clicked");
    if (keyword === '') {
        warning.style.display = 'block';
        details.style.display = 'none';
    }else{
        getFoodDetails(keyword);
        warning.style.display = 'none';
        details.style.display = 'none';
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
                foodDiv.className = 'col-lg-3 col-md-4 pb-4';
                const foodInfo = `
                    <div  onclick="foodDetails('${food.idMeal}')" class="border rounded text-center h-100">
                    <img class="img-fluid rounded-top" src="${food.strMealThumb}" alt="">
                    <h2 class="h2-text py-4 px-2 mb-0">${food.strMeal}</h2>
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


const foodDetails = name => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data_container.style.display = 'none';

        
    })
}

//just showing some foods at window load so it does not look void
window.onload = function () {
    warning.style.display = 'none';
    details.style.display = 'none';
    getFoodDetails('a');
};




/* <div id="foodsDetails">
        <img class="img-fluid rounded mb-4" src="" alt="">
        <h4>Pizza Express Margherita</h4>
        <h5 class="pt-3 pb-2">Ingredients</h5>
        <ul class="list-unstyled mb-0">
            <li><i class="fa fa-check"></i>Water - 150ml</li>
        </ul>
    </div> */