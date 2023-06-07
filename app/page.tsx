import Banner from "@/components/Banner";
import Header from "@/components/Header";
import requests from "@/utils/request";
import axios from "axios";
import { Movie } from "@/typescript";
import Row from "@/components/Row";


type Props = {
  netflixOriginals: Movie[]
}

export default async function Home() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    axios.get(requests.fetchNetflixOriginals).then((res) => res.data.results),
    axios.get(requests.fetchTrending).then((res) => res.data.results),
    axios.get(requests.fetchTopRated).then((res) => res.data.results),
    axios.get(requests.fetchActionMovies).then((res) => res.data.results),
    axios.get(requests.fetchComedyMovies).then((res) => res.data.results),
    axios.get(requests.fetchHorrorMovies).then((res) => res.data.results),
    axios.get(requests.fetchRomanceMovies).then((res) => res.data.results),
    axios.get(requests.fetchDocumentaries).then((res) => res.data.results),
  ]);
  
  // console.log(netflixOriginals)
  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <div>{}</div>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section>
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
        </section>
      </main>
    </div>
  );
}


