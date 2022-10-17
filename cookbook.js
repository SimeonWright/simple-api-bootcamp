document.querySelector('button').addEventListener('click', GetNasa)

function GetNasa(){
    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${choice}`

    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.meals[0].strMeal
        document.querySelector('img').src = data.meals[0].strMealThumb
    })

    .catch(err => {
        console.log('error ${err}')
        
    });
    
} 

