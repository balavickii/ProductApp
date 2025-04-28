
let container=document.querySelector(".container");
// console.log(container)

//seach feature

let search = async(inputVal)=>{
    try {
        clear()
       let inputVal = document.getElementById("in").value;
        console.log(inputVal);

        let data = await fetch("https://fakestoreapi.com/products");
      let ogdata= await data.json()
    

    ogdata.map((data)=>{
        if(data.category==inputVal){
            let div = document.createElement("div");
            div.className="cart";
            div.innerHTML=`<img src= ${data.image}> 
                              <h2>${data.title.slice(0,10)}</h2>
                             <h3>price : $ ${data.price}</h3>
                             <h4>ratings : ${data.rating.rate} ⭐</h4>`
            container.append(div)
            
        }
    
    })
        
        
   


    } catch (error) {
        console.log(error)
    }
}
let clear = ()=>{
    // let div = document.createElement("div");
    
    // console.log(div)
    
    container.innerHTML=` `;
    // container.append(div)
}
let fetchdata= async()=>{

    try {
        let data = await fetch("https://fakestoreapi.com/products");
    // console.log(data) response
      let ogdata= await data.json()
    // console.log(ogdata) //og data
    //  console.log(ogdata.title)

    ogdata.map((data)=>{
        let div = document.createElement("div");
        console.log(div)
        div.className="cart";
        div.innerHTML=`<img src= ${data.image}> 
                          <h2>${data.title.slice(0,10)}</h2>
                         <h3>price : $ ${data.price}</h3>
                         <h4>ratings : ${data.rating.rate} ⭐</h4>`
        container.append(div)
       
    })
    


    } catch (error) {
        console.log(error)
    }
    
}

fetchdata()