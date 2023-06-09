'use client'
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import requests from "@/utils/request";
import axios from "axios";
import { Movie } from "@/typescript";
import Row from "@/components/Row";
import useAuth from "@/hooks/useAuth";
import { useRecoilValue } from "recoil";
import { modalState } from "@/atoms/modalAtoms";
import Modal from "@/components/Modal";
import useList from "@/hooks/useList";

type Props = {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
  randomMovie: Movie;
};

function Home({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
  randomMovie
}: Props) {
  const showModal = useRecoilValue(modalState);
  const { loading, user } = useAuth()
  const list = useList(user?.uid)
  if (loading === null) return null

  return (
    <div
    className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
      showModal && '!h-screen overflow-hidden'
    }`}
  >
      <div>{}</div>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner randomMovie={randomMovie} />
        <section>
          <section className="md:space-y-24">
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Top Rated" movies={topRated} />
            <Row title="Action Thrillers" movies={actionMovies} />
            {/* My List Component */}
            {list.length > 0 && <Row title="My List" movies={list} />}
            <Row title="Comedies" movies={comedyMovies} />
            <Row title="Scary Movies" movies={horrorMovies} />
            <Row title="Romance Movies" movies={romanceMovies} />
            <Row title="Documentaries" movies={documentaries} />
          </section>
        </section>
      </main>
      {showModal && <Modal/>}
    </div>
  );
}

function fetchData(): Promise<Props> {
  return Promise.all([
    axios.get(requests.fetchNetflixOriginals).then((res) => res.data.results),
    axios.get(requests.fetchTrending).then((res) => res.data.results),
    axios.get(requests.fetchTopRated).then((res) => res.data.results),
    axios.get(requests.fetchActionMovies).then((res) => res.data.results),
    axios.get(requests.fetchComedyMovies).then((res) => res.data.results),
    axios.get(requests.fetchHorrorMovies).then((res) => res.data.results),
    axios.get(requests.fetchRomanceMovies).then((res) => res.data.results),
    axios.get(requests.fetchDocumentaries).then((res) => res.data.results)
  ]).then(([netflixOriginals, trendingNow, topRated, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries]) => {
    const randomMovie =
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)];

    return {
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
      randomMovie
    };
  });
}

function HomeContainer() {
  const [data, setData] = useState<Props | null>(null);

  useEffect(() => {
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return null;
  }

  return <Home {...data} />;
}

export default HomeContainer;
