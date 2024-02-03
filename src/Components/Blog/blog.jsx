import React, { useState } from 'react';
import '../Blog/blog.css'
import trends from '../../json/trends.json';






const Blog = () => {

   const itemsPerPage = 2;
   const [currentPage, setCurrentPage] = useState(1);
 
   const totalPages = Math.ceil(trends.length / itemsPerPage);
 
   const handlePrevPage = () => {
     setCurrentPage((prevPage) => prevPage - 1);
   };
 
   const handleNextPage = () => {
     setCurrentPage((prevPage) => prevPage + 1);
   };
 
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const visibleTrends = trends.slice(startIndex, endIndex);

    
    
  return (
    
   <div className="blogParent" >
            
         <div className='tHeading'><h1>TRENDING</h1> </div>

         <div className='container'>      
         <div id="carouselExampleCaptions" class="carousel slide">
               <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
               </div>
               <div class="carousel-inner">
                  <div class="carousel-item active">
               {/* Slider Content */}
                  <div className='row'>
                     <div className='col-12 col-md-6 tColOne'>
                        <img src={require('../../images/taxi-man.jpg')} width="100%"/>
                     </div>
                     <div className='col-12 col-md-6 tColTwo'>
                           <h6>Business, Travel <span>- july 2, 2020</span></h6>
                              <h1>Your most unhappy cusstomer are your greatest source of learning </h1>
                              <p>Far far away, behind the word mountains,far 
                                 from countries vikalia and consonantia,there
                                 live the blind tetxts. Separated thry live in Booksgrove 
                                 right at the coast of the semantics, a large language ocean
                              </p>
                              <div className='ceo'>
                                 <img src='https://res.cloudinary.com/ilove2support/image/upload/v1687463708/Excella-consult/nurse-girl_qu8t1q.png'
                                 alt='...'/>
                                 <p>Sergy Campbell<br/>
                                 <span>CEO and Founder</span></p>
                              </div>
                     </div>
                  </div>

                  </div>

               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
               </button>
            </div>
            </div>


            <div className='container'>
            <div className="row">
               
               {visibleTrends.map((trend, index) => (
                     <div className="col-12 col-md-6">
                        <div className="trendsBox blogMobile" key={index}>
                           <img src={trend.img}  />
                           <h6>Business, Travel
                               <span>- july 2, 2020</span></h6>
                           <h1>{trend.heading}</h1>
                           <p>{trend.deatials}</p>
                           <div className="ceo">
                              <img src={trend.ceopic} />
                              <p>Sergy Campbell<br/>
                              <span>CEO and Founder</span></p>
                           </div>
                        </div>
                     </div>
                            
                        ))}
            </div>
            </div>  
                     
         
      
         <div className="paginationControls">
         <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
         </button>
         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next
         </button>
         </div>
  

  </div>

  )
}

export default Blog
