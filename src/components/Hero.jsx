import Image from "next/image";
export const Hero = (heroprops) => {
  return (
    <div className="w-full ">
      <div className="flex  max-md:flex-col-reverse items-center max-sm:mx-1 ">
        <div className="w-7/12 max-md:w-11/12">
          <h1 className="text-6xl max-md:text-4xl">Hi I'm Battulga 👋</h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 4 years, I still love it as if it was something new.{" "}
          </p>
        </div>
        <div className="relative w-5/12 max-h-full max-sm:w-11/12 max">
          <div className="w-[280px] h-[280px] absolute left-8 top-4 bg-gray-300 max-sm:left-1"></div>
          <div className="w-[280px] h-[280px] relative">
            <Image
              src="/profile.jpeg"
              fill
              className="object-contain absolute top-5 left-8 border-8 border-solid border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
