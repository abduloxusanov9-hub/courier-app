const orders = [
  {
    id: 1,
    name: "Buyurtma #1",
    address: "Toshkent, Chilonzor 5",
    status: "Yangi"
  },
  {
    id: 2,
    name: "Buyurtma #2",
    address: "Samarqand, Registon ko‘chasi",
    status: "Yetkazilmoqda"
  },
  {
    id: 3,
    name: "Buyurtma #3",
    address: "Andijon, Bobur maydoni",
    status: "Yakunlangan"
  }
];

const container = document.getElementById("orders-container");

orders.forEach(order => {
  const card = document.createElement("div");
  card.className = "order-card";
  card.innerHTML = `
    <h2>${order.name}</h2>
    <p><strong>Manzil:</strong> ${order.address}</p>
    <p><strong>Status:</strong> ${order.status}</p>
    <button>Ko‘proq ma’lumot</button>
  `;
  container.appendChild(card);
});
