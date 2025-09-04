import homeImage from "../assets/homeImage.png";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen w-full overflow-x-hidden">
        <img
          className="w-full h-full object-cover"
          src={homeImage}
          alt="background"
        />
      </div>
    </section>
  );
}
