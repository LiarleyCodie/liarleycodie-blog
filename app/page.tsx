// import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1712403235961-3d0a14d8e33b?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
      className="min-h-screen bg-center bg-cover flex flex-col justify-center items-center"
    >
      <h1 className="max-w-80 opacity-80 text-2xl font-light text-center leading-10">
        Hi, my name is <strong>Liarley</strong> and you're in my room,
        so...
        <strong>Welcome</strong> &#58;&#41;
      </h1>
    </main>
  )
}
