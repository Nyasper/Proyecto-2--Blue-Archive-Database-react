// import { useFetch } from './useFetch';
// import type { Student } from '../models/student.model';

/*
export function useStudents() {
	const { data: students = [], error } =
		useFetch<Student[]>(`/data/students.json`);

	return { students, error };
}
*/
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import type { Student } from '../models/student.model';

// Crear el contexto
const StudentsContext = createContext<{
	students: Student[];
	error: string | null;
}>({
	students: [],
	error: null,
});

// Proveedor de contexto
export function StudentsProvider({ children }: { children: React.ReactNode }) {
	const { data: students = [], error } =
		useFetch<Student[]>(`/data/students.json`);

	return (
		<StudentsContext.Provider value={{ students, error }}>
			{children}
		</StudentsContext.Provider>
	);
}

// Custom hook para usar el contexto
export function useStudents() {
	return useContext(StudentsContext);
}
