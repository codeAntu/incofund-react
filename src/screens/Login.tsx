import { Key, Phone } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-[100dvh] flex flex-col p-5 justify-center gap-8">
      <div className="flex flex-col gap-10">
        <div className="text-3xl p-8 bg-accent">Helo</div>
        <div className="flex flex-col justify-center border items-center gap-2">
          <div className="text-3xl text-accent font-medium">Welcome</div>
          <div className="opacity-55 font-medium text-sm">
            Welcome to Incogroup investing app
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <div className="text-sm opacity-50 font-medium px-1">Phone Number</div>
            <div className="bg-accent/10 border border-accent rounded-lg w-full flex items-center px-2">
              <Phone className="w-7 h-7 text-white bg-accent rounded-full p-1.5 " />
              <input
                type="text"
                className="bg-transparent w-full p-4 outline-none rounded-lg text-sm"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="text-sm opacity-50 font-medium px-1">Phone Number</div>
            <div className="bg-accent/10 border border-accent rounded-lg w-full flex items-center px-2">
              <Phone className="w-7 h-7 text-white bg-accent rounded-full p-1.5 " />
              <input
                type="text"
                className="bg-transparent w-full p-3.5 outline-none rounded-lg text-sm"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="text-right text-sm text-accent px-2 pb-1 opacity-90">
            <a href="">forget password?</a>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-10">
          <button className="bg-accent p-3.5 text-white w-full rounded-xl text-sm font-medium">
            {" "}
            Sign In
          </button>
          <div className="flex w-full text-black items-center opacity-30 px-2 gap-1">
            <hr className="border-t-2 border-black w-full" />
            <p className="text-xs ">Or</p>
            <hr className="border-t-2 border-black w-full" />
          </div>
          <button className="p-3.5 w-full rounded-xl text-sm font-medium border-2 border-accent text-accent ">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
