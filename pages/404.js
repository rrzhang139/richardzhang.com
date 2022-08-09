import LandingContainer from "../components/Containers/LandingContainer";
import Link from "next/link";
const NotFound = () => {
  return (
    <LandingContainer classnames="text-center mt-40 space-y-2">
      <p>Oops, maybe someting went wrong?</p>
      <Link href="/">
        <p>
          <span className="text-blue-400 hover:cursor-pointer">
            Take me back to homepage
          </span>
        </p>
      </Link>
    </LandingContainer>
  );
};

export default NotFound;
