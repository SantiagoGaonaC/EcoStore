let tienda = document.getElementById("tienda");

let data_json = JSON.parse(localStorage.getItem("../js/data.js")) || [];

let data_tienda = [
    {
      id:"1",
      nombre:"Aceite esencial de Clavo",
      info_1:"12ML",
      info_2:"Sale a: 665,83 €/L",
      precio:"7,99 €",
      img:"../public/img/src-eco-store/1.jpg",
    },
    {
      id: "ioytrhndcv",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img: "images/img-2.jpg",
    },
  ];

let generar_tienda = () => {
  return (tienda.innerHTML = data_tienda
    .map((x) => {
      let {id, nombre, info_1, info_2, precio, img} = x;
      let buscar = data_json.find((x) => x.id === id) || [];
      return`
    <div class="card text-center item" id=product-id${id} style="width: 18rem;">
        <img src=${img} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${info_1}</p>
            <p class="card-text">${info_2}</p>
            <p class="card-text">${precio}</p>
            <a href="#" class="btn btn-primary text-center align-middle"><i class="fa-solid fa-cart-plus"></i> Añadir a la cesta</a>
        </div>
    </div>
    `;
    })
    .join(""));
};

generar_tienda();

