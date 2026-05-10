import { LoginForm } from "@/components/login-form"
async function fakeFetch() {
  await new Promise((resolve) => setTimeout(resolve, 3000)) // 2 second delay
};
export default async function Page() {
  await fakeFetch();
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
