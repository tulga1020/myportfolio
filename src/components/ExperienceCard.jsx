import Image from "next/image";
export const ExperienceCard = (props) => {
  const { header, text1, text2 = "", text3 = "", text4 = "", date } = props;
  return (
    <div className="mx-auto w-[896px] flex justify-between p-8 rounded bg-white shadow-md ">
      <div className="w-3/12 p-8 ">
        <Image src="logo-upwork.svg" width={64} height={64} />
      </div>
      <div className="w-6/12 flex flex-col gap-4">
        <h3>{header}</h3>
        <ul className="list-disc">
          <li>{text1}</li>
          <li>{text2}</li>
          <li>{text3}</li>
          <li>{text4}</li>
        </ul>
      </div>
      <div className="w-2/12 flex justify-end">{date}</div>
    </div>
  );
};
