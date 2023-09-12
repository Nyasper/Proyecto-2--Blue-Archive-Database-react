export default function About(props){
  return (
  <section className={props.theme === 'dark' ? `${props.theme} outlineDark` : `${props.theme} outlineLight`} id="aboutContainer" >
  <a href="https://github.com/Nyasper/Proyecto-2--Blue-Archive-character-selection-react" className={props.theme} target="_blank" >
  <img src="extras/Shiroko_Swimsuit_Sprite.webp" alt="Shiroko-pic" />
  GITHUB
  </a>
  <div>
  <h4>Español:</h4><br />
  <p>Esta representa mi segunda aplicación full stack. En este proyecto, opté por utilizar React para desarrollar el frontend y Express con MongoDB para el backend. La funcionalidad principal de la aplicación se basa en enviar peticiones Fetch a la API de mi servidor, lo que permite recuperar información de MongoDB y presentarla de manera eficiente en la interfaz de usuario.
  Todos los personajes que se muestran en mi aplicación están relacionados con el juego para móvil llamado "Blue Archive". Toda la información utilizada en la aplicación se obtuvo del sitio web "https://bluearchive.wiki/wiki/Characters". El objetivo principal de esta extracción de datos es con fines educativos y de aprendizaje.</p><br />
  <h4>English:</h4><br />
  <p>This represents my second full stack application. In this project, I chose to use React to develop the frontend and Express with MongoDB for the backend. The main functionality of the application is based on sending Fetch requests to my server's API, allowing information to be retrieved from MongoDB and presented efficiently in the user interface.
All characters shown in my app are related to the mobile game called "Blue Archive". All information used in the application was obtained from the website "https://bluearchive.wiki/wiki/Characters". The main purpose of this data extraction is for educational and learning purposes.</p>
  </div>
  </section>
  )
}