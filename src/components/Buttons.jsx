export const Buttons = (props) => {
  const { buttonText, btnClass } = props;
  return (
    // <div className="flex justify-center h-fit">
    <button className={btnClass}>
      {" "}
      {/* bg-gray-200 text-gray-600 py-1 px-4 rounded-xl w-fit*/}
      {buttonText}
    </button>
    // </div>
  );
};
