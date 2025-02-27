import { createClient } from '@/utils/supabase/server';

export default async function AccountPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return (
    <div className="h-full flex flex-col items-centerr">
      <h1>Account</h1>
      <div>Email {data.user?.email}</div>
    </div>
  )
}