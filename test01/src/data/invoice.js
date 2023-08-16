export const invoice = {
  id: 10,
  name: "Componenentes PC",
  client: {
    name: "Carlos",
    lastname: "Pereyra",
    address: {
      country: "Argentina",
      city: "Buenos Aires",
      street: "Av. Belgrano",
      number: 3206
    },
  },
  company: {
    name: "Bruselas",
    fiscalNumber: 2578646,
  },
  items: [
    {
      id: 1,
      product: "Intel I7",
      price: 242000,
      quantity: 1
    },
    {
      id: 2,
      product: "Corsair Keyboard Mecanico",
      price: 116000,
      quantity: 1
    },
    {
      id: 3,
      product: "Monitor Asus",
      price: 220000,
      quantity: 1
    },
  ],
};
