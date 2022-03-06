




var myData = ``

genCat()
 function genCat()
 {
    var myHttp = new XMLHttpRequest()
    
    myHttp.open("GET",`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    myHttp.send()
    
    myHttp.addEventListener("readystatechange",function(){
        if(myHttp.readyState == 4)
        {
            myData = JSON.parse(myHttp.response)
            myData= myData.meals     
            
            console.log(myData[0].strCategory)
            navedit()
            hamada()
    
            
            
        }
    })

 }

 function navedit()
 {
     var hasala = ``
     for(var i = 0 ; i<myData.length ; i++)
     {
         hasala += `
         <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">${myData[i].strCategory}</a>
          </li>
         
         `
     }
     document.querySelector(".navbar-nav").innerHTML = hasala
 }


ajaz("Dessert")
function ajaz(dynamicMeal)
{
    var myHttp = new XMLHttpRequest()
    
    myHttp.open("GET",`https://www.themealdb.com/api/json/v1/1/filter.php?c=${dynamicMeal}`)
    myHttp.send()
    
    myHttp.addEventListener("readystatechange",function(){
        if(myHttp.readyState == 4)
        {
            myData = JSON.parse(myHttp.response)
            myData= myData.meals      
            displayMeals()
    
            
            
        }
    })

}

function hamada()
{
  var allMeals =  document.querySelectorAll(".nav-link")

  

  for(var i = 0 ;i<allMeals.length ; i++ )
  {
      allMeals[i].addEventListener("click",function(eInfo)
      {
      var mealNames = eInfo.target.innerHTML
      ajaz(mealNames)
      

      })

  }
  
}






function displayMeals()
{
    var concat = ``
    for(var i =0 ; i < myData.length ; i++)
    {
        
        concat += `
        <div class="col-md-3">
        <div>

        <a href="${myData[i].strMealThumb}">
        <img class="img-fluid" src="${myData[i].strMealThumb}" alt="">
    </a>
            
            <h2>${myData[i].strMeal}</h2>
            
        </div>

    </div>
    
    
        
        `


    }
    document.querySelector(".row").innerHTML = concat
}

