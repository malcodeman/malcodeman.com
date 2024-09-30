type Props = {
  reset: () => void;
};

function Error(props: Props) {
  const { reset } = props;
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="mb-4 text-4xl">Something went wrong 🔥</h1>
      <button
        className="rounded-full bg-[#F28444] px-4 py-2 text-sm font-semibold text-[#202126]"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

export default Error;
