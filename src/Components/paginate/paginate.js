import ReactPaginate from 'react-paginate';

const Paginate = ({handlePageClick, pageCount}) => {
console.log(handlePageClick)
    return(
        <>

        <div className='mt-5'>

        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={4}
            renderOnZeroPageCount={null}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
        />

        </div>


            {/* <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link"
                        href="#" 
                        onClick={prevPage}
                        aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>
                    {pageNumbers.map(numbers => (
                        <li key={numbers} class={`page-item ${currentPages == numbers ? 'active' : ''}`}>
                            <a onClick={()=> setCurrentPages(numbers)}
                            class="page-link" 
                            href="#">{numbers}</a>
                         </li>
                    ))}
                    
                    <li class="page-item">
                        <a class="page-link" 
                            href="#" 
                            aria-label="Next"
                            onClick={nextPage}>
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
                </nav> */}
        </>
    )
}


export default Paginate;