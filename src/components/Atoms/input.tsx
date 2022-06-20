/**
 * @dev returns the current window size
 * @props type
 * @props width
 */
type InputProps = {
  text: string;
  width: string;
};
const Input = ({ text, width }: InputProps) => {
  return (
    <div>
      <form action="">
        <p className="font-bold">{text}*</p>
        <input type="text" className={`b mt-3 h-9 ${width}`} />
      </form>
    </div>
  );
};

export default Input;
