import React from 'react'
import './team.css'


const TeamPage = () => {
  return (
    <>
              {/**the  team page component */}
    <div className='teampage__wrapper'>
     <div className="teamcards">
            {/**the heading */}
            <h1>We're Super Professional At Our Skills</h1>

            {/**the four team card */}
          <div className="teamcardParent">
            {/**card 1 */}
            <div className="Card">
              <img
               src="https://res.cloudinary.com/ilove2support/image/upload/v1679489336/Front-end/brown_idx7jc.jpg" />
              <h2>JEFFREY BROWN</h2>
              <p>owner</p>
            </div>
            {/**card 2 */}
            <div className="Card" id='nurse'>
              <img 
              src="https://res.cloudinary.com/ilove2support/image/upload/v1679489336/Front-end/chris_iupb3m.jpg" />
              <h2>CHRIS RICHMOND</h2>
              <p>nurse</p>
            </div>
            {/**card 3 */}
            <div className="Card">
              <img 
              src="https://res.cloudinary.com/ilove2support/image/upload/v1679489336/Front-end/jennie_kiyunn.jpg" />
              <h2>JENNIE ROBERTS</h2>
              <p>doctor</p>
            </div>
            {/**card 4 */}
            <div className="Card" id='nurse'>
              <img 
              src="https://res.cloudinary.com/ilove2support/image/upload/v1679489335/Front-end/alex_tiictf.jpg" />
              <h2>ALEX GREENFIELD</h2>
              <p>nurse</p>
            </div>
          </div>

    </div>

    </div>
    </>
  )
}

export default TeamPage
