import { Button } from "@/ui/Button";
import { Heading } from "@/ui/Heading";

type Props = {
  reset: () => void;
};

function Error(props: Props) {
  const { reset } = props;
  return (
    <div className="flex h-screen flex-col items-center justify-center p-5">
      <Heading className="mb-4">Something went wrong 🔥</Heading>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}

export default Error;
