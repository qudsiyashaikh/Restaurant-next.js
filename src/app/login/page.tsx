import { Mail, Lock } from "lucide-react"; // Install lucide-react if needed

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-100 via-pink-100 to-red-100 px-4 font-sans">
      <div className="w-full max-w-md bg-white/60 backdrop-blur-lg border border-white/30 p-8 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-red-600 mb-6">
          🍽️ Husaini Login
        </h2>

        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
            <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-400">
              <Mail className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Password</label>
            <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-yellow-400">
              <Lock className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full outline-none bg-transparent"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-5">
          Don’t have an account?{" "}
          <a href="/register" className="text-red-600 font-semibold hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
