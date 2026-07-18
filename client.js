const response = await fetch("http://localhost:3000/product", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Laptop",
    price: 4999.99,
    quantity: 10,
  }),
});

const data = await response;

// console.log(data);
