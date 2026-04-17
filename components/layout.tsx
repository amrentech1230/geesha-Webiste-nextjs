import Link from 'next/link';
import { LayoutDashboard, Newspaper, Settings, LogOut } from 'lucide-react';
import { logout } from '@/app/login/actions';

export const metadata = {
  title: "Admin Panel | Geesha Solutions",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex h-screen">
          <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
            <h1 className="text-2xl font-bold text-white mb-8">Admin Panel</h1>
            <nav className="flex flex-col space-y-2">
              <Link href="/admin" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"><LayoutDashboard size={20} /> Dashboard</Link>
              <Link href="/admin/pages" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"><Newspaper size={20} /> Pages</Link>
              <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"><Settings size={20} /> Settings</Link>
            </nav>
            <div className="mt-auto flex flex-col space-y-4">
               <form action={logout}>
                <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors">
                  <LogOut size={20} /> Logout
                </button>
               </form>
               <Link href="/" className="text-sm text-gray-400 hover:text-white">← Back to Site</Link>
             </div>
          </aside>
          <main className="flex-1 p-8 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}