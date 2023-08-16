import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const FormItemsView =( { handler })=>{

    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    })

      const { product, price, quantity } = formItemsState;

    //   useEffect(()=> {
    //     //console.log("el precio cambio")
    //   }, [price]);
    
    //   useEffect(()=> {
    //     //console.log("el form cambio")
    //   }, [formItemsState]);

      const onInputChange = ({ target: { name, value } }) => {
        setFormItemsState({
          ...formItemsState,
          [name]: value,
        });
      };

      const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();
    
        if (product.trim().length <= 1) {
          // con el trim valido que no haya espacios
          alert("Ud no ingreso un valor válido");
          return;
        }
        if (price.trim().length <= 1) {
          alert("Ud no ingreso un valor válido");
          return;
        }
        if (isNaN(price.trim())) {
          alert("Ud no ingreso un valor válido");
          return;
        }
        if (quantity.trim().length < 1) {
          alert("Ud no ingreso un valor válido");
          return;
        }
       
        handler(formItemsState);

        setFormItemsState({
          product: "",
          price: "",
          quantity: "",
        });

      };
    return(
        <>
        <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
              <input
                type="text"
                name="product"
                placeholder="Producto"
                value={product}
                className="form-control m-3"
                onChange={onInputChange}
              />
              <input
                type="text"
                name="price"
                placeholder="Precio"
                value={price}
                className="form-control m-3"
                onChange={event => onInputChange(event)}
              />
              <input
                type="text"
                name="quantity"
                placeholder="Cantidad"
                value={quantity}
                className="form-control m-3"
                onChange={event => onInputChange(event)}
              />
              <button type="submit" className="btn btn-primary m-3">
                Guardar Producto
              </button>
            </form>
        </>
    )

}