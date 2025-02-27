import { login, signup } from './action';

export default function LoginPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <form className="flex flex-col gap-4 max-w-xl w-full p-4">
        <label htmlFor="email">Email:</label>
        <input
          className="border border-white p-2"
          id="email"
          name="email"
          type="email"
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className="border border-white p-2"
          id="password"
          name="password"
          type="password"
          required
        />
        <button formAction={login} className="bg-blue-500  text-white p-2">
          Log in
        </button>
        <button formAction={signup} className="bg-green-500 text-white p-2">
          Sign up
        </button>
      </form>
    </div>
  );
}