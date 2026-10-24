import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => (
  <section className="min-h-[60vh] flex flex-col items-center justify-center bg-black text-white text-center px-4">
    <Helmet>
      <title>404 | Artifice Atelier</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="mb-8">Page introuvable / Page not found</p>
    <Link to="/" className="px-8 py-3 font-bold uppercase text-black bg-white rounded-full">
      Artifice Atelier
    </Link>
  </section>
);

export default NotFound;
