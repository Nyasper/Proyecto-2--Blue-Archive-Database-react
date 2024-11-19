import About from './about';
import { useStudents } from '../stores/useStudents';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
	const { students } = useStudents();
	useEffect(() => {
		if (!students) return;
		console.log(students[0]);
	}, [students]);

	const [busqueda, setBusqueda] = useState('');
	const filtrado = useMemo(() => {
		if (!students) return students;

		const resultado = students.filter((s) =>
			s.charaName.toLowerCase().startsWith(busqueda.toLowerCase())
		);

		return resultado;
	}, [busqueda, students]);
	return (
		<>
			<h2>Buscando: {busqueda}</h2>
			<input
				type="text"
				name="searchM"
				id="searchM"
				value={busqueda}
				onChange={(e) => setBusqueda(e.target.value)}
			/>
			<ul>
				{filtrado?.map((s) => (
					<li>{s.charaName}</li>
				))}
			</ul>
			<About />
		</>
	);
}
