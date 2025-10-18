import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import Hero from "../components/Hero";

export default function Home() {
  const Auth = useContext(AuthContext);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <section className="text-center py-12 bg-blue-50">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome{" "}
          <span className="text-indigo-600">
            {Auth?.userAuth?.user ? Auth.userAuth.user : ""}
          </span>
          !
        </h1>
        <p className="text-gray-600 mt-3">
          Glad to see you on the SDS Portal. Explore projects, members, and more.
        </p>
      </section>

      {/* About Section (previous Home content) */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">About SDS</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The Software Development Section (SDS) is a student-led club dedicated to building
          impactful software projects, hosting tech events, and promoting innovation in the
          field of engineering.
        </p>
      </section>
    </>
  );
}
