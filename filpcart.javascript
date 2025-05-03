const products = [
  { name: "iPhone 15", price: "₹79,999" },
  { name: "Samsung Galaxy S23", price: "₹64,999" },
  { name: "Sony Headphones", price: "₹7,499" },
  { name: "Dell Laptop", price: "₹49,999" },
  { name: "Smart Watch", price: "₹2,999" },
  { name: "Bluetooth Speaker", price: "₹1,499" }
];
 
const grid = document.getElementById("productGrid");
 
products.forEach(p => {
  const div = document.createElement("div");
  div.className = "product";
div.innerHTML = `
${p.name}</h3><p>${p.price}</p>`;
  grid.appendChild(div);
});
