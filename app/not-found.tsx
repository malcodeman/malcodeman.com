import { redirect } from "next/navigation";

function NotFound() {
  return redirect("/");
}

export default NotFound;
