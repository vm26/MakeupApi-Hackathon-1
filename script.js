
document.body.innerHTML=`<div class="header">
<h4 id="title">Makeup API</h4>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBhg9HFW2YBD0-OLoHiEWvCmCQPZfqpls9w&usqp=CAU" width="75px" height="75px">
</div>
<div id="resultarea"></div>`;
const url="http://makeup-api.herokuapp.com/api/v1/products.json";

async function getBrands(){
    try{
        resultarea.innerHTML=`<h2 class="header1">Brands</h2>`;        
        let data=await fetch(url);
        let data1=await data.json();        
        let arr=[];        
        data1.forEach(ele=>{
        arr.push(ele.brand);
        });
        let array=[...new Set(arr)].sort();
        array.forEach(ele=>{
            resultarea.innerHTML+=`<h2 class="brands" onclick="getData('${ele}')">${ele}</h2><br>`;
        });   
    }
    catch(error){
        resultarea.innerHTML+=`<div class="catch">There is some problem in loading the brands...Please try again laterr<h2>`;
    }
}
getBrands();

async function getData(ele){   
    resultarea.innerHTML=`<button id="btn" onclick="getBrands()">Back</button>`;
    try{       
        let data=await fetch(url+`?brand=${ele}`);
        let data1=await data.json();
        data1.forEach(element=>{
            resultarea.innerHTML+=`            
            <div class="container">
            <h3>Brand :${element.brand}</h3>
            <h3>Name :${element.name}</h3>
            <h3>Price :${element.price}</h3>
            <h3>Image :${element.image_link}</h3>
            <img src="${element.image_link} alt="image" width="100" heigth="100">
            <h3>Product Link :${element.product_link}</h3>
            <h3>Description :${element.description}</h3>
            </div>
            `;
        }
        )      
    }
    catch(error){     
    resultarea.innerHTML+=`<div class="catch">There is some problem...Please try again later<h2>`;
    }    
}

