import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="py-32 text-center">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="text-gray-600 mt-4">Page not found.</p>
      <Link
        to="/"
        className="inline-block mt-6 text-purple-600 hover:text-purple-700 font-medium"
      >
        Back to home
      </Link>
    </section>
  );
}

export default NotFound;
