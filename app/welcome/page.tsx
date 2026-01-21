import { cookies } from 'next/headers';

export default async function Page() {
  async function setCookie() {
    'use server';
    const jar = await cookies();

    jar.delete('isLoggedIn');
  }

  return (
    <div className="m-8">
      <p>Welcome! There is a isLoggedIn cookie.</p>

      <form action={setCookie} className="mt-4">
        <button className="bg-gray-300 px-3 py-1.5 rounded" type="submit">
          Remove the cookie
        </button>
      </form>
    </div>
  );
}
