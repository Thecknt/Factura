import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientDetail } from "./components/ClientDetail";
import { CompanyDetail } from "./components/CompanyDetail";
import { InvoiceDetail } from "./components/InvoiceDetail";
import { ListItemsDetail } from "./components/ListItemsDetail";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";

const invoiceInitial = {
  id: 0,
  name: "",
  client: {
    name: "",
    lastname: "",
    address: {
      country: "",
      city: "",
      street: "",
      number: 0,
    },
  },
  company: {
    name: "",
    fiscalNumber: 0,
  },
  items: [],
};

export const InvoiceApp = () => {

  const [activeForm, setActiveForm]= useState(false);

  const [total, setTotal] = useState(0);

  const [counter, setCounter] = useState(4); //aca vamos a inicializar el id en 4, ya que hasta 3
  //ya lo tengo declarado en in invoice

  const [invoice, setInvoice] = useState(invoiceInitial);

  const [items, setItems] = useState([]);
  //useEstate para pasarle la data
  //useEffect para definir el ciclo de vida

  const { id, name, client, company } = getInvoice(); //llamarlo asi no es buena practica, la idea es que se llame una
  //sola vez no cada vez que llamo al componente.

  useEffect(() => {
    const data = getInvoice(); //declaro esta variable asi la factura es
    //manejada por estado de react
    //simulo un backend, un API, asi lo ejecuto una sola vez
    console.log(invoice);
    setInvoice(data);
    setItems(data.items);
  }, []); //como segundo parametro le paso un array vacio de los items)

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  const handlerAddItems = ({ product, price, quantity }) => {
    setItems([
      ...items,
      {
        key: counter,
        product: product.trim(), //quito los espacios a la izquierda o derecha.
        price: +price.trim(), //se puede anteponer un mas para convertirlo a numero
        quantity: parseInt(quantity.trim(), 10), //o bien con el parseInt en base a 10 que es lo que normalmente usamos
      },
    ]);

    setCounter(counter + 1);
  };

  const handlerDeleteItem = (id)=>{
setItems(items.filter(item => item.id !== id))

  }

  const onActiveForm = ()=>{
    setActiveForm(!activeForm);
  }

  return (
    <>
      <div className="container">
        <div className="card my-5">
          <div className="card-header">
            <h1>Ejemplo Factura</h1>
          </div>
          <div className="card-body">
            <InvoiceDetail id={id} name={name} />
            <div className="row my-5">
              <div className="col">
                <ClientDetail title="Datos del Cliente" client={client} />
              </div>
              <div className="col">
                <CompanyDetail title="Datos de la Empresa" company={company} />
              </div>
            </div>
            <ListItemsDetail title="Productos de la Factura" items={items} handlerDeleteItem={id => handlerDeleteItem(id)}/>
            <TotalView total={total} />
            <button className="btn btn-secondary"
            onClick={ onActiveForm }> {!activeForm ? 'Agregar Item' : 'Cerrar Form'}</button>
            {!activeForm ? '' : <FormItemsView handler={handlerAddItems} />}
          </div>
        </div>
      </div>
    </>
  );
};

//con ctrl+ c cierro el proceso en la terminal cuando esta levantado el servidor
