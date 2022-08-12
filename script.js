var productList = [
    {
        name : "Bedside Tables",
        price : 4999
    },
    {
        name : "Coffee Tables",
        price : 4999
    },
    {
        name : "Rocking Chairs",
        price : 2000
    },
    {
        name : "Velvet Sofa",
        price : 15000
    },
    {
        name : "Taro Bed side Table",
        price : 3100
    },
    {
        name : "Sofa",
        price : 10000
    }
];

productListGenerator(productList);
function productListGenerator(productList){
    let productParentEle = document.getElementById("cartList");
    productParentEle.innerHTML = "";
    let productDetail = "";
    let index = 1;
    productList.forEach((product) =>{
        productDetail += constructProductDetails(product,index);
        index++;
    });
    productParentEle.insertAdjacentHTML("afterbegin", productDetail);
    document.querySelectorAll(".addCart").forEach((element) =>{
        element.addEventListener("click",addProductToCart);
    })
}

function constructProductDetails(product,index){
    let divEle = "<div class='box'><div>"+product.name+"</div><div class='rupee'>&#X20B9; "+product.price+"</div><div class='addCart' id='cart"+index+"'>Add to Cart</div></div>";
    return divEle;
}

function addProductToCart(event){
    let cartParentEle = document.querySelector(".shoppingList");
    let product = event.target.parentElement.firstChild.textContent;
    let price = event.target.previousElementSibling.textContent.split(" ")[1];
    let divEle = constructCartDetails(product,price);
    cartParentEle.insertAdjacentHTML("beforeend",divEle);
    calculateTotalPrice(price);
}

function constructCartDetails(productName ,price){
    let divEle = "<div class='listHeader'><div>"+productName+"</div><div>"+price+"</div></div>";
    return divEle;
}

function calculateTotalPrice(amount){
    let totalText = document.getElementById("total").textContent;
    let total;
    if(totalText){
        total = parseInt(totalText)+parseInt(amount);
    }
    else{
        total = amount;
    }
    document.getElementById("total").textContent = total;  
}

document.getElementById("searchBtn").addEventListener("click",filterProductList);

document.getElementById("searchInput").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("searchBtn").click();
      }
});

document.getElementById("allList").addEventListener("click",function(){
    productListGenerator(productList);
});

function filterProductList(){
    console.log("jkhgfdghj")
    let searchProduct = document.getElementById("searchInput").value;
    if(searchProduct){
        let filterProduct = productList.filter((product) =>{
            return product.name.toLocaleLowerCase()===searchProduct.toLocaleLowerCase();
        });
       if(filterProduct.length>=1){
            productListGenerator(filterProduct);
        }
        else{
            alert("This item is not available");
            productListGenerator(productList);
        }
    }
    else{
        alert("Enter the Product Name")
        productListGenerator(productList);
    }
}



