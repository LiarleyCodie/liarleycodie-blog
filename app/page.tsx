// import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/16567039/pexels-photo-16567039/free-photo-of-silhouette-of-electricity-post.jpeg?auto=compress&cs=tinysrgb&w=4160&h=4160&dpr=1")',
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
