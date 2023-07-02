import { useAtom } from 'jotai';
import { studentAtom, studentData } from '@store/useAtom';

export function useStudents() {
  const [students, setStudents] = useAtom(studentAtom)
  function addStudent(name) {
    setStudents([
      ...students,
      { name: name, id: Math.random() * 100 },
    ])
  }
  function updateStudent(id, name) {
    setStudents(students.map(item => {
      if (item.id === id) {
        return {
          ...item,
          name: name
        };
      } else {
        return item;
      }
    }))
  }
  function removeStudent(id) {
    setStudents(students.filter((student) => student.id !== id))
  }
  function removeAllStudents() {
    setStudents([])
  }
  function restoreAllStudents() {
    setStudents(studentData)
  }
  return {
    addStudent,
    updateStudent,
    removeStudent,
    removeAllStudents,
    restoreAllStudents
  }
}