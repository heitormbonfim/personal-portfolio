import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="w-full h-screen bg-404 flex flex-col justify-center items-center">
      <h1 className="text-2xl lg:text-6xl text-zinc-50 font-extrabold my-5 pt-10">
        What you lookin' for??
      </h1>
      <Link
        to="/"
        className="underline text-center lg:text-lg font-semibold text-sky-300"
      >
        Better go back home by clicking here
      </Link>
    </div>
  );
}
