"use client";
import React from "react";
import Link from "next/link";
import { useDeleteStudentMutation, useGetAllStudentsQuery } from "@/redux/features/studentsApi";

const HomeComponent = () => {
  const { data, isLoading, error, refetch } = useGetAllStudentsQuery();
  const [deleteStudent] = useDeleteStudentMutation();

  // Delete student 
  const handleDelete = async (studentId) => {
    try {
      await deleteStudent(studentId).unwrap();
      refetch();  
    } catch (err) {
      console.error("Failed to delete student :", err);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <div className="flex justify-end pr-20 pt-10">
            <button className="bg-blue-500 text-white py-1 px-4 rounded-[10px] font-semibold text-lg ">
              <Link href={`/addStudent`}>Create</Link>
            </button>
          </div>
          <h3 className="text-3xl font-bold text-center my-3">Student List</h3>
          <table className="w-1/2 mx-auto ">
            <thead>
              <tr className="border-2 border-black">
                <th className="border-r-2 border-black">ID</th>
                <th className="border-r-2 border-black">Name</th>
                <th className="border-r-2 border-black">Email</th>
                <th className="border-r-2 border-black">Age</th>
                <th className="border-r-2 border-black">Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((student) => (
                <tr className="border-2 border-gray-500" key={student.Id}>
                  <td className="border-r-2 border-gray-500 text-center">
                    {student.Id}
                  </td>
                  <td className="border-r-2 border-gray-500 text-center">
                    {student.Name}
                  </td>
                  <td className="border-r-2 border-gray-500 text-center">
                    {student.Email}
                  </td>
                  <td className="border-r-2 border-gray-500 text-center">
                    {student.Age}
                  </td>
                  <td className="border-r-2 border-gray-500 text-center">
                    {student.Gender}
                  </td>
                  <td className="flex justify-around items-center">
                    <Link href={`/editStudent`}>
                      <button className="bg-green-500 py-1 px-4 rounded-[10px] text-white my-1">
                        Edit
                      </button>
                    </Link>
                    <button className="bg-blue-500 py-1 px-4 rounded-[10px] text-white my-1">
                      Read
                    </button>
                    <button  onClick={() => handleDelete(student.Id)} className="bg-red-500 py-1 px-4 rounded-[10px] text-white my-1">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HomeComponent;
