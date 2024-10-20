import React from 'react'
import './style/Skills.scss'
import Spring from '../assets/Spring-Boot-Logo.png'

function Skill() {
  return (
    <main className='Skills'>
      <h1 className='SkillTitle'>I Code in</h1>
        <div className='SkillInner'>
          <div>
          <img width="100" height="100" src="https://img.icons8.com/ios/100/FFFFFF/java-coffee-cup-logo--v1.png" alt="java-Logo"/>
          <h1>Java</h1>
          <p>&nbsp;&nbsp;&nbsp;Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere ,meaning that compiled Java code can run on all platforms that support Java without the need to recompile.</p>
          </div>
          <div>
          <img width="100" height="100" src="https://img.icons8.com/ios-filled/250/FFFFFF/mysql-logo.png" alt="mysql-logo"/>
          <h1>MySql</h1>
          <p>&nbsp;&nbsp;&nbsp;MySQL is an open-source relational database management system (RDBMS).Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My ,and "SQL", the initialism for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data..</p>
          </div>
          <div>
          <img width="100" height="100" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/100/FFFFFF/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="mongodb-Logo"/>
          <h1>MongoDB</h1>
          <p>&nbsp;&nbsp;&nbsp;MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License (SSPL). MongoDB is a member of the MACH Alliance.</p>
          </div>
          <div>
          <img width="100" height="100" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/100/FFFFFF/external-redis-an-in-memory-data-structure-project-implementing-a-distributed-logo-bold-tal-revivo.png" alt="redis-Logo"/>
          <h1>Redis</h1>
          <p>&nbsp;&nbsp;&nbsp;Redis (Remote Dictionary Server) is a source-available, in-memory storage, used as a distributed, in-memory key-value database, cache and message broker, with optional durability. Because it holds all data in memory and because of its design, Redis offers low-latency reads and writes, making it particularly suitable for use cases that require a cache.</p>
          </div>
          <div>
          <img width="100" height="100" src={Spring} alt="spring-logo"/>
          <h1>Spring Framework</h1>
          <p>&nbsp;&nbsp;&nbsp;The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE (Enterprise Edition) platform.</p>
          </div>
          <div>
          <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FFFFFF/git.png" alt="git"/>
          <h1>Git</h1>
          <p>&nbsp;&nbsp;&nbsp;Git is a distributed version control system used by developers for collaborative software development. Unlike client-server systems, it keeps a local copy of the entire repository, including history and version tracking, allowing for independent work without relying on network access or a central serve</p>
          </div>
          <div>
          <img width="100" height="100" src="https://img.icons8.com/glyph-neue/100/FFFFFF/github.png" alt="github"/>
          <h1>GitHub</h1>
          <p>&nbsp;&nbsp;&nbsp;GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.</p>
          </div>
          <div>
          <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FFFFFF/html-5.png" alt="html-5"/>
          <h1>HTML</h1>
          <p>&nbsp;&nbsp;&nbsp;Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.</p>
          </div>
          <div>
          <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FFFFFF/css3.png" alt="css3"/>
          <h1>CSS</h1>
          <p>&nbsp;&nbsp;&nbsp;Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
          </div>
          <div>
          <img width="100" height="100" src="https://img.icons8.com/ios-filled/100/FFFFFF/javascript.png" alt="javascript"/>
          <h1>Java Script</h1>
          <p>&nbsp;&nbsp;&nbsp;JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles.</p>
          </div>
          <div>
          <img width="100" height="100" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/100/FFFFFF/external-react-a-javascript-library-for-building-user-interfaces-logo-regular-tal-revivo.png" alt="react-Logo"/>
          <h1>React</h1>
          <p>&nbsp;&nbsp;&nbsp;React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.</p>
          </div>
          <div>
          <img width="100" height="100" src="https://img.icons8.com/ios/100/FFFFFF/sass.png" alt="sass-Logo"/>
          <h1>Sass</h1>
          <p>&nbsp;&nbsp;&nbsp;Sass consists of two syntaxes. The original syntax, called "the indented syntax," uses a syntax similar to Haml. It uses indentation to separate code blocks and newline characters to separate rules. The newer syntax, SCSS (Sassy CSS), uses block formatting like that of CSS. It uses braces to denote code blocks and semicolons to separate rules within a block.</p>
          </div>
        </div>
    </main>
  )
}

export default Skill

