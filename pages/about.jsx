import Link from "next/link";

const about = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default about;
