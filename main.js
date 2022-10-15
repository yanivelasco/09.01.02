const url = "https://yanivelasco.com/bikes/wp-json/wp/v2/bike?_embed";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));


function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);


  clone.querySelector("h2").textContent = product.brand;
  clone.querySelector("h1").textContent = product.title.rendered;
  clone.querySelector("p.price").textContent = product.price;
  clone.querySelector("p.colours").textContent = product.colour;
  clone.querySelector("p.stock").textContent = product.stock;
  clone.querySelector("img").src =
    product._embedded[
      "wp:featuredmedia"
    ][0].media_details.sizes.medium.source_url;

  const parent = document.querySelector("main");

  parent.appendChild(clone);
}
