import React from 'react'
import './style/Project.scss'

function project() {
  return (
    <main className='Project'>
      <h1 className='ProjectTitle'>Project I Created</h1>
      <div className='ProjectOuter'>
          <div>
              <h1> Peter Griffin Template </h1>
              <h2> Details : </h2>
              <p> This is a Static Website,and using HTML,CSS And JavaScript to build Site, given below the Screenshot And LiveDemo. </p>
              <a target='_blank' href="https://ranjithv88.github.io/Peter-Griffin--Templates/"> Live Demo </a>
              <a target='_blank' href="https://github.com/Ranjithv88/Peter-Griffin--Templates/blob/master/ScreenShot/Peter%20Griffin%20Sample%20page%20.pdf"> Sample Screenshot </a>
              <a target='_blank' href="https://github.com/Ranjithv88/Peter-Griffin--Templates"> GitHub Repository </a>
          </div>
          <div>
              <h1> Furniture Template </h1>
              <h2> Details : </h2>
              <p> This Site is the Dynamic Website ,React JS Use to Create Site this ia Furniture E-commerce site ,this project using front End is the React Js And no BackEnd Using ,given below the Screenshot And LiveDemo. </p>
              <h2> FrontEnd : ReactJS </h2>
              <h2> BackEnd : ------ </h2>
              <a target='_blank' href="https://furniture-templates.vercel.app/"> Live Demo </a>
              <a target='_blank' href="https://github.com/Ranjithv88/Furniture--Templates/blob/master/ScreenShot/Furniture%20Sample%20ScreenShot%20.pdf"> Sample Screenshot </a>
              <a target='_blank' href="https://github.com/Ranjithv88/Furniture--Templates"> GitHub Repository </a>
          </div>
        </div>
    </main>
  )
}

export default project

