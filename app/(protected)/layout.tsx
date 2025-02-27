// app/layout.tsx (or app/auth/layout.tsx) - Server Component
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login');
  }

  // Pass user data to the client component if needed
  return <div className="h-full">{children}</div>;
}