import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1>Home page</h1>
      <a href="./register">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Register Page
        </button>
      </a>
    </div>
  );
}
