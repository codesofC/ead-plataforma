import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <div className="w-full h-screen lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center py-12 order-2">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 items-center justify-center">
            <div className="w-[175px]">
              <Image
                src={"/assets/logo.png"}
                width={320}
                height={120}
                alt="Logo image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">CPF ou Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="000-000-000-00"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block order-1">
        <Image
          src="/assets/loginImg.png"
          alt="Image"
          width="2500"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default Login;
