/**
 * @dev returns the current window size
 * @props type
 * @props width
 */
type InputProps = {
  text: string;
  width: string;
  toggle?: boolean | null;
};
const Input = ({ text, width, toggle }: InputProps) => {
  return (
    <div>
      <form action="">
        <p className="font-normal">{text}*</p>
        {toggle ? (
          <input
            type="text"
            className={`b mt-3 pl-2 border-gray-300 border rounded text-black h-9 ${width}`}
          />
        ) : (
          <input
            type="text"
            className={`b mt-3  pl-2 text-black h-9 ${width}`}
          />
        )}
      </form>
    </div>
  );
};

export default Input;
