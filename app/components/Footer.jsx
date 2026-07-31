export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Encore Ticket.
        All Rights Reserved.
      </div>
    </footer>
  );
}