
import PropTypes from 'prop-types';
export const ClientDetail = ({ title, client })=>{
    
   
    const { name: nameClient,
         lastname, 
         address:{ 
            country, 
            city, 
            street, 
            number} 
        } = client;

    return(
        <>
         <h3> { title } </h3>
        <ul className="list-group">
          <li className="list-group-item active">Nombre y Apellido: {nameClient} {lastname}</li>
          <li className="list-group-item">Pais: {country}/{city}</li>
          <li className="list-group-item">
            Calle: {street} {number}
          </li>
        </ul>
        </>
    )
}

ClientDetail.propTypes ={
    title: PropTypes.string.isRequired,
    client :PropTypes.object.isRequired,
}