import { handleDelete } from "@/app/actions";

export default function CategoryList({categories}) {
 
  return (
    <div className="p-6 bg-white shadow rounded-md">
      <h2 className="text-xl font-semibold mb-4">All Categories</h2>
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <tr key={cat._id}>
                <td className="border px-4 py-2">{cat.name}</td>
                <td className="border px-4 py-2">{cat.description}</td>
                <td className="border px-4 py-2">
                 <form action={handleDelete}>
                  <input type="hidden" value={JSON.stringify(cat._id)} name="_id"/>
                  <input type="submit" value={"X"} className="bg-red-500 text-white px-3 py-2 rounded-lg"/>
                 </form>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No categories found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
