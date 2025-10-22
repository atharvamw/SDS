import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/Auth"
import { useNavigate } from "react-router-dom";
import { Lock, User, Sparkles, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage(props)
{   
    const Auth = useContext(AuthContext);
    const navigate = useNavigate();

    async function handleLogin(formData)
    {   
        console.log("Form Data Entries:", Array.from(formData.entries()));
        const username = formData.get("username");
        const password = formData.get("password");

        if(Auth.userAuth.user === null)
        {
            const result = await Auth.login(username,password);
            navigate("/home")
        }
        else
            console.log("Already Logged In!")
            navigate("/home")
    }

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-md mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-300">Secure Access</span>
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Admin{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Login
                        </span>
                    </h1>
                    <p className="text-gray-400">Access the SDS admin dashboard</p>
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
                            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
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
                                    className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                                    placeholder="Enter your username"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
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
                                    className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        >
                            Sign In
                        </button>

                        {/* Success Message */}
                        {Auth.userAuth.user != null && (
                            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
                                <p className="text-green-400 text-sm font-medium">
                                    ✓ Logged in successfully!
                                </p>
                            </div>
                        )}

                        {/* Registration Link */}
                        <div className="mt-6 pt-6 border-t border-purple-500/20 text-center">
                            <p className="text-gray-400 text-sm mb-3">
                                New admin? Request access to the dashboard
                            </p>
                            <Link
                                to="/register"
                                className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                            >
                                <UserPlus className="w-4 h-4" />
                                <span>Register as Admin</span>
                            </Link>
                        </div>
                    </form>
                </div>

                {/* Footer Note */}
                <p className="text-center text-gray-500 text-sm mt-6">
                    For authorized personnel only
                </p>
            </div>
        </div>
    );
}

