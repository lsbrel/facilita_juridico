import { Link } from "react-router-dom";

export default function ({ route, label }) {
  return (
    <>
      <Link to={route} className="text-justify pl-4 cursor-pointer">
        {label}
      </Link>
    </>
  );
}
