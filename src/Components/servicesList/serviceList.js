import { Link, useParams } from 'react-router-dom';
import Paginate from '../paginate/paginate';


const ServicesList = ({services, handlePageClick, pageCount}) => {

    console.log(services)

    return(
        <>
        
        <div className='row'>

{services.map((service)=> {
    return(
      <div className='col-12 col-md-4 serviceRow'>
    <div id='serviceOne' style={{backgroundImage: `url(${service.img})`}}>
        <div className='homeCare' >
                <img src={service.icon} width="60px"/>
                <h2>{service.title}</h2>
                <p>{service.description.substring(0, 80)}...
                </p>
                
                
          <button type="button" class="btn aBtn">
            <Link to={`/services/${service.title}`}>
                Learn More <i class="fa-sharp fa-solid fa-right-long"> </i>
            </Link>
          </button>
                
        </div>
    </div>
</div>                                                                                                                
    )
})}

<Paginate 
        pageCount={pageCount}
        handlePageClick={handlePageClick}/>
  
</div>
        </>
    )
}

export default ServicesList;
    