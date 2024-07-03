import { useDeleteStudentMutation } from "@/redux/features/studentsApi";
import { useRouter } from 'next/router';
import React from 'react';

const DeleteStudentButton = ({ studentId }) => {
  const [deleteStudent, { isLoading, error }] = useDeleteStudentMutation();
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteStudent(studentId).unwrap();
      router.push('/');
    } catch (err) {
      console.error("Failed to delete student :", err);
    }
  };

  return (
    <button onClick={handleDelete} disabled={isLoading}>
      {isLoading ? "Deleting..." : "Delete Student"}
      {error && <p className="error">Failed to delete student: {error.message}</p>}
    </button>
  );
};

export default DeleteStudentButton;
