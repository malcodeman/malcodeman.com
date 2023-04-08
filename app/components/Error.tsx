type Props = {
  reset: () => void;
};

function Error(props: Props) {
  const { reset } = props;
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl mb-4">Something went wrong 🔥</h1>
      <button
        className="px-4 py-2 font-semibold text-sm rounded-full bg-[#F28444] text-[#202126]"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
