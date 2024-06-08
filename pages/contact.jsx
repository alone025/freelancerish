import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
