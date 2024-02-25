export default function About(props) {
	return (
		<div
			className={
				props.theme === 'dark'
					? `${props.theme} outlineDark`
					: `${props.theme} outlineLight`
			}
			id={`${styles.aboutContainer}`}
		>
			<div>
				<h4>Español</h4>
				<br />
				<span>Blue Archive Database</span> es mi segunda aplicación full stack
				desarrollada, diseñada como una 'wiki' donde los usuarios pueden acceder
				a una variedad de datos relacionados con el popular juego para móviles
				Blue Archive.{' '}
				<a
					href="https://bluearchive.nexon.com/home"
					className={`${styles.anchor} ${props.theme}`}
					target="_blank"
				>
					Blue Archive
				</a>
				.
				<p>
					Para la implementación de este proyecto, se empleó la biblioteca de
					JavaScript React para desarrollar el frontend, mientras que el backend
					se construyó utilizando Fastify en conjunto con MongoDB.
				</p>
				<br />
				<p>
					La funcionalidad principal de la aplicación consiste en enviar
					solicitudes Fetch a la API del backend para recuperar la información
					almacenada sobre los personajes en la base de datos MongoDB, y
					presentarla de manera accesible en la interfaz de usuario.
				</p>
				<br />
				<p>
					Es importante destacar que todos los personajes e ilustraciones
					mostrados en esta aplicación son propiedad del juego para móviles
					mencionado previamente. La información utilizada fue obtenida de la{' '}
					<a
						href="https://bluearchive.wiki/wiki/Characters"
						target="_blank"
						className={`${styles.anchor} ${props.theme}`}
					>
						wiki
					</a>{' '}
					del juego con fines educativos y de aprendizaje.
				</p>
				<br />
				<h4>English</h4>
				<br />
				<span>Blue Archive Database</span> is my second full stack application
				developed, designed as a 'wiki' where users can access a variety of data
				related to the popular mobile game{' '}
				<a
					href="https://bluearchive.nexon.com/home"
					className={`${styles.anchor} ${props.theme}`}
					target="_blank"
				>
					Blue Archive
				</a>
				.
				<p>
					For the implementation of this project, the JavaScript React library
					was used to develop the frontend, while the backend was built using
					Fastify in conjunction with MongoDB.
				</p>
				<br />
				<p>
					The main functionality of the application involves sending Fetch
					requests to the backend API to retrieve stored information about the
					characters in the MongoDB database and present it in a user-friendly
					interface.
				</p>
				<br />
				<p>
					It is important to note that all characters and illustrations shown in
					this application are property of the aforementioned mobile game. The
					information used was obtained from the game's{' '}
					<a
						href="https://bluearchive.wiki/wiki/Characters"
						target="_blank"
						className={`${styles.anchor} ${props.theme}`}
					>
						wiki
					</a>{' '}
					for educational and learning purposes.
				</p>
			</div>
			<a
				href="https://github.com/Nyasper/Proyecto-2--Blue-Archive-character-selection-react"
				className={props.theme}
				id={styles.githubAnchor}
				target="_blank"
			>
				<img src="/extras/github.svg" alt="github svg" />
				<p>My Github</p>
			</a>
		</div>
	);
}
import styles from '../styles/about.module.css';
