let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
let numb = 2;

btn.addEventListener("click", function() {
  numb += 2;
  func1();
});


fetch("https://fakestoreapi.com/products")
.then(resp=>resp.json())
.then(data=>{

    let newobj = "" ;

    data.slice(0,numb).forEach((item) => {
        
        let text = item.description;
        newobj += ` <div class="box">
        <div class="img">
            <img src=${item.image}
                alt="">
        </div>
        <div class="info">
            <h1>${item.title}</h1>
            <p>${text.slice(0,30)}</p>
            <p>${item.price}</p>
        </div> 
    </div> `
  
    }); 

    container.innerHTML =newobj
    /* console.log(data) */
})


function func1() {
  fetch("https://fakestoreapi.com/products")
  .then(resp=>resp.json())
  .then(data=>{

      let newobj = "" ;

      data.slice(0,numb).forEach((item) => {
          
          let text = item.description;
          newobj += ` <div class="box">
          <div class="img">
              <img src=${item.image}
                  alt="">
          </div>
          <div class="info">
              <h1>${item.title}</h1>
              <p>${text.slice(0,30)}</p>
              <p>${item.price}</p>
          </div> 
      </div> `
    
      }); 

      container.innerHTML =newobj
      /* console.log(data) */
  })
}
