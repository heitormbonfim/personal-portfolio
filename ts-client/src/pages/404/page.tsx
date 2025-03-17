import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/Global";
import Loading from "../../components/loading";

export default function Page404() {
  const { loading } = useContext(GlobalContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-404 flex h-screen w-full flex-col items-center justify-center">
      <h1 className="my-5 pt-10 text-2xl font-extrabold text-zinc-50 lg:text-4xl">
        What you lookin' for??
      </h1>
      <Link
        to="/"
        className="text-center font-semibold text-green-500 underline lg:text-lg"
      >
        Go back
      </Link>
    </div>
  );
}
