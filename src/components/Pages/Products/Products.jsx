import React, { useEffect, useState } from 'react';
import { Main } from '../../Layouts/Main/Main';
import { Header } from '../../Layouts/Header/Header';
import { Cards } from '../../Cards/Cards';

export const Products = () => {
  const URL = 'https://fakestoreapi.com/products';
  const [ContentProduct, setContentProduct] = useState([]);
  const [Counter, setCounter] = useState(21);
  const [SecondContentProduct, setSecondContentProduct] = useState([]);
  
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("arrayProduct")) || [];

    if (storedProducts.length > 0) {
      setContentProduct(storedProducts);
      setSecondContentProduct(storedProducts);
    } else {
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          setContentProduct(data);
          setSecondContentProduct(data);
          localStorage.setItem("arrayProduct", JSON.stringify(data));
        })
        .catch(error => console.error(error));
    }
  }, []);

  const generateId = () => {
    setCounter(prevCounter => prevCounter + 1);
    return Counter + 1;
  };

  const OnSubmitForms = (event) => {
    event.preventDefault();

    const newProduct = {
      id: generateId(),
      title: event.target.Title.value,
      price: event.target.Price.value,
      description: event.target.Description.value,
      image: event.target.Image.value,
      category: event.target.Category.value,
    };

    let ContentArrayProduct = JSON.parse(localStorage.getItem("arrayProduct")) || [];
    let index = ContentArrayProduct.findIndex(obj => obj.id === newProduct.id);

    if (index === -1) {
      ContentArrayProduct.push(newProduct);
      localStorage.setItem("arrayProduct", JSON.stringify(ContentArrayProduct));
      setContentProduct(ContentArrayProduct); 
      setSecondContentProduct(ContentArrayProduct);
    }
  };

  const HandleFilter = (event) => {
    const ContentEvent = event.target.value;
    let filteredProducts = [];

    if (ContentEvent === 'mens_clothing') {
      filteredProducts = ContentProduct.filter(obj => obj.category === "men's clothing");
    } else if (ContentEvent === 'jewelery') {
      filteredProducts = ContentProduct.filter(obj => obj.category === 'jewelery');
    } else if (ContentEvent === 'electronics') {
      filteredProducts = ContentProduct.filter(obj => obj.category === 'electronics');
    } else if (ContentEvent === 'womens_clothing') {
      filteredProducts = ContentProduct.filter(obj => obj.category === "women's clothing");
    } else {
      filteredProducts = ContentProduct;
    }

    setSecondContentProduct(filteredProducts);
    console.log(filteredProducts);
  };

  return (
    <>
      <Header>
        <form onSubmit={OnSubmitForms}>
          <ul>
            <li>
              <label htmlFor="Title">Ingrese el nombre</label>
              <input type="text" name='Title' id='Title' required />
            </li>
            <li>
              <label htmlFor="Description">Ingrese la descripcion</label>
              <input type="text" name='Description' id='Description' required />
            </li>
            <li>
              <label htmlFor="Category">Seleccione la categoria</label>
              <select name="Category" id="Category" required>
                <option value="optionSelect">Seleccione uno</option>
                <option value="mens_clothing">men's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                <option value="womens_clothing">women's clothing</option>
              </select>
            </li>
            <li>
              <label htmlFor="Price">Ingrese el precio del producto</label>
              <input type="text" name='Price' id='Price' required />
            </li>
            <li>
              <label htmlFor="Image">Ingrese el URL de la imagen</label>
              <input type="url" name='Image' id='Image' required />
            </li>
          </ul>
          <button type="submit">Enviar</button>
        </form>
      </Header>
      <Main>
        <div>
          <label htmlFor="Filter">Filtro</label>
          <select name="Filter" id="Filter" onChange={HandleFilter}>
            <option value="">Seleccione uno</option>
            <option value="mens_clothing">men's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
            <option value="womens_clothing">women's clothing</option>
          </select>
        </div>

        {SecondContentProduct.map(ItemOfData => (
          <Cards
            key={ItemOfData.id}
            img={ItemOfData.image}
            title={ItemOfData.title}
            description={ItemOfData.description}
            price={ItemOfData.price}
          />
        ))}
      </Main>
    </>
  );
}
