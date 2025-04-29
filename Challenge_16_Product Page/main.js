// Write your JavaScript code here

$(document).ready(function () {
  var productIndex = 0;
  var products = [
      {
          "itemCategory": "Bag",
          "itemName": "Rotterdam Blick",
          "itemDesc": "This trapezium bag measures 31 x 15 x 30 cm and has 2 exterior and 3 interiorpockets.It's made of faux leather, has etched patterns and is fluorescent red. Wear it with jeans and a daiquiri.",
          "previousPrice": "£99.95",
          "currentPrice": "£79.95",
          "colors": ["yellow", "orange", "black"]
      },
      {
          "itemCategory": "Shoe",
          "itemName": "Shoe xyz",
          "itemDesc": "Ultra comfortable shoe for running. Runners can use it in any surface, designed for every day use. Best quality foam.",
          "previousPrice": "£49.60",
          "currentPrice": "£30.05",
          "colors": ["blue", "pink", "green"]
      },
      {
          "itemCategory": "T-Shirt",
          "itemName": "Daily Shirt",
          "itemDesc": "Simple and unique design. T-shirt that does not get old. Can be used in formal events and very durable.",
          "previousPrice": "£20.95",
          "currentPrice": "£18.95",
          "colors": ["white", "black", "pink"]
      }
  ];
  function updateProduct() {
      var productInfoSet = products[productIndex];
      $("#itemCategory").text(productInfoSet.itemCategory);
      $("#itemName").text(productInfoSet.itemName);
      $("#itemDesc").text(productInfoSet.itemDesc);
      $("#previousPrice").text(productInfoSet.previousPrice);
      $("#currentPrice").text(productInfoSet.currentPrice);
      $("#productImg").attr("src","https://picsum.photos/seed/picsum/300/200")
      // If you want to update colors dynamically
     
      // Colors as circle buttons
      var colorsHtml = '';
      productInfoSet.colors.forEach(function (color) {
          colorsHtml += '<div class="color-circle" style="background-color:' + color + ';"></div>';
      });
      $("#colors").html(colorsHtml);
  };
  updateProduct();

  $("#prevItem").on("click", function () {
      productIndex = productIndex === 0 ? products.length - 1 : productIndex - 1;
      updateProduct();
  });

  $("#nextItem").on("click", function () {
      productIndex = productIndex === products.length - 1 ? 0 : productIndex + 1; 
      updateProduct();
  })
})