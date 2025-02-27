import { signup } from './action';
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
        <button formAction={signup} className="bg-green-500 hover:bg-green-700 text-white p-2 px-12 rounded-full self-center">
          Sign up
        </button>
        <div className="self-center">
          Already have an account? <Link className="hover:underline" href="/login">Log in</Link>
        </div>
      </form>
    </div>
  );
}