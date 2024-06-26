"use client";

import { useState, ChangeEvent, SyntheticEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormUserProps } from "@/types/index";
import { useFirebase } from "@/lib/Firebase/useFirebase";
import { useRouter } from "next/navigation";

const Login = () => {
  const [formUser, setFormUser] = useState<FormUserProps>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [access, setAccess] = useState(false)

  const { signInUser } = useFirebase();

  const router = useRouter();


  // Handle the value of inputs elements onChange with the id tag
  const handleForm = (event: ChangeEvent<HTMLInputElement>) => {
    setFormUser((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };


  //Submit the datas to connect the user
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    signInUser(formUser.email, formUser.password)
      .then((userCredential) => {
        //Success connection, get the userId and redirect to home page
        setFormUser({ email: "", password: "" });
        router.push("/");
      })
      .catch((err) => {
        setError("Email ou Senha incorreto");
      });
  };

  return (
    <div className="relative w-full h-screen lg:grid lg:grid-cols-5">
      <div className="flex items-center justify-center py-12 order-2 lg:col-span-2">
        <div className="flex flex-col items-center w-[350px] gap-6">
          <div className="flex justify-center items-center w-[175px]">
            <Image
              src={"/assets/logo.png"}
              width={320}
              height={120}
              alt="Logo image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <span 
              className="text-sm bg-principal p-1 rounded-sm cursor-pointer text-white"
              onClick={() => setAccess(!access)}
            >Acesso</span>
            <div className={`${access ? 'flex' : 'hidden'} flex-col font-extralight text-xs p-3 bg-gray-200 rounded-sm`}>
              <span>Email: xyz@gmail.com ou inelusjudelin01@gmail.com</span>
              <span>Senha: 123456</span>
            </div>
          </div>
          <form className="flex flex-col w-full gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formUser.email}
                required
                onChange={(e) => handleForm(e)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
              </div>
              <Input
                id="password"
                type="password"
                value={formUser.password}
                required
                onChange={(e) => handleForm(e)}
              />
            </div>
            {error ? (
              <div className="flex text-sm text-red-600">
                Email ou senha incorreto
              </div>
            ) : null}
            <Button type="submit" className="w-full bg-principal">
              Login
            </Button>
          </form>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block order-1 col-span-3">
        <Image
          src="/assets/loginm.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-[rgba(0,0,0,.7)]" />
      </div>
    </div>
  );
};

export default Login;
