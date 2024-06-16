import React from "react";
import { NavLink } from "react-router-dom";

const Departments = () => {
  const departmentsData = [
    { name: "Information Technology", shortName: "IT" },
    { name: "Computer Engineering", shortName: "CE" },
    { name: "Mechanical Engineering", shortName: "ME" },
    { name: "Electrical Engineering", shortName: "EE" },
  ];
  return (
    <>
      <div className="w-full h-[100vh] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Departments</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-md">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department Name
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {departmentsData.map((course, idx) => (
                  <tr key={idx} className="bg-white">
                    <NavLink
                      to={`/departments/${course.shortName}`}
                      className={""}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900 hover:text-blue-400">
                          {course.name}
                        </div>
                      </td>
                    </NavLink>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
