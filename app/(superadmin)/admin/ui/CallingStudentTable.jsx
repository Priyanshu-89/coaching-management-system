"use client";

import { handleApprove } from "@/app/actions";

const CallingStudentTable = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user, id) => (
            <tr key={id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm flex items-center gap-3">
                {
                  user.status== false && (
                    <form action={handleApprove}>
                      <input type="hidden" name="_id" value={user._id} />
                       <button type="submit" className="px-3 py-1 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 transition">
                  Approve
                </button>
                    </form>
                  )
                }
              
                <button className="ml-2 px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CallingStudentTable;
