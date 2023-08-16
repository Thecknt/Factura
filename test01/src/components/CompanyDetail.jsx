
import PropTypes from 'prop-types';
export const CompanyDetail = ({ title, company }) =>{

    return (
        <>
        <h3> { title } </h3>
        <ul className="list-group">
          <li className="list-group-item active">Nombre Compañia: {company.name}</li>
          <li className="list-group-item">Numero Fiscal: {company.fiscalNumber}</li>
        </ul>
        </>
    )
  
}

CompanyDetail.propTypes ={
    title: PropTypes.string.isRequired,
    company: PropTypes.object.isRequired,
}