import React from 'react'
import './style/NavBar.scss'

function NavBar() {
    const scroll = (y) => {
        window.scrollTo({ top: y, behavior: 'smooth' });
     };
  return (
    <header>
        <nav>
            <div className='name'>
                <h1>RANJITH KUMAR</h1>
            </div>
            <div className='menu'>
                <ul className='menuList'>
                    <li onClick={() => scroll(0)}>Home</li>
                    <li onClick={() => scroll(550)}>Project</li>
                    <li onClick={() => scroll(1200)}>Skills</li>
                    <li onClick={() => scroll(2650)}>Education</li>
                    <li onClick={() => scroll(3000)}>About</li>
                </ul>
            </div>
        </nav>
        <div className="intro">
            <div className="profile">
                <h1>My Name is Ranjith Kumar</h1>
                <h1>I Am a java Full Stuck Devoleper</h1>
                <p>A passionate Java developer with experience in building dynamic web applications using React.js and Spring Boot. Proficient in Java, JavaScript, and front-end technologies. Recently worked on projects such as an "Image-Based Plant Disease Detection" using CNN and OpenCV, and a "Dynamic Furniture E-commerce Website" with React.js.</p>
                <button type='button'>RESUME</button>
            </div>
        </div>
    </header>
  )
}

export default NavBar

