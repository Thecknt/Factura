import { invoice } from "../data/invoice"

export const getInvoice = () => {

   const total = calculateTotal(invoice.items);
        /**
         * otra manera de hacer esta cuenta de manera mas elegante es:
         *  const total = invoice.items
         * .map(item => item.price * item.quantity) //El map devuelve un nuevo arreglo
         * .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
         *  return {...invoice, total};
         * 
         * todo esto en hecho en programacion funcional, lambda
         */
    return {...invoice, total}; //retorno una copia de la factura con operado spread
}

export const calculateTotal = (items = [])=>{
    //  let total = 0;
    // invoice.items.forEach(item => {
    //     total = total + item.price * item.quantity;
    //     console.log(total);
    //     console.log(items);
    return items
    .map(item => item.price * item.quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      
}
    