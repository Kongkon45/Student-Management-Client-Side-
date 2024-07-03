// "use client";
// import { useGetStudentQuery, useUpdateStudentMutation } from "@/redux/features/studentsApi";
// import { useRouter } from 'next/navigation'
// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import Link from "next/link";

// const UpdateStudent = () => {
//   const router = useRouter();
//   const { Id } = router.query;

//   const { data: student, isLoading: isFetching, error: fetchError } = useGetStudentQuery(Id);
//   const [updateStudent, { isLoading, error: updateError }] = useUpdateStudentMutation();

//   const { register, handleSubmit, reset, formState: { errors } } = useForm({
//     defaultValues: {
//       name: '',
//       email: '',
//       age: '',
//       gender: ''
//     }
//   });

//   useEffect(() => {
//     if (student) {
//       reset(student);
//     }
//   }, [student, reset]);

//   const onSubmit = async (formData) => {
//     try {
//       await updateStudent({ Id, ...formData }).unwrap();
//       reset();
//       router.push('/');
//     } catch (err) {
//       console.error("Failed to update student :", err);
//     }
//   };

//   if (isFetching) return <p>Loading...</p>;
//   if (fetchError) return <p>Error fetching student data: {fetchError.message}</p>;

//   return (
//     <div>
//       <form
//         className="w-1/3 mx-auto bg-white border-2 rounded-[10px] shadow-lg"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <div className="flex justify-end pr-5 pt-5">
//           <button className="bg-blue-500 text-white py-1 px-4 rounded-[10px] font-semibold text-lg">
//             <Link href={`/`}>Back</Link>
//           </button>
//         </div>
//         <div className="px-10 py-6">
//           <h3 className="text-center text-3xl font-semibold py-4">Update Student</h3>
//           <div>
//             <label className="text-xl font-semibold text-black">
//               Name <sup className="text-red-500 text-base font-semibold">*</sup>
//             </label>
//             <br />
//             <input
//               className="w-full border border-black py-1 px-2 rounded-[10px]"
//               placeholder="Enter your Name ..."
//               {...register("name", { required: true, maxLength: 20 })}
//             />
//             <p>
//               {errors.name && (
//                 <span className="text-red-500 text-sm font-normal">
//                   This field is required
//                 </span>
//               )}
//             </p>
//           </div>
//           <div className="py-2">
//             <label className="text-xl font-semibold text-black">
//               Email <sup className="text-red-500 text-base font-semibold">*</sup>
//             </label>
//             <br />
//             <input
//               className="w-full border border-black py-1 px-2 rounded-[10px]"
//               placeholder="Enter your Email ..."
//               {...register("email", { required: true, maxLength: 30 })}
//             />
//             <p>
//               {errors.email && (
//                 <span className="text-red-500 text-sm font-normal">
//                   This field is required
//                 </span>
//               )}
//             </p>
//           </div>
//           <div>
//             <label className="text-xl font-semibold text-black">
//               Age <sup className="text-red-500 text-base font-semibold">*</sup>
//             </label>
//             <br />
//             <input
//               className="w-full border border-black py-1 px-2 rounded-[10px]"
//               placeholder="Enter your Age ..."
//               {...register("age", { required: true, min: 18, max: 99 })}
//             />
//             <p>
//               {errors.age && (
//                 <span className="text-red-500 text-sm font-normal">
//                   This field is required
//                 </span>
//               )}
//             </p>
//           </div>
//           <div className="py-2">
//             <label className="text-xl font-semibold text-black">
//               Gender <sup className="text-red-500 text-base font-semibold">*</sup>
//             </label>
//             <br />
//             <input
//               className="w-full border border-black py-1 px-2 rounded-[10px]"
//               placeholder="Enter your Gender ..."
//               {...register("gender", { required: true, maxLength: 20 })}
//             />
//             <p>
//               {errors.gender && (
//                 <span className="text-red-500 text-sm font-normal">
//                   This field is required
//                 </span>
//               )}
//             </p>
//           </div>
//           <div className="flex justify-center pt-5">
//             <button
//               type="submit"
//               className="py-2 px-4 rounded-[10px] bg-green-500 text-white font-medium cursor-pointer"
//               disabled={isLoading}
//             >
//               {isLoading ? "Updating..." : "Update Student"}
//             </button>
//             {updateError && (
//               <p className="error">Failed to update student: {updateError.message}</p>
//             )}
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdateStudent;



import React from 'react';

const EditUser = () => {
  return (
    <div>
      edit page
    </div>
  );
};

export default EditUser;
