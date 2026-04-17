import Link from "next/link";

export default function AdminPagesListPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Pages</h1>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="text-gray-600">Here you will be able to see a list of all your website pages and edit their content.</p>
        <p className="mt-4 text-sm text-gray-500">For example, you could have an "Edit" button next to "Mission & Vision" that takes you to a form.</p>
      </div>
    </div>
  );
}