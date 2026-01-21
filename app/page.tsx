import { SaveButton } from '@/components/SaveButton';
import { cookies } from 'next/headers';

export default async function Page() {
  async function setCookie() {
    'use server';
    await new Promise((resolve) => setTimeout(resolve, 1_000));
    const jar = await cookies();

    jar.set('isLoggedIn', '1');
  }

  return (
    <div className="m-8">
      <p>There is no isLoggedIn cookie.</p>

      <form action={setCookie} className="mt-4">
        <SaveButton
          className="data-pending:opacity-50 bg-gray-300 px-3 py-1.5 rounded"
          type="submit"
        >
          Set the cookie
        </SaveButton>
      </form>
    </div>
  );
}
