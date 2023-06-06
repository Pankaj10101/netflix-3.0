import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <Header />
      <main>
        <Banner/>
      </main>
    </div>
  );
}
