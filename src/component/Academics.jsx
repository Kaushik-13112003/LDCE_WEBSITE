import React from "react";

const Academics = () => {
  const courses = [
    { name: "Civil Engineering", duration: 4 },
    { name: "Mechanical Engineering", duration: 4 },
    { name: "Electrical Engineering", duration: 4 },
    { name: "Computer Engineering", duration: 4 },
    { name: "Information Technology", duration: 4 },
    { name: "Electronics & Communication Engineering", duration: 4 },
    { name: "Chemical Engineering", duration: 4 },
    { name: "Environmental Engineering", duration: 4 },
    { name: "Instrumentation & Control Engineering", duration: 4 },
    { name: "Bio-Medical Engineering", duration: 4 },
    { name: "Architecture", duration: 5 },
  ];

  const pgCourses = [
    { name: "Master of Engineering (Civil Engineering)", duration: 2 },
    { name: "Master of Engineering (Mechanical Engineering)", duration: 2 },
    { name: "Master of Engineering (Electrical Engineering)", duration: 2 },
    { name: "Master of Engineering (Computer Engineering)", duration: 2 },
    { name: "Master of Engineering (Information Technology)", duration: 2 },
    {
      name: "Master of Engineering (Electronics & Communication Engineering)",
      duration: 2,
    },
    { name: "Master of Engineering (Chemical Engineering)", duration: 2 },
    { name: "Master of Engineering (Environmental Engineering)", duration: 2 },
    {
      name: "Master of Engineering (Instrumentation & Control Engineering)",
      duration: 2,
    },
    { name: "Master of Engineering (Bio-Medical Engineering)", duration: 2 },
    { name: "Master of Business Administration", duration: 2 },
  ];

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-8">UG Courses</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Period
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {courses.map((course, idx) => (
                <tr key={idx} className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {course.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {course.duration} years
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-8">PG Courses</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead>
              <tr className="bg-blue-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Period
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pgCourses.map((course, idx) => (
                <tr key={idx} className="bg-white">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {course.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {course.duration} years
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Academics;
