import { login } from './action';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <form className="flex flex-col gap-4 max-w-xl w-full p-4">
        <label htmlFor="email">Email:</label>
        <input
          className="border border-white p-2 rounded-lg"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="border border-white p-2 rounded-lg"
          id="password"
          name="password"
          type="password"
          required
        />
        <button formAction={login} className="bg-blue-500 hover:bg-blue-700  text-white p-2 px-12 rounded-full self-center">
          Log in
        </button>
        <div className="self-center">
          Don't have an account? <Link className="hover:underline" href="/sign-up">Sign up</Link>
        </div>
      </form>
    </div>
  );
}