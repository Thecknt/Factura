
import PropTypes from 'prop-types';
export const InvoiceDetail = ({ id, name })=>{

    return( 
       <>
       <ul className="list-group">
          <li className="list-group-item">Id: {id}</li>
          <li className="list-group-item">Nombre: {name}</li>
        </ul>
        </>
        )
       
    }

    InvoiceDetail.propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    }
