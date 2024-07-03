import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => '/users',
    }),
    getStudent: builder.query({
      query: (id) => `/users/${id}`,
    }),
    createStudent: builder.mutation({
      query: (newStudent) => ({
        url: '/users',
        method: 'POST',
        body: newStudent,
      }),
    }),
    updateStudent: builder.mutation({
      query: ({ id, ...updatedStudent }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: updatedStudent,
      }),
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetStudentQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
} = studentsApi;
