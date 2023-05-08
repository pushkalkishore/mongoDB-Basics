import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <Image
        src="/public/next.svg"
        alt="Next.js Logo"
        width={500}
        height={500}
      ></Image>
      <a href="./register">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Register Page
        </button>
      </a>
    </div>
  );
}
