import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import { Lock, User, Sparkles, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import Bg from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LoginPage(props) {
  const Auth = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(formData) {
    console.log("Form Data Entries:", Array.from(formData.entries()));
    const username = formData.get("username");
    const password = formData.get("password");

    if (Auth.userAuth.user === null) {
      const result = await Auth.login(username, password);
      navigate("/home");
    } else {
      console.log("Already Logged In!");
      navigate("/home");
    }
  }

  return (
    <>
      <Navbar />
      <Bg>
        {/* Main wrapper div from About.jsx */}
        <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300"> {/* Removed font */}
                  Secure Access
                </span>
              </div>
              <h1
                className="text-4xl font-bold text-white mb-2"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Admin{" "}
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Login
                </span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed"> {/* Removed font, matched style */}
                Access the SDS admin dashboard
              </p>
            </div>

            {/* Login Card */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 shadow-xl">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  handleLogin(formData);
                }}
                className="space-y-6"
              >
                {/* Username Input */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-300 mb-2" /* Removed font */
                  >
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-purple-400" />
                    </div>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all" /* Removed font */
                      placeholder="Enter your username"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300 mb-2" /* Removed font */
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-purple-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all" /* Removed font */
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Sign In
                </button>

                {/* Success Message */}
                {Auth.userAuth.user != null && (
                  <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
                    <p className="text-green-400 text-sm font-medium"> {/* Removed font */}
                      ✓ Logged in successfully!
                    </p>
                  </div>
                )}

                {/* Registration Link */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 text-center">
                  <p className="text-gray-400 text-sm mb-3"> {/* Removed font */}
                    New admin? Request access to the dashboard
                  </p>
                  <Link
                    to="/register"
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-cyan-400 transition-colors text-sm font-medium" /* Removed font */
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>Register as Admin</span>
                  </Link>
                </div>
              </form>
            </div>

            {/* Footer Note */}
            <p className="text-center text-gray-500 text-sm mt-6"> {/* Removed font */}
              For authorized personnel only
            </p>
          </div>
          
        </div>
      </Bg>
    </>
  );
}