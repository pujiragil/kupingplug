// package
import Link from "next/link";
import Image from "next/image";

// ui
import Text from "@/ui/text";
import Button from "@/ui/button";

// utils
import { cn } from "@/utils/cn";

export default function Page() {
  return (
    <div className="relative bg-[#F3F5F7] lg:min-h-screen">
      <div
        className={cn([
          "grid lg:grid-cols-2",
          "max-w-[1440px]",
          "overflow-hidden",
          "lg:rounded-lg lg:shadow-2xl",
          "lg:max-h-[720px]",
          "lg:absolute lg:inset-0 lg:m-auto",
        ])}
      >
        <div className="relative flex items-center justify-center bg-[#F3F5F7] p-8 pt-20 lg:h-full">
          <Text
            family="poppins"
            size="2xl"
            color="black/900"
            weight={500}
            className="absolute left-0 top-8 w-full text-center"
          >
            Kupingplug
          </Text>

          <Image
            src="/images/auth.png"
            width={2000}
            height={2000}
            alt="auth"
            className="w-full max-w-[420px] lg:h-[430px] lg:w-auto lg:max-w-none"
          />
        </div>

        <div className="flex justify-center bg-white">
          <div
            className={cn([
              "w-full",
              "flex flex-col gap-8 lg:justify-center",
              "px-8 py-10 lg:px-[88px]",
              "sm:max-w-[480px] md:max-w-[520px] lg:max-w-[560px] lg:max-w-[560px]",
            ])}
          >
            <div className="space-y-6">
              <h1 className="font-poppins text-[40px] font-medium text-[#121212]">
                Sign Up
              </h1>
              <Text weight={400} color="gray">
                Already have an account?{" "}
                <span className="font-semibold text-[#38CB89] hover:underline">
                  <Link href="/sign-in">Sign In</Link>
                </span>
              </Text>
            </div>
            <div className="space-y-8">
              <div className="border-b border-[#E8ECEF] pb-2">
                <input
                  type="text"
                  className="font-inter text-base font-normal text-[#6C7275] outline-none placeholder:text-[#6C7275] placeholder:opacity-100"
                  placeholder="Your name"
                />
              </div>
              <div className="border-b border-[#E8ECEF] pb-2">
                <input
                  type="text"
                  className="font-inter text-base font-normal text-[#6C7275] outline-none placeholder:text-[#6C7275] placeholder:opacity-100"
                  placeholder="Username"
                />
              </div>
              <div className="border-b border-[#E8ECEF] pb-2">
                <input
                  type="email"
                  className="font-inter text-base font-normal text-[#6C7275] outline-none placeholder:text-[#6C7275] placeholder:opacity-100"
                  placeholder="Email address"
                />
              </div>
              <div className="border-b border-[#E8ECEF] pb-2">
                <input
                  type="password"
                  className="font-inter text-base font-normal text-[#6C7275] outline-none placeholder:text-[#6C7275] placeholder:opacity-100"
                  placeholder="Password"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-md border border-[#6C7275]"></div>
                <Text size="xs" weight={400} color="gray">
                  I agree with{" "}
                  <span className="font-semibold text-[#141718]">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#141718]">
                    Terms of Use
                  </span>
                </Text>
                <p></p>
              </div>
            </div>

            <Button intent="primary" size="full" className="px-10 py-2.5">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}