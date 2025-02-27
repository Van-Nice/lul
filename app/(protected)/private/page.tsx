import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
// import { User } from '@supabase/supabase-js'; // Import Supabase User type

// app/(protected)/private/page.tsx
export default async function PrivatePage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  // Check if user exists; redirect if not authenticated
  if (!data.user) {
    redirect('/login'); // Adjust the redirect path as needed
  }

  return <p>Hello {data.user.email}</p>;
}