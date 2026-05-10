import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-zinc-200 shadow-sm ">
        <CardHeader>
          <CardTitle className="text-zinc-700">Login to your account</CardTitle>
          <CardDescription className="text-zinc-400">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email" className="text-zinc-600">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="border-zinc-200 text-zinc-700 placeholder:text-zinc-300"
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm text-zinc-500 underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required  className="border-zinc-200"/>
              </Field>
              <Field>
                <Button type="submit" className="w-full bg-[#F15946] hover:bg-[#D94E3D] text-white">Login</Button>
                <Button variant="outline" type="button" className="w-full border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-800">
                  Login with Google
                </Button>
                <FieldDescription className="text-center text-zinc-400">
                  Don&apos;t have an account? <a href="#" className="text-[#F15946] hover:underline underline-offset-4">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
