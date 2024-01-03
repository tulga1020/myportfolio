import Image from "next/image";
export const Pictures = (props) => {
  const { picPath, shadowClasses, imageDivClass, imageContainDiv, imageClass } =
    props;
  return (
    <div className={imageContainDiv}>
      {/* relative max-h-full max-sm:w-11/12 max cover my-8 flex items-center" */}
      <div className={shadowClasses}></div>
      <div className={imageDivClass}>
        <Image
          src={picPath}
          fill
          className={imageClass}
          //   "`cover absolute top-5 left-8 border-8 border-solid border-white max-md:w-[50%] max-md:h-[50%]`"
        />
      </div>
    </div>
  );
};
``;
